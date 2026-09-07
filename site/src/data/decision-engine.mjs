/** Only sourced installation constraints affect the selection. No price or performance score. */
export function selectDecisionModels(models, answers) {
  const { place, energy, format } = answers;
  if (!['indoor', 'outdoor'].includes(place)
    || !['any', 'electric', 'gas', 'fire'].includes(energy)
    || !['everyday', '35', '40', 'portable'].includes(format)) {
    return { models: [], reason: 'invalid' };
  }
  if (place === 'indoor' && ['gas', 'fire'].includes(energy)) {
    return { models: [], reason: 'indoor_combustion' };
  }
  const diameter = ['35', '40'].includes(format) ? Number(format) : 0;
  const eligible = models.filter((model) => model.place === place
    && (energy === 'any' || model.energy === energy)
    && (!diameter || (model.diameterCm !== null && model.diameterCm >= diameter))
    && (format !== 'portable' || model.portable));
  // Start with the least oversized documented format, then provide another brand
  // where the same constraints permit it. Neither ordering is a performance ranking.
  eligible.sort((a, b) => (a.diameterCm ?? Infinity) - (b.diameterCm ?? Infinity));
  const first = eligible[0];
  if (!first) return { models: [], reason: 'no_match' };
  const second = eligible.find((model) => model.brand !== first.brand) ?? eligible[1];
  return { models: second ? [first, second] : [first], reason: 'matched' };
}

/** Parse explicitly entered euro amounts into integer cents; blank is unknown. */
export function parseDecisionAmount(value) {
  const normalized = String(value ?? '').trim().replace(',', '.');
  if (normalized === '') return { state: 'missing', cents: null };
  if (!/^\d{1,7}(?:\.\d{1,2})?$/.test(normalized)) return { state: 'invalid', cents: null };
  const [units, decimals = ''] = normalized.split('.');
  const cents = Number(units) * 100 + Number(decimals.padEnd(2, '0'));
  return { state: 'valid', cents };
}

/** An owned/unneeded item contributes zero; an unpriced item stays visibly unknown. */
export function calculateDecisionBasket(items, ceiling = '') {
  let totalCents = 0;
  let missing = 0;
  let invalid = 0;
  let priced = 0;
  for (const item of items) {
    if (item.excluded) continue;
    const amount = parseDecisionAmount(item.amount);
    if (amount.state === 'invalid') invalid += 1;
    else if (amount.state === 'missing') missing += 1;
    else { totalCents += amount.cents; priced += 1; }
  }
  const limit = parseDecisionAmount(ceiling);
  if (limit.state === 'invalid') invalid += 1;
  return {
    totalCents, missing, invalid, priced,
    state: invalid ? 'invalid' : missing ? 'partial' : 'complete',
    remainingCents: limit.state === 'valid' ? limit.cents - totalCents : null,
  };
}
