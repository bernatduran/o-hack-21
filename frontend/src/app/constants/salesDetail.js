export const salesDetail = {
  gapAnalysis: {
    apiCalls: {
      'Customers API': true,
      'Accounts API': true,
      BDRP: true,
      'Instant Payments': true,
      Doxtra: true,
      Sentinel: false,
      DocStreet: false,
      Orbis: true,
    },
    newRequirements: [
      {
        id: 1,
        description: 'Ability to perform Cross Currency Operations EUR/CA$',
      },
      {
        id: 2,
        description: 'Support Canadian Passport',
      },
      {
        id: 3,
        description: 'Add Canadian French localization',
      },
      {
        id: 4,
        description:
          'Support following timezones: Pacific, Mountain, Central, Eastern and Atlantic.',
      },
      {
        id: 5,
        description: 'Support Canadian Fiscal Repporting',
      },
    ],
    expectedCashflows: {
      items: [
        {
          id: 6,
          description: 'Implementation Fee',
          value: '1M EUR',
        },
        {
          id: 7,
          description: 'Expected Billing Margin',
          value: '0,5M Per Annum',
        },
      ],
      total: '1,5 M',
    },
    expectedPhases: [
      {
        id: 8,
        phase: 'Phase 1',
        timeframe: 'February 2024 - December 2025',
      },
      {
        id: 9,
        phase: 'Phase 2',
        timeframe: 'January 2026 - December 2027',
      },
    ],
    projectedResources: {
      architect: 2,
      developer: 0,
      qa: 1,
      po: 2,
    },
  },
};

export const projectNames = [
  'The DEVOPS Project',
  'Newsletter',
  'Psycho',
  'Bofarull',
  'Bogeyman',
  'Rose',
  'Appliance',
  'Postcard',
  'Quarter Pounder',
  'T2',
  'Malign',
];
