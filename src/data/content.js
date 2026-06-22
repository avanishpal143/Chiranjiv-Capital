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
      'We help businesses raise capital through IPOs and other fund-raising avenues, guiding them from readiness and regulatory compliances to successful listing.',
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
      'We offer expert M&A advisory and comprehensive due diligence services, streamlining mergers, acquisitions, divestitures, and joint ventures from strategy to closure.',
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
      'We provide end-to-end Capital Market Services, including equity/debt issuances, listings, regulatory compliance, and advisory for seamless capital raising and investor engagement.',
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
      'Involves expert advisory on project feasibility, funding arrangements, capital raising, and financial modeling to optimize business growth and compliance.',
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
      'Our structured finance mandates have unlocked critical infrastructure and commercial projects across the country and beyond.',
  },
  {
    id: 'transaction-advisory',
    title: 'Transaction Advisory',
    shortDesc:
      'Provides expert guidance on mergers, acquisitions, divestitures, due diligence, valuation, and deal structuring to maximize value and mitigate risks in business transactions.',
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
      'Ensures adherence to statutory laws, regulatory filings, and governance standards like Companies Act 2013 to mitigate risks and avoid penalties.',
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
    id: 'manoj-agrawal',
    name: 'Manoj Agrawal',
    designation: 'Managing Director & CEO',
    shortBio:
      'A luminary in finance and law, with over two decades of mastery in equity markets, IPO advisory, and NBFC leadership.',
    fullBio:
      'Manoj Agrawal, a luminary in finance and law, weaves over two decades of mastery in equity markets, IPO advisory, NBFC leadership, and SME consulting. With LLB, LLM, and IIT credentials, he orchestrates mergers, compliance, and transformative growth with visionary precision. His multidisciplinary approach and strong leadership guide Chiranjiv Capital\'s strategic vision.',
    expertise: ['Equity Markets', 'IPO Advisory', 'NBFC Leadership', 'SME Consulting', 'Mergers & Acquisitions'],
    experience: '20+ Years',
    education: 'IIT | LLB | LLM',
    initials: 'MA',
    color: '#CFA84F',
    photo: '/team/manoj_agrawal.jpeg',
  },
  {
    id: 'amit-saraogi',
    name: 'CA Amit Kr. Saraogi',
    designation: 'Head – Corporate Finance & Strategy',
    shortBio:
      'FCA with 25+ years of expertise in finance, taxation, investments, compliance, and corporate growth.',
    fullBio:
      'CA Amit Kr. Saraogi is an FCA with 25+ years of rich expertise in finance, taxation, investments, compliance, and corporate strategy. He excels in fund management, M&A, RBI-governed NBFC operations, insurance broking, and driving business growth. His extensive career spans advisory roles for prominent corporate houses, implementing robust financial systems and structuring complex investment portfolios.',
    expertise: ['Fund Management', 'M&A', 'Corporate Finance', 'NBFC Operations', 'Strategic Growth'],
    experience: '25+ Years',
    education: 'FCA',
    initials: 'AS',
    color: '#08B39C',
    photo: '/team/amit.jpeg',
  },
  {
    id: 'manish-mittal',
    name: 'Adv. Manish Mittal',
    designation: 'Head – Legal & Tax Litigation',
    shortBio:
      'Advocate with over 25 years of expertise in direct & indirect taxation, corporate law, and legal advisory.',
    fullBio:
      'Adv. Manish Mittal offers over 25 years of expertise in professional services, providing strategic financial and legal advice to firms, MSMEs, and corporate houses. Specializing in direct & indirect taxation, legal issues, and insurance, he is a seasoned tax litigation lawyer who navigates governance complexities and drives compliance and growth.',
    expertise: ['Tax Litigation', 'Corporate Legal Advisory', 'Governance Complexities', 'Indirect Taxation'],
    experience: '25+ Years',
    education: 'Advocate | LLB',
    initials: 'MM',
    color: '#2848B8',
    photo: '/team/manish.jpeg',
  },
  {
    id: 'sumit-bajaj',
    name: 'CS Sumit Bajaj',
    designation: 'Head – Capital Markets & Compliance',
    shortBio:
      'CS with 10 years of expertise in capital markets, securities laws, corporate governance, and due diligence.',
    fullBio:
      'CS Sumit Bajaj brings 10 years of expertise in capital markets, securities laws, corporate governance, and due diligence. He specializes in IPOs, FPOs, listings, migrations, and SEBI compliance. With a deep understanding of corporate regulatory landscapes and merchant banking compliance, he has successfully guided numerous enterprises through complex market transitions and regulatory approvals.',
    expertise: ['Capital Markets', 'Securities Laws', 'Corporate Governance', 'SEBI Compliance', 'IPOs & FPOs'],
    experience: '10+ Years',
    education: 'CS | B.Com',
    initials: 'SB',
    color: '#112E63',
    photo: '/team/sumit.jpeg',
  },
  {
    id: 'aman-gupta',
    name: 'CA Aman Gupta',
    designation: 'Head – Financial Modeling & Advisory',
    shortBio:
      'A meritorious Chartered Accountant from ICAI specializing in tax litigation, financial modeling, and wealth creation.',
    fullBio:
      'CA Aman Gupta, a meritorious Chartered Accountant from ICAI, illuminates the realms of direct/indirect tax litigation, financial modeling, IPO advisory, and wealth creation. At 36, with forensic expertise and a legacy in PSUs and listed firms, he crafts transparent paths to fiscal mastery and strategic triumph.',
    expertise: ['Financial Modeling', 'Tax Litigation', 'Forensic Audit', 'IPO Advisory', 'Wealth Creation'],
    experience: '12+ Years',
    education: 'CA',
    initials: 'AG',
    color: '#112E63',
    photo: '/team/aman.jpeg',
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
  'Boston Commerce Limited (Formerly known as Boston Bio Systems Limited)',
  'KCK Industries Limited',
  'Flywings Simulator Training Centre Limited',
];

export const WHY_CHOOSE = [
  {
    icon: 'Users',
    title: 'Experienced Leadership',
    desc: 'Team of seasoned professionals with expertise in capital markets and corporate finance.',
  },
  {
    icon: 'Shield',
    title: 'Regulatory Expertise',
    desc: 'Strong understanding of financial regulations and compliance frameworks.',
  },
  {
    icon: 'Target',
    title: 'Client-Centric Approach',
    desc: 'Tailored solutions based on specific business needs.',
  },
  {
    icon: 'Layers',
    title: 'End-to-End Solution',
    desc: 'Comprehensive support from planning to execution.',
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
  { year: '2020', title: 'First IPO', desc: 'Successfully managed first SME IPO on BSE, raising ₹45 Cr for a leading manufacturer.' },
  { year: '2021', title: 'Team Expansion', desc: 'Added Transaction Advisory and Compliance verticals with senior talent.' },
  { year: '2022', title: 'Milestone 25 IPOs', desc: 'Completed 25th IPO mandate, establishing strong credentials in SME capital markets.' },
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
