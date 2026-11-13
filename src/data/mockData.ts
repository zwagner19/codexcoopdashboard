export type TabKey = 'today' | 'briefs' | 'businesses' | 'capture' | 'tools';

export type Brief = {
  id: string;
  title: string;
  summary: string;
  source: string;
  impact: 'Low' | 'Medium' | 'High';
  minutes: number;
};

export type Business = {
  id: string;
  name: string;
  status: string;
  revenue: string;
  priority: string;
  nextAction: string;
};

export type Tool = {
  id: string;
  name: string;
  description: string;
  shortcut: string;
};

export const todayStats = [
  { label: 'Open loops', value: '14', detail: '4 due today' },
  { label: 'Briefs queued', value: '8', detail: '3 high impact' },
  { label: 'Businesses watched', value: '6', detail: '2 need action' },
];

export const agenda = [
  { time: '08:30', title: 'Operator standup', note: 'Review inbox, blockers, and cash-sensitive decisions.' },
  { time: '10:00', title: 'Vendor renewal pass', note: 'Compare pricing notes captured this week.' },
  { time: '14:30', title: 'Growth sprint review', note: 'Decide on the next two experiments.' },
];

export const briefs: Brief[] = [
  {
    id: 'b1',
    title: 'Regional demand shifts toward premium local services',
    summary: 'Mock signal suggests customer willingness to pay is strongest for done-for-you bundles and white-glove scheduling.',
    source: 'Mock Market Desk',
    impact: 'High',
    minutes: 4,
  },
  {
    id: 'b2',
    title: 'Automation backlog continues to unlock margin',
    summary: 'Three repeat admin workflows are candidates for templates before any live API integration is considered.',
    source: 'Internal Mock Memo',
    impact: 'Medium',
    minutes: 3,
  },
  {
    id: 'b3',
    title: 'Customer support themes cluster around speed',
    summary: 'Mock tickets indicate clients value same-day updates more than expanded channel coverage.',
    source: 'Synthetic Support Rollup',
    impact: 'Medium',
    minutes: 2,
  },
];

export const businesses: Business[] = [
  { id: 'biz1', name: 'Northstar Ops', status: 'Healthy', revenue: '$42.8k MRR', priority: 'Retention', nextAction: 'Schedule QBR deck review' },
  { id: 'biz2', name: 'Harbor Studio', status: 'Watch', revenue: '$18.4k MRR', priority: 'Pipeline', nextAction: 'Draft two partnership offers' },
  { id: 'biz3', name: 'Cedar Supply', status: 'Action', revenue: '$63.1k MRR', priority: 'Costs', nextAction: 'Approve vendor consolidation plan' },
  { id: 'biz4', name: 'Atlas Field Co.', status: 'Healthy', revenue: '$31.6k MRR', priority: 'Hiring', nextAction: 'Review lead technician scorecard' },
];

export const tools: Tool[] = [
  { id: 't1', name: 'Decision memo', description: 'Turn a captured thought into a one-page decision frame.', shortcut: '⌘D' },
  { id: 't2', name: 'Weekly digest', description: 'Bundle briefs, business notes, and captures into a mock weekly recap.', shortcut: '⌘W' },
  { id: 't3', name: 'Risk scan', description: 'Highlight stale actions, exposed costs, and operational bottlenecks.', shortcut: '⌘R' },
  { id: 't4', name: 'Meeting prep', description: 'Create a focused agenda from mock data and saved captures.', shortcut: '⌘M' },
];
