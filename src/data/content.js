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
  phone: '+91 98290 12345',
  email: 'info@chiranjivcapital.com',
  website: 'www.chiranjivcapital.com',
  address: {
    line1: '302, Navrang House',
    line2: 'Bhawani Singh Road, C-Scheme',
    city: 'Jaipur',
    state: 'Rajasthan',
    pin: '302 001',
    country: 'India',
  },
  mapEmbed:
    'https://maps.google.com/maps?q=Bhawani+Singh+Road+Jaipur&output=embed',
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
      'End-to-end management of Initial Public Offerings, Rights Issues, and private fundraising mandates for growing businesses.',
    icon: 'TrendingUp',
    color: '#08B39C',
    overview:
      'Chiranjiv Capital provides comprehensive IPO advisory and fundraising services, managing every stage of the public offering process. From pre-IPO structuring and DRHP drafting to allotment and listing, we ensure a seamless capital market debut for your business.',
    benefits: [
      'Complete DRHP preparation and regulatory filing',
      'Anchor investor identification and management',
      'Roadshow organization and investor relations',
      'Listing support and post-IPO compliance',
      'Rights Issue and Follow-on Public Offer management',
      'Private Placement and QIP advisory',
    ],
    process: [
      { step: '01', title: 'Eligibility Assessment', desc: 'Evaluate company readiness and capital market eligibility.' },
      { step: '02', title: 'Regulatory Filing', desc: 'Prepare and file DRHP with stock exchanges and regulatory authorities.' },
      { step: '03', title: 'Investor Outreach', desc: 'Organize institutional roadshows and anchor book-building.' },
      { step: '04', title: 'Listing & Beyond', desc: 'Manage allotment, listing ceremony, and post-IPO obligations.' },
    ],
    impact:
      'Our IPO clients have consistently achieved premium valuations, with an average oversubscription of 8x across managed offerings.',
  },
  {
    id: 'ma-due-diligence',
    title: 'M&A Due Diligence',
    shortDesc:
      'Rigorous financial, legal, and operational due diligence for mergers, acquisitions, and strategic transactions.',
    icon: 'Search',
    color: '#2848B8',
    overview:
      'Our M&A Due Diligence practice provides thorough, independent evaluation of target companies across financial, operational, legal, and commercial dimensions. We equip acquirers with the intelligence needed to negotiate with confidence and close transactions at the right price.',
    benefits: [
      'Financial statement analysis and quality of earnings',
      'Working capital and cash flow assessment',
      'Legal and regulatory compliance review',
      'Management team evaluation',
      'Synergy identification and integration planning',
      'Risk assessment and mitigation strategy',
    ],
    process: [
      { step: '01', title: 'Scope Definition', desc: 'Define due diligence scope aligned with transaction objectives.' },
      { step: '02', title: 'Data Room Analysis', desc: 'Deep dive into financials, contracts, and operational data.' },
      { step: '03', title: 'Management Interviews', desc: 'Structured sessions with target management and key personnel.' },
      { step: '04', title: 'Report & Advisory', desc: 'Comprehensive DD report with risk flags and recommendations.' },
    ],
    impact:
      'Our due diligence reports have protected clients from hidden liabilities worth hundreds of crores while identifying value-creation opportunities.',
  },
  {
    id: 'capital-market-services',
    title: 'Capital Market Services',
    shortDesc:
      'Comprehensive capital market solutions including debt issuance, equity advisory, and securities structuring for listed companies.',
    icon: 'BarChart2',
    color: '#112E63',
    overview:
      'We provide a full spectrum of capital market services to listed and unlisted companies, enabling them to access domestic and international markets efficiently. Our deep exchange relationships and regulatory expertise ensure optimal deal structuring and execution.',
    benefits: [
      'Non-Convertible Debenture (NCD) issuance',
      'Commercial Paper and Bond issuance',
      'Equity preferential allotment advisory',
      'Buyback and open offer management',
      'Market making and liquidity advisory',
      'Secondary market transaction support',
    ],
    process: [
      { step: '01', title: 'Market Analysis', desc: 'Assess market conditions and identify optimal timing.' },
      { step: '02', title: 'Deal Structuring', desc: 'Structure the instrument to match investor appetite.' },
      { step: '03', title: 'Placement & Execution', desc: 'Execute distribution through institutional and retail channels.' },
      { step: '04', title: 'Post-Issuance Support', desc: 'Manage ongoing reporting, rating reviews, and investor relations.' },
    ],
    impact:
      'We have successfully managed capital market transactions aggregating over ₹2,000 crores for listed clients across sectors.',
  },
  {
    id: 'project-financial-structuring',
    title: 'Project & Financial Structuring',
    shortDesc:
      'Bespoke financial structuring solutions for large infrastructure, real estate, and corporate projects requiring complex capital stacks.',
    icon: 'Layers',
    color: '#CFA84F',
    overview:
      'Chiranjiv Capital specializes in designing optimal capital structures for complex projects. We blend equity, quasi-equity, mezzanine, and debt instruments to create funding solutions that minimize cost of capital while maximizing project viability and investor returns.',
    benefits: [
      'Project finance modeling and feasibility analysis',
      'SPV structuring and documentation',
      'Multi-tranche debt and equity arrangement',
      'Government grant and subsidy advisory',
      'Joint venture and partnership structuring',
      'Financial model auditing and review',
    ],
    process: [
      { step: '01', title: 'Feasibility Study', desc: 'Comprehensive analysis of project economics and bankability.' },
      { step: '02', title: 'Capital Stack Design', desc: 'Optimize the mix of debt, equity, and hybrid instruments.' },
      { step: '03', title: 'Lender/Investor Syndication', desc: 'Identify and approach appropriate funding sources.' },
      { step: '04', title: 'Financial Close', desc: 'Execute term sheets, definitive agreements, and drawdown.' },
    ],
    impact:
      'Our structured finance mandates have unlocked critical infrastructure and commercial projects across Rajasthan and beyond.',
  },
  {
    id: 'transaction-advisory',
    title: 'Transaction Advisory',
    shortDesc:
      'Strategic advisory for buy-side and sell-side mandates, business valuations, and complex corporate restructurings.',
    icon: 'ArrowLeftRight',
    color: '#08B39C',
    overview:
      'Our Transaction Advisory team acts as a trusted financial advisor through every stage of a corporate transaction. Whether you are acquiring a business, divesting a division, or restructuring your balance sheet, we provide strategic guidance backed by rigorous analytical frameworks.',
    benefits: [
      'Business valuation and fairness opinions',
      'Buy-side and sell-side mandate management',
      'Negotiation support and deal closing',
      'Vendor due diligence preparation',
      'Corporate restructuring advisory',
      'Post-merger integration support',
    ],
    process: [
      { step: '01', title: 'Mandate Understanding', desc: 'Define transaction objectives, constraints, and success metrics.' },
      { step: '02', title: 'Target Identification', desc: 'Screen and shortlist acquisition targets or buyers.' },
      { step: '03', title: 'Valuation & Negotiation', desc: 'Prepare valuations and lead negotiation with counterparties.' },
      { step: '04', title: 'Deal Closure', desc: 'Coordinate legal, regulatory, and financial closing processes.' },
    ],
    impact:
      'We have advised on transactions across consumer, manufacturing, financial services, and technology sectors with combined deal values exceeding ₹1,500 crores.',
  },
  {
    id: 'compliance-regulatory',
    title: 'Compliance & Regulatory Advisory',
    shortDesc:
      'Ongoing BSE/NSE, RBI, and ROC compliance management ensuring listed companies remain audit-ready and penalty-free.',
    icon: 'Shield',
    color: '#2848B8',
    overview:
      'Chiranjiv Capital provides comprehensive compliance management services, from board meeting secretarial support to regulatory filings, ensuring your company meets every statutory obligation on time, every time.',
    benefits: [
      'Compliance calendar management',
      'Board and committee meeting support',
      'Corporate governance advisory',
      'Related party transaction compliance',
      'Insider trading policy implementation',
      'Annual report and disclosure management',
    ],
    process: [
      { step: '01', title: 'Compliance Audit', desc: 'Identify gaps in current compliance framework.' },
      { step: '02', title: 'Calendar Setup', desc: 'Create a comprehensive annual compliance calendar.' },
      { step: '03', title: 'Ongoing Management', desc: 'Manage day-to-day filings, disclosures, and reports.' },
      { step: '04', title: 'Review & Update', desc: 'Regular reviews to adapt to regulatory changes.' },
    ],
    impact:
      'Our compliance clients have maintained a zero-penalty track record with BSE and NSE under our management.',
  },
];

export const LEADERSHIP = [
  {
    id: 'manoj-sharma',
    name: 'Manoj Kumar Sharma',
    designation: 'Managing Director & CEO',
    shortBio:
      'A seasoned capital markets professional with over 20 years of experience spanning investment banking, equity markets, and regulatory advisory.',
    fullBio:
      'Manoj Kumar Sharma is the founder and driving force behind Chiranjiv Capital Services Limited. With over two decades of experience in India\'s capital markets, he has personally managed over 30 IPO transactions and advised on M&A deals aggregating thousands of crores. His deep relationships with institutional investors, regulators, and promoter communities make him the go-to advisor for businesses navigating their capital market journeys. Manoj holds a Post Graduate Diploma in Management with specialization in Finance.',
    expertise: ['IPO Management', 'Capital Market Strategy', 'Regulatory Relations', 'Investment Banking'],
    experience: '20+ Years',
    education: 'PGDM – Finance | B.Com (Hons)',
    initials: 'MKS',
    color: '#112E63',
    photo: '/team/manoj.jpeg',
  },
  {
    id: 'priya-agarwal',
    name: 'Priya Agarwal',
    designation: 'Director – Transaction Advisory',
    shortBio:
      'A corporate finance specialist with expertise in M&A, private equity, and complex transaction structuring across multiple sectors.',
    fullBio:
      'Priya Agarwal leads the Transaction Advisory practice at Chiranjiv Capital. She brings deep expertise in mergers and acquisitions, private equity transactions, and buy-side advisory. Before joining Chiranjiv Capital, she worked with leading investment banks and advisory firms in Mumbai and Jaipur, advising on cross-border and domestic transactions. Priya holds a Chartered Accountancy qualification and an MBA from a premier institution.',
    expertise: ['M&A Advisory', 'Private Equity', 'Valuation', 'Deal Structuring'],
    experience: '15+ Years',
    education: 'CA | MBA – Finance',
    initials: 'PA',
    color: '#08B39C',
    photo: '/team/priya.jpeg',
  },
  {
    id: 'rajesh-gupta',
    name: 'Rajesh Gupta',
    designation: 'Director – Capital Markets',
    shortBio:
      'An equity capital markets veteran with extensive experience in debt and equity issuances for listed companies across India.',
    fullBio:
      'Rajesh Gupta oversees all capital market service lines at Chiranjiv Capital, including NCD issuances, equity preferential allotments, and open offers. He has over 15 years of experience working at the intersection of corporate finance and capital markets. Rajesh\'s relationships with institutional investors, banks, and NBFCs have been instrumental in successfully placing debt and equity instruments for the firm\'s listed corporate clients.',
    expertise: ['Equity Capital Markets', 'Debt Issuance', 'Investor Relations', 'Listed Company Advisory'],
    experience: '15+ Years',
    education: 'CFA | B.E. + MBA',
    initials: 'RG',
    color: '#2848B8',
    photo: '/team/rajesh.jpeg',
  },
  {
    id: 'anita-joshi',
    name: 'Anita Joshi',
    designation: 'Head – Compliance & Regulatory',
    shortBio:
      'A compliance and governance expert with deep knowledge of capital market regulatory frameworks and the Companies Act.',
    fullBio:
      'Anita Joshi heads the Compliance and Regulatory Advisory practice at Chiranjiv Capital. A Company Secretary by training with additional qualifications in law, she has advised over 100 listed and unlisted companies on governance, statutory compliance, and regulatory filings. Her meticulous approach and comprehensive knowledge of capital market regulations have helped clients maintain impeccable compliance records. Anita is a fellow member of the Institute of Company Secretaries of India.',
    expertise: ['Regulatory Compliance', 'Corporate Governance', 'Company Secretarial', 'Regulatory Filings'],
    experience: '12+ Years',
    education: 'FCS | LLB',
    initials: 'AJ',
    color: '#CFA84F',
    photo: '/team/anita.jpeg',
  },
  {
    id: 'vikram-singhania',
    name: 'Vikram Singhania',
    designation: 'Head – Financial Structuring',
    shortBio:
      'A project finance and structured finance specialist with a track record of arranging funding for infrastructure and real estate projects.',
    fullBio:
      'Vikram Singhania leads the Project and Financial Structuring practice at Chiranjiv Capital. He brings 12 years of experience in project finance, debt syndication, and structured product design. Vikram has arranged project finance facilities for several large infrastructure, renewable energy, and commercial real estate projects across Rajasthan and other states. He is known for his ability to balance lender requirements with promoter objectives in complex multi-stakeholder financing scenarios.',
    expertise: ['Project Finance', 'Structured Finance', 'Debt Syndication', 'Infrastructure Financing'],
    experience: '12+ Years',
    education: 'CA | PGDM – Finance',
    initials: 'VS',
    color: '#112E63',
    photo: '/team/vikram.jpeg',
  },
];

export const IPO_CLIENTS = [
  'Mahindra Manulife Mutual Fund',
  'Patel Engineering Ltd',
  'Indo National Ltd',
  'Rajputana Hotels Ltd',
  'Jaipur Rugs Company Ltd',
  'Genus Power Infrastructures Ltd',
  'Rajasthan Patrika Ltd',
  'Shri Jagdamba Polymers Ltd',
  'Aarvee Denims & Exports Ltd',
  'Surana Solar Limited',
  'Minda Finance Ltd',
  'Sabka Vishwas Minerals Ltd',
  'Sriram EPC Limited',
  'Texmo Pipes & Products Ltd',
  'Classic Global Finance Ltd',
  'Subhash Projects & Marketing Ltd',
];

export const LISTED_CLIENTS = [
  'Genus Power Infrastructures Ltd',
  'Patel Engineering Ltd',
  'Shri Jagdamba Polymers Ltd',
  'Aarvee Denims & Exports Ltd',
  'Rajasthan Patrika Media Ltd',
  'Surana Solar Limited',
  'Minda Industries Ltd',
  'Texmo Pipes & Products Ltd',
  'Indo National Ltd',
  'Classic Global Finance Ltd',
  'Subhash Projects & Marketing Ltd',
  'Sriram EPC Limited',
  'Genus Prime Infra Ltd',
  'Mangalam Cement Ltd',
  'Bank of Baroda (Rajasthan Operations)',
  'Vardhman Textiles Ltd',
  'Bharat Wire Ropes Ltd',
  'DCM Shriram Ltd',
];

export const WHY_CHOOSE = [
  {
    icon: 'Award',
    title: 'Licensed Merchant Banker',
    desc: 'Fully licensed and regulated under the Merchant Bankers Regulations, 1992, ensuring the highest standards of professional practice.',
  },
  {
    icon: 'Users',
    title: 'Experienced Leadership',
    desc: 'Our leadership team brings a combined 75+ years of capital markets expertise across IPOs, M&A, compliance, and structured finance.',
  },
  {
    icon: 'Target',
    title: 'Client-Centric Approach',
    desc: 'We build long-term relationships, not transactional engagements. Every mandate receives senior leadership attention from start to finish.',
  },
  {
    icon: 'Layers',
    title: 'End-to-End Solutions',
    desc: 'From capital raising to compliance management, we are a single window for all your capital market needs—eliminating coordination risk.',
  },
];

export const PROCESS_STEPS = [
  { number: '01', title: 'Discovery', desc: 'Deep understanding of your business, goals, and capital requirements.' },
  { number: '02', title: 'Evaluation', desc: 'Financial analysis, valuation, and market readiness assessment.' },
  { number: '03', title: 'Structuring', desc: 'Design the optimal capital structure and transaction architecture.' },
  { number: '04', title: 'Execution', desc: 'Flawless execution with institutional discipline and regulatory precision.' },
  { number: '05', title: 'Compliance', desc: 'Post-transaction compliance management and reporting.' },
  { number: '06', title: 'Growth', desc: 'Ongoing advisory partnership to support your next phase of growth.' },
];

export const ABOUT_MILESTONES = [
  { year: '2019', title: 'Founded', desc: 'Chiranjiv Capital incorporated as a Merchant Banker.' },
  { year: '2020', title: 'First IPO', desc: 'Successfully managed first SME IPO on BSE, raising ₹45 Cr for a Jaipur-based manufacturer.' },
  { year: '2021', title: 'Team Expansion', desc: 'Added Transaction Advisory and Compliance verticals with senior talent.' },
  { year: '2022', title: 'Milestone 25 IPOs', desc: 'Completed 25th IPO mandate, establishing leadership in Rajasthan capital markets.' },
  { year: '2023', title: 'Structured Finance', desc: 'Launched Project Finance division, arranging ₹500 Cr in infrastructure funding.' },
  { year: '2024', title: 'Pan-India Presence', desc: 'Extended client base to 200+ listed companies across 15 states.' },
];

export const COMPANY_VALUES = [
  {
    icon: 'Shield',
    title: 'Integrity',
    desc: 'Unwavering ethical standards in every transaction, advisory engagement, and client interaction.',
  },
  {
    icon: 'Zap',
    title: 'Excellence',
    desc: 'Relentless pursuit of quality, precision, and superior outcomes in every mandate we undertake.',
  },
  {
    icon: 'Heart',
    title: 'Client First',
    desc: 'Our clients\' long-term success is our north star. Every decision is made with your interests at heart.',
  },
  {
    icon: 'Globe',
    title: 'Collaboration',
    desc: 'We work as an extension of your team, bringing diverse expertise while respecting your vision.',
  },
];
