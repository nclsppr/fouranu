import test from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { DECISION_MODELS } from '../src/data/decision-models.mjs';
import { selectDecisionModels, parseDecisionAmount, calculateDecisionBasket } from '../src/data/decision-engine.mjs';

const choose = (place, energy, format = 'everyday') => selectDecisionModels(DECISION_MODELS, { place, energy, format });

test('indoor selection gives two distinct brands; combustion never falls back to an outdoor oven', () => {
  assert.deepEqual(choose('indoor', 'electric').models.map((model) => model.brand), ['Ooni', 'Sage']);
  for (const energy of ['gas', 'fire']) {
    assert.equal(choose('indoor', energy).reason, 'indoor_combustion');
    assert.deepEqual(choose('indoor', energy).models, []);
  }
  assert.deepEqual(choose('indoor', 'electric', '40').models, []);
  assert.deepEqual(choose('indoor', 'electric', 'portable').models, []);
});

test('large gas formats compare two brands and keep narrower or unknown formats out', () => {
  const result = choose('outdoor', 'gas', '40');
  assert.deepEqual(new Set(result.models.map((model) => model.id)), new Set(['ooni-koda-2-pro', 'gozney-arc-xl']));
  assert.ok(result.models.every((model) => model.diameterCm >= 40 && model.place === 'outdoor'));
  assert.deepEqual(choose('outdoor', 'electric', '35').models, []);
  assert.equal(choose('outdoor', 'electric').models[0].id, 'ninja-woodfire-oo101eu');
});

test('transport and wood retain their actual installation requirements', () => {
  assert.deepEqual(choose('outdoor', 'any', 'portable').models.map((model) => model.id), ['gozney-tread']);
  assert.deepEqual(choose('outdoor', 'fire', '40').models.map((model) => model.id), ['ooni-karu-2-pro']);
  assert.deepEqual(choose('outdoor', 'fire', 'portable').models, []);
  assert.equal(choose('balcony', 'gas').reason, 'invalid');
  assert.equal(choose('outdoor', 'unknown').reason, 'invalid');
});

test('all combinations return at most two models and never relax a safety constraint', () => {
  for (const place of ['indoor', 'outdoor']) for (const energy of ['any', 'gas', 'electric', 'fire']) for (const format of ['everyday', '35', '40', 'portable']) {
    const result = choose(place, energy, format);
    assert.ok(result.models.length <= 2);
    assert.ok(result.models.every((model) => model.place === place));
    if (energy !== 'any') assert.ok(result.models.every((model) => model.energy === energy));
    if (format === 'portable') assert.ok(result.models.every((model) => model.portable));
  }
});

test('euro parsing preserves cents, distinguishes unknown from zero and rejects malformed amounts', () => {
  assert.deepEqual(parseDecisionAmount(''), { state: 'missing', cents: null });
  assert.deepEqual(parseDecisionAmount('0'), { state: 'valid', cents: 0 });
  assert.deepEqual(parseDecisionAmount('125,50'), { state: 'valid', cents: 12550 });
  assert.deepEqual(parseDecisionAmount('0.10'), { state: 'valid', cents: 10 });
  for (const value of ['-1', 'Infinity', 'NaN', '12.345', '1e3', '10€', '1,2.3']) assert.equal(parseDecisionAmount(value).state, 'invalid');
});

test('basket includes the full setup, excludes owned equipment and retains unknown prices', () => {
  const basket = [
    { amount: '600' }, { amount: '45,50' }, { amount: '0.10' },
    { amount: '120', excluded: true }, { amount: '' }, { amount: '0.20' },
  ];
  const partial = calculateDecisionBasket(basket, '700');
  assert.equal(partial.state, 'partial');
  assert.equal(partial.totalCents, 64580);
  assert.equal(partial.missing, 1);
  assert.equal(partial.remainingCents, 5420);
  const complete = calculateDecisionBasket(basket.map((item, i) => i === 4 ? { amount: '75' } : item), '700');
  assert.equal(complete.state, 'complete');
  assert.equal(complete.remainingCents, -2080);
  assert.equal(calculateDecisionBasket([{ amount: '-4' }]).state, 'invalid');
  assert.equal(calculateDecisionBasket([{ amount: '10' }], '-1').state, 'invalid');
});

test('every model remains linked to registered evidence and complete localized advice', () => {
  const ledger = readFileSync(new URL('../../research/evidence.csv', import.meta.url), 'utf8');
  const routes = readFileSync(new URL('../src/i18n/config.ts', import.meta.url), 'utf8');
  for (const model of DECISION_MODELS) {
    assert.ok(routes.includes(`"${model.articleId}"`), model.articleId);
    for (const id of model.evidenceIds) assert.ok(ledger.includes(`\n${id},`), `${model.id}: ${id}`);
    for (const locale of ['fr', 'en', 'de']) {
      assert.ok(model.why[locale].length > 25);
      assert.ok(model.tradeoff[locale].length > 25);
    }
    assert.equal('price' in model, false);
  }
});
