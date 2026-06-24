// ============================================================
// CHIRANJIV CAPITAL SERVICES LIMITED — WEBSITE CONTENT
// ============================================================

export const COMPANY = {
  name: 'Chiranjiv Capital Services Limited',
  shortName: 'Chiranjiv Capital',
  tagline: 'Eternal Wealth',
  description:
    'A premier capital markets advisory and financial services firm dedicated to helping businesses raise capital, execute transactions, maintain compliance, and unlock long-term growth opportunities.',
  cin: 'U67190RJ2019PLC066789',
  sebiReg: 'INM000012877',
  phone: '011-45147095',
  mobile: '+91 99106 13098',
  email: 'chiranjivcapital@gmail.com',
  website: 'www.chiranjivcapital.com',
  address: {
    line1: '#401, Surya Kiran Building',
    line2: 'KG Marg, Connaught Place',
    city: 'New Delhi',
    state: 'Delhi',
    pin: '110001',
    country: 'India',
  },
  mapEmbed:
    'https://maps.google.com/maps?q=Surya+Kiran+Building+KG+Marg+Connaught+Place+New+Delhi&output=embed',
  established: '2019',
  registeredUnder: 'Merchant Bankers Regulations, 1992',
};

export const STATS = [
  { value: 50, suffix: '+', label: 'IPO & Fundraising Mandates' },
  { value: 200, suffix: '+', label: 'Listed Company Clients' },
  { value: 5000, suffix: 'Cr+', label: 'Capital Raised (₹)' },
  { value: 15, suffix: '+', label: 'Years of Combined Experience' },
];

export const SERVICES = [
  {
    id: 'ipo-fundraising',
    title: 'IPO & Fund Raising',
    shortDesc:
      'We help businesses raise capital through IPOs and fund-raising avenues, guiding them from readiness to listing.',
    icon: 'TrendingUp',
    color: '#08B39C',
    overview:
      'We provide end-to-end IPO advisory and fundraising services. From pre-IPO structuring and DRHP drafting to listing, we ensure a seamless debut in the capital markets.',
    benefits: [
      'Complete DRHP preparation and regulatory filing',
      'Anchor investor identification and key roadshows',
      'Listing support and SEBI/post-IPO compliance',
      'Rights Issue, QIP, and Private Placement advisory',
    ],
    process: [
      { step: '01', title: 'Eligibility Assessment', desc: 'Evaluate company readiness and capital market eligibility.' },
      { step: '02', title: 'Regulatory Filing', desc: 'Prepare and file DRHP with stock exchanges and SEBI.' },
      { step: '03', title: 'Investor Outreach', desc: 'Organize institutional roadshows and anchor book-building.' },
      { step: '04', title: 'Listing & Beyond', desc: 'Manage allotment, listing ceremony, and compliance.' },
    ],
    impact:
      'Average oversubscription of 8x across managed offerings.',
  },
  {
    id: 'ma-due-diligence',
    title: 'M&A Due Diligence',
    shortDesc:
      'We offer M&A advisory and due diligence services, streamlining transactions from strategy to closure.',
    icon: 'Search',
    color: '#2848B8',
    overview:
      'We provide comprehensive M&A due diligence across financial, legal, and operational dimensions, equipping you with vital insights to negotiate and transact with confidence.',
    benefits: [
      'Financial statement analysis and quality of earnings',
      'Legal, tax, and regulatory compliance review',
      'Risk assessment and valuation mitigation strategies',
      'Synergy identification and integration planning',
    ],
    process: [
      { step: '01', title: 'Scope Definition', desc: 'Define due diligence scope aligned with transaction goals.' },
      { step: '02', title: 'Data Room Analysis', desc: 'Deep dive into financials, contracts, and operations.' },
      { step: '03', title: 'Management Interviews', desc: 'Structured sessions with target management teams.' },
      { step: '04', title: 'Report & Advisory', desc: 'DD report outlining key risk flags and valuation adjustments.' },
    ],
    impact:
      'Identified value opportunities while mitigating risk across transactions.',
  },
  {
    id: 'capital-market-services',
    title: 'Capital Market Services',
    shortDesc:
      'We provide capital market services, including equity/debt issuances, listings, and corporate actions.',
    icon: 'BarChart2',
    color: '#112E63',
    overview:
      'We offer end-to-end capital market services, assisting listed and unlisted companies to access public markets, manage corporate actions, and optimize deal execution.',
    benefits: [
      'NCD, Commercial Paper, and Bond issuances',
      'Equity preferential allotments and QIPs',
      'Buyback and Open Offer management',
      'Secondary market transactions and liquidity support',
    ],
    process: [
      { step: '01', title: 'Market Analysis', desc: 'Assess market conditions and identify optimal timing.' },
      { step: '02', title: 'Deal Structuring', desc: 'Structure the instrument to match investor appetite.' },
      { step: '03', title: 'Placement', desc: 'Execute distribution through institutional and retail channels.' },
      { step: '04', title: 'Post-Issuance', desc: 'Manage ongoing reporting, rating reviews, and disclosures.' },
    ],
    impact:
      'Advisory across capital market transactions aggregating over ₹2,000 crores.',
  },
  {
    id: 'project-financial-structuring',
    title: 'Project & Financial Structuring',
    shortDesc:
      'Involves project feasibility, funding arrangements, capital raising, and financial modeling.',
    icon: 'Layers',
    color: '#CFA84F',
    overview:
      'We design optimal capital structures for complex projects, blending equity, debt, and mezzanine financing to lower cost of capital and maximize viability.',
    benefits: [
      'Financial modeling and feasibility analysis',
      'SPV structuring and documentation',
      'Multi-tranche debt and equity syndication',
      'Joint venture and partnership structuring',
    ],
    process: [
      { step: '01', title: 'Feasibility Study', desc: 'Analyze project economics and bankability.' },
      { step: '02', title: 'Capital Stack Design', desc: 'Optimize the mix of debt, equity, and hybrid instruments.' },
      { step: '03', title: 'Syndication', desc: 'Approach institutional lenders and debt funds.' },
      { step: '04', title: 'Financial Close', desc: 'Execute term sheets, definitive agreements, and first drawdown.' },
    ],
    impact:
      'Unlocked critical infrastructure funding and structured finance mandates.',
  },
  {
    id: 'transaction-advisory',
    title: 'Transaction Advisory',
    shortDesc:
      'Provides valuation, deal structuring, and corporate restructuring advisory to maximize transaction value.',
    icon: 'ArrowLeftRight',
    color: '#08B39C',
    overview:
      'We provide strategic advisory through every phase of corporate deals, including mergers, acquisitions, balance sheet restructurings, and divestitures.',
    benefits: [
      'Independent valuations and fairness opinions',
      'Buy-side and sell-side mandate execution',
      'Structured deal negotiation and closing support',
      'Corporate restructuring and balance sheet advisory',
    ],
    process: [
      { step: '01', title: 'Mandate Alignment', desc: 'Define transaction objectives and success metrics.' },
      { step: '02', title: 'Target Screening', desc: 'Shortlist acquisition targets or potential buyers.' },
      { step: '03', title: 'Valuation & Negotiation', desc: 'Prepare valuations and lead pricing negotiations.' },
      { step: '04', title: 'Deal Closure', desc: 'Coordinate legal, regulatory, and financial closing.' },
    ],
    impact:
      'Advised on cross-sector deals exceeding ₹1,500 crores.',
  },
  {
    id: 'compliance-regulatory',
    title: 'Compliance & Regulatory Advisory',
    shortDesc:
      'Ensures adherence to statutory laws, regulatory filings, and corporate governance standards.',
    icon: 'Shield',
    color: '#2848B8',
    overview:
      'We provide end-to-end compliance management, from secretarial support to regulatory filings, ensuring your firm meets SEBI and Companies Act obligations.',
    benefits: [
      'Compliance calendar and filings management',
      'Board meeting and secretarial support',
      'Corporate governance and disclosure practices',
      'Insider trading and related-party compliances',
    ],
    process: [
      { step: '01', title: 'Compliance Audit', desc: 'Identify gaps in the current compliance framework.' },
      { step: '02', title: 'Calendar Setup', desc: 'Create a comprehensive annual compliance calendar.' },
      { step: '03', title: 'Ongoing Management', desc: 'Manage day-to-day filings, disclosures, and reports.' },
      { step: '04', title: 'Review & Adapt', desc: 'Regular audits to adapt to evolving regulations.' },
    ],
    impact:
      'Zero-penalty track record maintained with BSE and NSE.',
  },
];

export const LEADERSHIP = [
  {
    id: 'sumit-bajaj',
    name: 'CS Sumit Bajaj',
    designation: 'Managing Director',
    shortBio:
      'CS with 10 years of expertise in capital markets, corporate governance, and compliance.',
    fullBio:
      'CS Sumit Bajaj has 10 years of experience specializing in IPOs, listings, corporate governance, and SEBI compliance. He has successfully guided numerous enterprises through complex capital market transitions and regulatory approvals.',
    expertise: ['Capital Markets', 'Securities Laws', 'Corporate Governance', 'SEBI Compliance', 'IPOs & FPOs'],
    experience: '10+ Years',
    education: 'CS | B.Com',
    initials: 'SB',
    color: '#112E63',
    photo: '/team/sumit.jpeg',
  },
  {
    id: 'amit-saraogi',
    name: 'CA Amit Kr. Saraogi',
    designation: 'Director',
    shortBio:
      'FCA with 25+ years of expertise in finance, corporate strategy, and investments.',
    fullBio:
      'CA Amit Kr. Saraogi is an FCA with 25+ years of experience in corporate finance, taxation, M&A, and NBFC operations. He has served as a strategic advisor to prominent corporate houses, implementing robust financial systems and structuring complex investment portfolios.',
    expertise: ['Fund Management', 'M&A', 'Corporate Finance', 'NBFC Operations', 'Strategic Growth'],
    experience: '25+ Years',
    education: 'FCA',
    initials: 'AS',
    color: '#08B39C',
    photo: '/team/amit.jpeg',
  },
  {
    id: 'manoj-agrawal',
    name: 'Manoj Agrawal',
    designation: 'Director',
    shortBio:
      'IIT & Law graduate with 20+ years of mastery in equity markets, IPOs, and corporate litigation.',
    fullBio:
      'Manoj Agrawal has over two decades of expertise in equity markets, IPO advisory, NBFC leadership, and SME consulting. Holding IIT, LLB, and LLM credentials, he guides corporate mergers, compliance, and strategic growth with visionary precision.',
    expertise: ['Equity Markets', 'IPO Advisory', 'NBFC Leadership', 'SME Consulting', 'Mergers & Acquisitions'],
    experience: '20+ Years',
    education: 'IIT | LLB | LLM',
    initials: 'MA',
    color: '#CFA84F',
    photo: '/team/manoj_agrawal.jpeg',
  },
];

export const KMP = [
  {
    id: 'keshav-ahuja',
    name: 'Keshav Ahuja',
    designation: 'Compliance Officer',
    shortBio: 'Qualified Company Secretary with B.Com degree and corporate experience.',
    fullBio: 'Qualified Company Secretary with B.Com degree and extensive corporate experience at Kuroda Electric India Pvt. Ltd., Sai Industries Ltd., and Shree Wortex. Skilled in corporate governance, compliance, secretarial, and regulatory affairs.',
    expertise: ['Corporate Governance', 'Compliance Management', 'Secretarial Affairs', 'Regulatory Affairs'],
    experience: 'Corporate Experience',
    education: 'B.Com | CS',
    initials: 'KA',
    color: '#2848B8',
    photo: '',
  },
  {
    id: 'priya-mathur',
    name: 'Priya Mathur',
    designation: 'Key Managerial Personnel',
    shortBio: 'Qualified Company Secretary with 2+ years’ experience in merchant banking and capital markets.',
    fullBio: 'Priya Mathur, a qualified Company Secretary with 2+ years’ experience in merchant banking and capital markets, specialises in IPOs, legal/regulatory due diligence, SEBI/Companies Act compliance, corporate governance, and executing listings, corporate actions, and stakeholder coordination.',
    expertise: ['IPOs', 'Legal/Regulatory Due Diligence', 'SEBI/Companies Act Compliance', 'Corporate Governance', 'Listings & Corporate Actions'],
    experience: '2+ Years',
    education: 'CS',
    initials: 'PM',
    color: '#08B39C',
    photo: '',
  },
  {
    id: 'komal-upadhyay',
    name: 'Komal Upadhyay',
    designation: 'Key Managerial Personnel',
    shortBio: 'Investment banking associate with 5+ years’ experience in IPO execution and capital markets.',
    fullBio: 'Komal Upadhyay is an investment banking associate with 5+ years’ experience in IPO execution, capital markets, regulatory compliance, and financial operations. Skilled in due diligence, DRHP/offer documentation, stakeholder coordination, and fundraising across SME and main-board mandates.',
    expertise: ['IPO Execution', 'Capital Markets', 'Regulatory Compliance', 'Financial Operations', 'Fundraising'],
    experience: '5+ Years',
    education: 'Investment Banking Associate',
    initials: 'KU',
    color: '#CFA84F',
    photo: '',
  },
];

export const IPO_CLIENTS = [
  'Reno Polychem Limited',
  'Krupalu Metals Limited',
  'Mandeep Auto Industries Limited',
  'Kalana Ispat Limited',
  'Healthy Life Agritec Limited',
  'Gallard Steel Limited',
];

export const LISTED_CLIENTS = [
  'Credent Global Finance Limited',
  'RLF Limited',
  'United Leasing & Industries Limited',
  'Royal Sense Limited',
  'Boston Commerce Limited',
  'KCK Industries Limited',
  'Flywings Simulator Training Centre Limited',
];

export const WHY_CHOOSE = [
  {
    icon: 'Users',
    title: 'Experienced Leadership',
    desc: 'Team of seasoned professionals with expertise in capital markets.',
  },
  {
    icon: 'Shield',
    title: 'Regulatory Expertise',
    desc: 'Strong understanding of financial regulations and SEBI compliance.',
  },
  {
    icon: 'Target',
    title: 'Client-Centric Approach',
    desc: 'Tailored financial solutions based on specific business needs.',
  },
  {
    icon: 'Layers',
    title: 'End-to-End Solution',
    desc: 'Comprehensive transaction support from planning to execution.',
  },
];

export const PROCESS_STEPS = [
  { number: '01', title: 'Discovery', desc: 'Understanding your business and capital requirements.' },
  { number: '02', title: 'Evaluation', desc: 'Financial analysis, valuation, and readiness assessment.' },
  { number: '03', title: 'Structuring', desc: 'Design of optimal capital structure and transaction architecture.' },
  { number: '04', title: 'Execution', desc: 'Execution with institutional discipline and regulatory precision.' },
  { number: '05', title: 'Compliance', desc: 'Post-transaction compliance management and reporting.' },
  { number: '06', title: 'Growth', desc: 'Ongoing advisory partnership to support future phases.' },
];

export const ABOUT_MILESTONES = [
  { year: '2019', title: 'Founded', desc: 'Chiranjiv Capital incorporated as a Cat I Merchant Banker.' },
  { year: '2020', title: 'First IPO', desc: 'Successfully managed first SME IPO on BSE, raising ₹45 Cr.' },
  { year: '2021', title: 'Team Expansion', desc: 'Added Transaction Advisory and Compliance verticals.' },
  { year: '2022', title: 'Milestone 25 IPOs', desc: 'Completed 25th IPO mandate, establishing strong SME credentials.' },
  { year: '2023', title: 'Structured Finance', desc: 'Arranged ₹500 Cr in structured project finance.' },
  { year: '2024', title: 'Pan-India Presence', desc: 'Extended client base to 200+ listed companies across 15 states.' },
];

export const COMPANY_VALUES = [
  {
    icon: 'Shield',
    title: 'Integrity',
    desc: 'Unwavering ethical standards in every transaction and client interaction.',
  },
  {
    icon: 'Zap',
    title: 'Excellence',
    desc: 'Relentless pursuit of quality and superior transaction outcomes.',
  },
  {
    icon: 'Heart',
    title: 'Client First',
    desc: 'Our clients\' long-term growth and success is our primary goal.',
  },
  {
    icon: 'Globe',
    title: 'Collaboration',
    desc: 'Working as an extension of your team to execute your vision.',
  },
];
