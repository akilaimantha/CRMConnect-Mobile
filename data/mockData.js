export const INITIAL_CUSTOMERS = [
  {
    id: '1',
    name: 'Kamal Perera',
    phone: '+94 77 123 4567',
    email: 'kamal.perera@email.com',
    company: 'Perera Holdings Ltd',
    notes: 'Interested in life insurance portfolio. Follow up on premium options.',
    interactions: [
      { id: 'i1', type: 'Meeting', date: '2026-05-18', description: 'Discussed policy renewal and family coverage.' },
      { id: 'i2', type: 'Phone Call', date: '2026-05-10', description: 'Confirmed meeting schedule for next week.' },
    ],
    communications: [
      { id: 'c1', medium: 'Email', date: '2026-05-15', message: 'Sent quotation for comprehensive life plan.' },
    ],
  },
  {
    id: '2',
    name: 'Nimali Fernando',
    phone: '+94 71 987 6543',
    email: 'nimali.f@business.lk',
    company: 'Fernando Textiles',
    notes: 'Key corporate client. Prefers morning calls.',
    interactions: [
      { id: 'i3', type: 'Email', date: '2026-05-17', description: 'Shared product brochure and pricing sheet.' },
      { id: 'i4', type: 'Meeting', date: '2026-05-05', description: 'On-site visit to review group insurance needs.' },
    ],
    communications: [
      { id: 'c2', medium: 'Meeting', date: '2026-05-17', message: 'Quarterly review meeting completed successfully.' },
      { id: 'c3', medium: 'Phone Call', date: '2026-05-12', message: 'Clarified claim process for existing policy.' },
    ],
  },
  {
    id: '3',
    name: 'Ruwan Silva',
    phone: '+94 76 555 8899',
    email: 'ruwan.silva@gmail.com',
    company: 'Silva & Associates',
    notes: 'New lead from referral. High conversion potential.',
    interactions: [
      { id: 'i5', type: 'Phone Call', date: '2026-05-19', description: 'Initial discovery call — needs child education plan.' },
    ],
    communications: [
      { id: 'c4', medium: 'Phone Call', date: '2026-05-19', message: 'Introductory call — scheduled demo for next Tuesday.' },
    ],
  },
];

export const INITIAL_TASKS = [
  {
    id: '1',
    title: 'Follow up with Kamal Perera',
    description: 'Send updated premium quotation and policy comparison.',
    deadline: '2026-05-25',
    priority: 'High',
    status: 'Pending',
  },
  {
    id: '2',
    title: 'Prepare corporate proposal',
    description: 'Draft group insurance proposal for Fernando Textiles.',
    deadline: '2026-05-28',
    priority: 'Medium',
    status: 'Pending',
  },
  {
    id: '3',
    title: 'Schedule demo with Ruwan Silva',
    description: 'Book product demo for education savings plan.',
    deadline: '2026-05-22',
    priority: 'High',
    status: 'Pending',
  },
  {
    id: '4',
    title: 'Submit monthly sales report',
    description: 'Compile and submit May sales activity report to manager.',
    deadline: '2026-05-20',
    priority: 'Low',
    status: 'Completed',
  },
];

export const RECENT_ACTIVITIES = [
  { id: 'a1', customer: 'Kamal Perera', status: 'Closed', date: '2026-05-18' },
  { id: 'a2', customer: 'Nimali Fernando', status: 'Negotiation', date: '2026-05-17' },
  { id: 'a3', customer: 'Ruwan Silva', status: 'Contacted', date: '2026-05-19' },
  { id: 'a4', customer: 'Kamal Perera', status: 'Follow-up', date: '2026-05-15' },
];

export const DEMO_CREDENTIALS = {
  email: 'admin@slic.lk',
  password: 'admin123',
  displayName: 'John Smith',
};
