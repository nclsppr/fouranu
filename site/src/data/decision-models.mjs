// Manufacturer specifications and attributed documentary conclusions, from research/evidence.csv.
// Unknown dimensions remain null. No live prices, cooking scores, or first-hand claims.
export const DECISION_MODELS = [
  {
    id: 'ooni-volt-2', articleId: 'OONI-018', brand: 'Ooni', name: 'Ooni Volt 2',
    place: 'indoor', energy: 'electric', diameterCm: 30, portable: false,
    evidenceIds: ['EV-0090', 'EV-0091'],
    why: { fr: 'Pour cuisiner dedans : Ooni annonce un usage intérieur et des pizzas de 30 cm. Vérifiez la place, la ventilation et la prise.', en: 'For indoor cooking: Ooni specifies indoor use and 30 cm pizzas. Check space, ventilation and the power supply.', de: 'Für drinnen: Ooni nennt den Innenbereich und 30-cm-Pizzen. Platz, Belüftung und Stromanschluss prüfen.' },
    tradeoff: { fr: 'La consommation réelle et la fiabilité ne sont pas établies par les sources du dossier.', en: 'The guide’s sources do not establish actual energy consumption or reliability.', de: 'Die Quellen des Ratgebers belegen weder den tatsächlichen Verbrauch noch die Zuverlässigkeit.' },
  },
  {
    id: 'sage-smart-oven-pizzaiolo-bpz820', articleId: 'FOUR-001', brand: 'Sage', name: 'Sage Pizzaiolo BPZ820',
    place: 'indoor', energy: 'electric', diameterCm: null, portable: false,
    evidenceIds: ['EV-0861', 'EV-0862', 'EV-0865', 'EV-0868'],
    why: { fr: 'Pour les programmes guidés en intérieur : le mode manuel permet aussi de régler séparément sole et voûte.', en: 'For guided indoor programmes: manual mode also lets you adjust the heat above and below separately.', de: 'Für geführte Programme drinnen: Im manuellen Modus lassen sich Ober- und Unterhitze getrennt regeln.' },
    tradeoff: { fr: 'Réservez un emplacement permanent. Une source mesure un avant de pierre plus froid ; vérifiez le diamètre utile avant l’achat.', en: 'Allow permanent counter space. One source measures a cooler front of the stone; check the usable diameter before buying.', de: 'Einen festen Stellplatz einplanen. Eine Quelle misst vorne am Stein weniger Hitze; den nutzbaren Durchmesser vor dem Kauf prüfen.' },
  },
  {
    id: 'ooni-koda-2', articleId: 'OONI-010', brand: 'Ooni', name: 'Ooni Koda 2',
    place: 'outdoor', energy: 'gas', diameterCm: 35, portable: false,
    evidenceIds: ['EV-0010', 'EV-0011'],
    why: { fr: 'Pour le gaz dehors : son format annoncé de 35 cm laisse une marge autour d’une pizza plus petite, sans entretenir un feu de bois.', en: 'For gas outdoors: its stated 35 cm format leaves room around a smaller pizza, without tending a wood fire.', de: 'Für Gas draußen: Das angegebene 35-cm-Format lässt Platz um kleinere Pizzen, ohne ein Holzfeuer unterhalten zu müssen.' },
    tradeoff: { fr: 'Ses 16 kg comptent lors du rangement. Confirmez les dimensions de la table : les unités fabricant ne concordent pas toutes.', en: 'Its 16 kg matters when storing it. Confirm the table dimensions: the manufacturer’s units do not all agree.', de: '16 kg fallen beim Verstauen ins Gewicht. Tischmaße bestätigen lassen: Die Maßangaben des Herstellers stimmen nicht vollständig überein.' },
  },
  {
    id: 'gozney-arc-lite', articleId: 'GOZNEY-002', brand: 'Gozney', name: 'Gozney Arc Lite',
    place: 'outdoor', energy: 'gas', diameterCm: 30, portable: false,
    evidenceIds: ['EV-0520', 'EV-0522'],
    why: { fr: 'Pour des pizzas d’environ 30 cm au gaz dehors : un format de 12 kg, avec une ouverture annoncée de 32,5 cm.', en: 'For roughly 30 cm gas-baked pizzas outdoors: a 12 kg format with a stated 32.5 cm opening.', de: 'Für etwa 30 cm große Pizzen mit Gas draußen: 12 kg Gewicht und eine angegebene Öffnung von 32,5 cm.' },
    tradeoff: { fr: 'Vérifiez les dégagements du manuel et attendez le refroidissement avant de le déplacer. Les 12 pouces annoncés correspondent à environ 30 cm.', en: 'Check the manual’s clearances and let it cool before moving it. The stated 12 inches is roughly 30 cm.', de: 'Die Abstände aus der Anleitung beachten und vor dem Bewegen abkühlen lassen. Die angegebenen 12 Zoll entsprechen etwa 30 cm.' },
  },
  {
    id: 'ooni-koda-2-pro', articleId: 'OONI-011', brand: 'Ooni', name: 'Ooni Koda 2 Pro',
    place: 'outdoor', energy: 'gas', diameterCm: 45, portable: false,
    evidenceIds: ['EV-0020'],
    why: { fr: 'Pour de grandes pizzas au gaz dehors : Ooni annonce un format allant jusqu’à 45 cm.', en: 'For large gas-baked pizzas outdoors: Ooni specifies a format of up to 45 cm.', de: 'Für große Pizzen mit Gas draußen: Ooni gibt ein Format bis 45 cm an.' },
    tradeoff: { fr: 'Vérifiez l’encombrement et le geste de rotation dans le dossier. Le diamètre annoncé ne garantit pas la cadence entre deux pizzas.', en: 'Check the footprint and turning technique in the guide. Stated diameter does not guarantee turnaround between pizzas.', de: 'Platzbedarf und Wenden im Ratgeber prüfen. Der angegebene Durchmesser garantiert keine bestimmte Folgezeit zwischen Pizzen.' },
  },
  {
    id: 'gozney-arc-xl', articleId: 'GOZNEY-001', brand: 'Gozney', name: 'Gozney Arc XL',
    place: 'outdoor', energy: 'gas', diameterCm: 40, portable: false,
    evidenceIds: ['EV-0500', 'EV-0501'],
    why: { fr: 'Pour une installation fixe au gaz : Gozney annonce des pizzas jusqu’à 40 cm et une chambre de 42,7 cm de large.', en: 'For a fixed gas setup: Gozney specifies pizzas up to 40 cm and a chamber 42.7 cm wide.', de: 'Für einen festen Gasplatz: Gozney nennt Pizzen bis 40 cm und einen 42,7 cm breiten Backraum.' },
    tradeoff: { fr: 'Ses 26,5 kg demandent un support adapté. À 40 cm, les retours du dossier soulignent une rotation plus délicate près de la flamme.', en: 'Its 26.5 kg needs suitable support. At 40 cm, the guide’s sources describe trickier turning near the flame.', de: '26,5 kg erfordern eine geeignete Unterlage. Bei 40 cm beschreiben die Quellen ein schwierigeres Wenden nahe der Flamme.' },
  },
  {
    id: 'ooni-karu-2', articleId: 'OONI-015', brand: 'Ooni', name: 'Ooni Karu 2',
    place: 'outdoor', energy: 'fire', diameterCm: 30, portable: false,
    evidenceIds: ['EV-0061'],
    why: { fr: 'Pour entretenir un feu de bois ou de charbon dehors : le format annoncé commence autour de 30 cm.', en: 'For tending a wood or charcoal fire outdoors: the stated format starts at roughly 30 cm.', de: 'Für ein Holz- oder Holzkohlefeuer draußen: Das angegebene Format beginnt bei etwa 30 cm.' },
    tradeoff: { fr: 'Il faut alimenter et surveiller le feu. Le brûleur propane est un achat séparé.', en: 'The fire needs fuel and attention. The propane burner is sold separately.', de: 'Das Feuer braucht Brennstoff und Aufmerksamkeit. Der Propanbrenner wird separat verkauft.' },
  },
  {
    id: 'ooni-karu-2-pro', articleId: 'OONI-016', brand: 'Ooni', name: 'Ooni Karu 2 Pro',
    place: 'outdoor', energy: 'fire', diameterCm: 40, portable: false,
    evidenceIds: ['EV-0070'],
    why: { fr: 'Pour de grandes pizzas au bois ou au charbon dehors : Ooni annonce un diamètre allant jusqu’à 40 cm.', en: 'For large wood- or charcoal-fired pizzas outdoors: Ooni specifies a diameter of up to 40 cm.', de: 'Für große Pizzen mit Holz oder Holzkohle draußen: Ooni nennt einen Durchmesser bis 40 cm.' },
    tradeoff: { fr: 'Prévoyez la gestion du feu et la place autour du four. Le passage au propane exige un brûleur vendu séparément.', en: 'Allow room around the oven and time to tend the fire. Switching to propane requires a separately sold burner.', de: 'Platz um den Ofen und Zeit für das Feuer einplanen. Für Propan ist ein separat verkaufter Brenner nötig.' },
  },
  {
    id: 'gozney-tread', articleId: 'GOZNEY-002', brand: 'Gozney', name: 'Gozney Tread',
    place: 'outdoor', energy: 'gas', diameterCm: 30, portable: true,
    evidenceIds: ['EV-0521'],
    why: { fr: 'Pour déplacer un four à gaz entre deux lieux de cuisson extérieurs : le Tread est prévu autour du transport et de pizzas de 12 pouces, environ 30 cm.', en: 'For moving a gas oven between outdoor cooking locations: the Tread is designed around transport and 12-inch pizzas, roughly 30 cm.', de: 'Für den Transport zwischen Kochplätzen draußen: Der Tread ist auf Mobilität und 12-Zoll-Pizzen, etwa 30 cm, ausgelegt.' },
    tradeoff: { fr: 'Il pèse 13,5 kg sans tout l’équipement. Les accessoires de transport sont vendus séparément ; déplacez-le seulement une fois refroidi.', en: 'It weighs 13.5 kg before all the equipment. Transport accessories cost extra; move it only after it has cooled.', de: 'Er wiegt bereits ohne die gesamte Ausrüstung 13,5 kg. Transportzubehör kostet extra; nur im abgekühlten Zustand bewegen.' },
  },
  {
    id: 'ninja-woodfire-oo101eu', articleId: 'FOUR-004', brand: 'Ninja', name: 'Ninja Woodfire OO101EU',
    place: 'outdoor', energy: 'electric', diameterCm: null, portable: false,
    evidenceIds: ['EV-0891', 'EV-0892', 'EV-0897'],
    why: { fr: 'Pour une prise électrique dehors et plusieurs types de cuisson : les granulés servent à la fumée, la chauffe est électrique.', en: 'For an outdoor power supply and several cooking modes: the pellets provide smoke; the heat is electric.', de: 'Für einen Stromanschluss draußen und mehrere Garmethoden: Die Pellets erzeugen Rauch, die Hitze ist elektrisch.' },
    tradeoff: { fr: 'Usage extérieur uniquement. Vérifiez le format utile, la prise, le câble et les dégagements dans la notice européenne.', en: 'Outdoor use only. Check the usable size, power supply, cable and clearances in the European manual.', de: 'Nur für draußen. Nutzbare Größe, Anschluss, Kabel und Abstände in der europäischen Anleitung prüfen.' },
  },
];
