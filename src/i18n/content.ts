import type { Lang } from './config';

/* ============================================================================
   EOS OMEGA ACCELERATION — site content (bilingual)
   Voice: short, concrete, Western-tech. Real data (stats, dates, records,
   names) is preserved verbatim; only prose is kept tight.
   ========================================================================== */

const en = {
  brand: {
    name: 'EOS OMEGA',
    sub: 'ACCELERATION',
    full: 'EOS OMEGA Acceleration',
  },
  official: 'Officially Recognized EOS Accelerator',
  nav: {
    about: 'About',
    programs: 'Programs',
    portfolio: 'Portfolio',
    ecosystem: 'Ecosystem',
    process: 'Process',
    insights: 'Insights',
    apply: 'Apply',
  },
  actions: {
    apply: 'Apply to Cohort',
    applyNow: 'Apply Now',
    partner: 'Become a Partner',
    learnMore: 'Learn more',
    explore: 'Explore programs',
    viewAll: 'View all',
    getStarted: 'Start your application',
  },
  hero: {
    badge: 'Officially recognized by the EOS Network',
    titleLead: 'Build the',
    titleHi: 'ultimate',
    titleTail: 'ventures on EOS',
    subtitle:
      'The official EOS accelerator. Capital, engineering and a global network — from idea to liquidity.',
    ctaPrimary: 'Apply to the cohort',
    ctaSecondary: 'Explore the program',
    scroll: 'Scroll',
  },
  stats: {
    eyebrow: 'Track record',
    items: [
      { value: '$50M+', label: 'Capital deployed' },
      { value: '45+', label: 'Ventures accelerated' },
      { value: '18', label: 'Countries' },
      { value: '92%', label: 'Survival rate' },
    ],
  },
  trust: {
    label: 'Backed by the EOS ecosystem',
    partners: ['EOS Network Foundation', 'exSat Network', 'Antelope', 'EOS VM', 'EOS EVM', 'Helios'],
  },
  about: {
    eyebrow: 'The Omega thesis',
    title: 'The last mile from idea to ecosystem',
    body: 'Omega is the finish line. We take the most ambitious EOS founders from idea to a shipped, funded protocol — pairing non-dilutive grants with hands-on engineering and a senior operator network.',
    points: [
      {
        title: 'Officially recognized',
        desc: 'Direct lines to the EOS core teams, grants and infrastructure.',
      },
      {
        title: 'Operator-led',
        desc: 'Built by founders who have shipped protocols, exchanges and L1s.',
      },
      {
        title: 'Capital + craft',
        desc: 'Funding plus real engineering and go-to-market — not just a check.',
      },
    ],
  },
  programs: {
    eyebrow: 'Acceleration programs',
    title: 'Three tracks. One destination.',
    subtitle: 'A track for every stage — from first prototype to token launch.',
    tracks: [
      {
        tag: 'Pre-seed',
        name: 'Incubation',
        duration: '8 weeks',
        desc: 'Validate the idea, ship a prototype, reach your first users.',
        points: ['Idea & token design validation', 'Technical co-build sprints', 'Up to $50K in grants & credits'],
      },
      {
        tag: 'Seed',
        name: 'Flagship Acceleration',
        featured: true,
        duration: '12 weeks',
        desc: 'The intensive cohort for teams ready to launch. Ends in Demo Day.',
        points: ['$150K standard investment', 'Dedicated engineering pod', 'Demo Day & follow-on intros'],
      },
      {
        tag: 'Growth',
        name: 'Scale & Launch',
        duration: 'Rolling',
        desc: 'For live protocols preparing a token launch or major raise.',
        points: ['Token & liquidity strategy', 'Exchange & market-maker access', 'Institutional capital intros'],
      },
    ],
  },
  offer: {
    eyebrow: 'What founders get',
    title: 'A full-stack unfair advantage',
    subtitle: 'Everything you need to go from zero to a funded venture on EOS.',
    items: [
      { title: 'Capital', desc: 'Direct investment, non-dilutive grants and follow-on.' },
      { title: 'Engineering', desc: 'Hands-on contract and infra support — we build with you.' },
      { title: 'Mentorship', desc: 'Weekly 1:1s with operators who have launched L1s and exchanges.' },
      { title: 'Network', desc: 'Warm intros to EOS core teams, exchanges, auditors and 200+ partners.' },
      { title: 'Go-to-market', desc: 'Growth and token-launch playbooks from dozens of launches.' },
      { title: 'Listing & liquidity', desc: 'Token design, market-makers and exchange access.' },
    ],
  },
  process: {
    eyebrow: 'How it works',
    title: 'From application to Demo Day',
    steps: [
      { title: 'Apply', desc: 'Submit your team and thesis. Reviewed weekly.' },
      { title: 'Screen & interview', desc: 'Two-stage review — investment and technical.' },
      { title: 'Onboard', desc: 'Terms, grants and your engineering pod, set in week one.' },
      { title: 'Build', desc: '8–12 weeks of intensive co-building and growth.' },
      { title: 'Demo Day & beyond', desc: 'Pitch the ecosystem, raise follow-on, join the alumni network.' },
    ],
  },
  portfolio: {
    eyebrow: 'Portfolio',
    title: 'Ventures built with OMEGA',
    subtitle: 'Teams scaling the EOS economy — an illustrative selection.',
    filterAll: 'All',
    aggregate: [
      { value: '$340M+', label: 'Raised by alumni' },
      { value: '$2.1B', label: 'Combined valuation' },
      { value: '45+', label: 'Ventures accelerated' },
    ],
    companies: [
      { name: 'HelioDEX', category: 'DeFi', cohort: 'OMEGA 03', desc: 'Perpetuals & spot DEX on EOS EVM.', stat: '$80M TVL' },
      { name: 'Vaulta RWA', category: 'RWA', cohort: 'OMEGA 03', desc: 'Tokenized treasuries & private credit.', stat: '$120M issued' },
      { name: 'Antimony', category: 'Infrastructure', cohort: 'OMEGA 02', desc: 'Indexing & data layer for Antelope.', stat: '1.2B queries' },
      { name: 'Strata Pay', category: 'Payments', cohort: 'OMEGA 02', desc: 'Stablecoin rails for emerging markets.', stat: '40 countries' },
      { name: 'Forge Arena', category: 'Gaming', cohort: 'OMEGA 02', desc: 'On-chain competitive gaming on EOS.', stat: '210K players' },
      { name: 'Sentinel AI', category: 'AI x Crypto', cohort: 'OMEGA 01', desc: 'On-chain agent infrastructure.', stat: '15K agents' },
      { name: 'Lumen Lend', category: 'DeFi', cohort: 'OMEGA 01', desc: 'Fixed-rate lending markets on EOS.', stat: '$45M TVL' },
      { name: 'Meridian ID', category: 'Infrastructure', cohort: 'OMEGA 03', desc: 'On-chain identity & attestations.', stat: '300K IDs' },
      { name: 'Cobalt Pay', category: 'Payments', cohort: 'OMEGA 01', desc: 'Merchant settlement in stablecoins.', stat: '$60M volume' },
    ],
  },
  mentors: {
    eyebrow: 'Mentors & partners',
    title: 'Guided by people who have shipped',
    subtitle: 'Work alongside operators, investors and core engineers from across the EOS ecosystem.',
    roles: ['Protocol engineers', 'Exchange founders', 'Token economists', 'Growth operators', 'Legal & compliance', 'Institutional investors'],
  },
  testimonial: {
    quote:
      'OMEGA was the difference between a prototype and a protocol. The engineering and the direct line to the EOS core teams compressed a year into three months.',
    author: 'Founder',
    role: 'Flagship Cohort venture',
  },
  faq: {
    eyebrow: 'FAQ',
    title: 'Questions, answered',
    items: [
      {
        q: 'What does "officially recognized" mean?',
        a: 'A sanctioned EOS Network partner — direct access to core teams, grants and infrastructure for our founders.',
      },
      {
        q: 'Who should apply?',
        a: 'Teams building apps, infrastructure or capital markets on EOS — from idea to live traction.',
      },
      {
        q: 'Do you take equity or tokens?',
        a: 'Varies by track. Flagship is a standard investment; incubation is grant-based. Specifics come at the offer stage.',
      },
      {
        q: 'Is the program remote or in person?',
        a: 'Remote-first, with optional summits and an in-person Demo Day. Apply from anywhere.',
      },
      {
        q: 'When does the next cohort start?',
        a: 'Rolling review, quarterly cohorts. Apply any time — strong teams are fast-tracked.',
      },
    ],
  },
  finalCta: {
    eyebrow: 'The next cohort',
    title: 'Your venture. The ultimate stage.',
    subtitle: 'The next EOS OMEGA cohort is open. Bring your most ambitious idea.',
    primary: 'Apply to the cohort',
    secondary: 'Talk to the team',
  },
  footer: {
    tagline: 'The officially recognized accelerator for the EOS Network.',
    builtFor: 'Built for the builders of EOS.',
    cols: [
      { title: 'Program', links: ['About', 'Programs', 'Process', 'Portfolio', 'Apply'] },
      { title: 'Ecosystem', links: ['EOS Network', 'exSat', 'Grants', 'Documentation', 'Brand kit'] },
      { title: 'Company', links: ['Team', 'Insights', 'Careers', 'Press', 'Contact'] },
    ],
    rights: 'All rights reserved.',
    legal: ['Privacy', 'Terms', 'Disclosures'],
    disclaimer:
      'EOS OMEGA Acceleration is an accelerator program. Nothing on this site is investment advice or an offer of securities.',
  },
  apply: {
    eyebrow: 'Application',
    title: 'Apply to EOS OMEGA',
    subtitle: 'Tell us what you are building on EOS. We review weekly.',
    form: {
      name: 'Founder name',
      email: 'Email',
      project: 'Project / company',
      website: 'Website or repo',
      track: 'Track',
      trackOptions: ['Incubation (pre-seed)', 'Flagship Acceleration (seed)', 'Scale & Launch (growth)'],
      stage: 'Current stage',
      stageOptions: ['Idea', 'Prototype', 'Live with users', 'Revenue / traction'],
      pitch: 'What are you building, and why now?',
      pitchPlaceholder: 'The problem, your solution on EOS, and traction so far…',
      submit: 'Submit application',
      note: 'We typically respond within 5 business days.',
      success: 'Application received. Our team will be in touch shortly.',
    },
  },
  aboutPage: {
    eyebrow: 'About EOS OMEGA',
    title: 'We take EOS founders to the finish line',
    intro:
      'The officially recognized accelerator for the EOS Network. We back and build the ecosystem\'s most ambitious teams.',
    missionTitle: 'Our mission',
    mission:
      'Turn ambitious founders into category-defining ventures — and compound the EOS economy. We exist for the last, hardest mile.',
    valuesTitle: 'What we believe',
    values: [
      { title: 'Builders first', desc: 'Founders are the protagonists. The program runs on their velocity.' },
      { title: 'Capital is necessary, not sufficient', desc: 'A check is the easy part. Engineering and network are what compound.' },
      { title: 'Ecosystem over ego', desc: 'A rising EOS lifts every venture. We optimize for the whole.' },
      { title: 'Ship relentlessly', desc: 'Momentum is the only early moat. We measure shipped code and real users.' },
    ],
  },
  recognition: {
    badge: 'Officially Recognized',
    title: 'A recognized accelerator within the EOS ecosystem',
    statement:
      'A recognized acceleration partner of the EOS ecosystem — with direct lines to the core teams, the grants framework, and EOS Native / EOS EVM infrastructure.',
    lockup: 'Recognized partner',
    note: 'EOS and related marks belong to their respective owners. Replace the lockup with the official partner asset once issued.',
  },
  cohort: {
    eyebrow: 'Next cohort · OMEGA 04',
    title: 'Applications are open',
    subtitle: 'Rolling review — decisions typically within 10 business days.',
    milestones: [
      { phase: 'Applications close', date: 'Aug 15, 2026' },
      { phase: 'Interviews', date: 'Aug – Sep 2026' },
      { phase: 'Program begins', date: 'Oct 6, 2026' },
      { phase: 'Demo Day', date: 'Dec 9, 2026' },
    ],
  },
  backers: {
    vcLabel: 'Co-investment & follow-on from leading funds',
    vcs: ['Helios Capital', 'Antumbra Ventures', 'Meridian Digital', 'Lattice Capital', 'Northgate Crypto', 'Vertex Web3'],
    mediaLabel: 'As featured in',
    media: ['ChainWire', 'The Ledger', 'Block Daily', 'Decrypt Wire', 'Protocol Times'],
    note: 'Placeholder partners — replace with your real backers, media coverage and logos.',
  },
  team: {
    eyebrow: 'Mentors & team',
    title: 'Operators who have shipped at scale',
    subtitle: 'Founders work 1:1 with people who have built protocols, exchanges and L1s.',
    people: [
      { name: 'Marcus Lindqvist', role: 'Managing Partner', org: 'ex-L1 Foundation' },
      { name: 'Sofia Park', role: 'Venture Partner', org: 'Founder, EOS DeFi protocol' },
      { name: 'Daniel Osei', role: 'Head of Engineering', org: 'Antelope / EOS VM' },
      { name: 'Yuki Tanaka', role: 'Token Economist', org: 'Mechanism design' },
      { name: 'Elena Rossi', role: 'Growth Partner', org: 'ex-Top-5 exchange' },
      { name: 'Omar Haddad', role: 'Legal & Compliance', org: 'Digital-assets counsel' },
    ],
    note: 'Placeholder profiles — replace with your real mentors and team.',
  },
  grants: {
    eyebrow: 'Ecosystem grants',
    title: 'Non-dilutive capital to keep building',
    subtitle: 'Beyond our investment: fast-tracked, milestone-based grants that never touch your cap table.',
    items: [
      { name: 'Build grants', amount: 'Up to $250K', desc: 'Milestone funding to ship core protocol and product.' },
      { name: 'Ecosystem grants', amount: 'Up to $100K', desc: 'For public goods, tooling and infrastructure.' },
      { name: 'Growth grants', amount: 'Case by case', desc: 'Co-marketing and liquidity support after launch.' },
    ],
    points: ['Non-dilutive — no equity or tokens taken', 'Released against milestones', 'Direct line to the EOS grants committee'],
    note: 'Grant amounts are illustrative. Final terms are set by the EOS grants framework.',
  },
  tokenLaunch: {
    eyebrow: 'Token & launch',
    title: 'From token design to listing day',
    subtitle: 'The last mile of a crypto launch — the playbook and the relationships.',
    terms: {
      title: 'Transparent token terms',
      body: 'If you launch a token, OMEGA participates on the same standard terms as our equity — documented up front in a simple side letter. Most teams never tokenize.',
      points: ['Standard, founder-friendly terms', 'No obligation to ever launch a token', 'Documented up front — no surprises'],
    },
    support: {
      title: 'Pre-TGE & listing support',
      body: 'For teams heading to a TGE, we help you reach the market cleanly.',
      items: ['Token design & economics review', 'Market-maker introductions', 'Exchange & listing access', 'Launch & liquidity strategy'],
    },
  },
  demoDay: {
    eyebrow: 'Demo Day',
    title: 'The stage where ventures break out',
    subtitle: 'Every cohort ends in Demo Day — a curated showcase to the funds and partners who write the next checks.',
    stats: [
      { value: '150+', label: 'Investors & partners in the room' },
      { value: '$3.5M', label: 'Median raise post-program' },
      { value: 'Lifetime', label: 'Alumni network access' },
    ],
    points: ['Curated investor & partner audience', 'Broadcast to the EOS ecosystem', 'Warm follow-on introductions afterward'],
  },
  ecosystemPage: {
    eyebrow: 'Ecosystem',
    title: 'A living, growing EOS economy',
    subtitle: 'Tracks, events, a lifelong community, and the teams hiring across the network.',
  },
  tracks: {
    eyebrow: 'Co-branded tracks',
    title: 'Specialized tracks across the EOS frontier',
    subtitle: 'Focused, co-branded tracks — build alongside teams and mentors in your domain.',
    items: [
      { name: 'EOS Native', tag: 'Flagship', desc: 'Apps and infra built directly on EOS Native / Antelope.' },
      { name: 'DeFi', tag: 'Capital markets', desc: 'DEXs, lending, derivatives and stablecoins on EOS EVM.' },
      { name: 'RWA', tag: 'With ecosystem partners', desc: 'Tokenized treasuries, credit and real-world assets.' },
      { name: 'AI × Crypto', tag: 'Emerging', desc: 'On-chain agents, inference markets and data.' },
      { name: 'Payments', tag: 'Growth', desc: 'Stablecoin rails, settlement and merchant tools.' },
      { name: 'Gaming & Consumer', tag: 'Consumer', desc: 'On-chain games, social and consumer apps.' },
    ],
    note: 'Tracks rotate by cohort and partner. Co-branded tracks are announced ahead of each batch.',
  },
  events: {
    eyebrow: 'Events & hackathons',
    title: 'Where the ecosystem meets',
    subtitle: 'Hackathons, Demo Day and summits — where builders become a community.',
    items: [
      { type: 'Hackathon', name: 'OMEGA Build Sprint', date: 'Sep 2026', location: 'Global · Online', desc: 'Two-week hackathon: idea to MVP, with grants for the best builds.' },
      { type: 'Demo Day', name: 'OMEGA 04 Demo Day', date: 'Dec 9, 2026', location: 'Hybrid', desc: 'Cohort 04 pitches the funds, angels and partners.' },
      { type: 'Summit', name: 'EOS Founder Summit', date: 'Q1 2027', location: 'TBA', desc: 'In-person, for alumni, mentors and EOS core teams.' },
      { type: 'Meetup', name: 'OMEGA Office Hours', date: 'Monthly', location: 'Online', desc: 'Open AMA with partners and mentors. Anyone can join.' },
    ],
    cta: 'View all events',
  },
  community: {
    eyebrow: 'Community & DAO',
    title: 'Join the OMEGA founder network',
    subtitle: 'A lifelong network — private founder forum, alumni DAO, and 90+ partner perks.',
    stats: [
      { value: '700+', label: 'Founders & builders' },
      { value: '90+', label: 'Partner perks & deals' },
      { value: '24/7', label: 'Founder forum & support' },
    ],
    channels: [
      { name: 'Discord', handle: 'Join the server', href: 'https://discord.com' },
      { name: 'Telegram', handle: 'OMEGA builders', href: 'https://telegram.org' },
      { name: 'X', handle: '@eosomega', href: 'https://x.com' },
      { name: 'Alumni DAO', handle: 'Governance & deal flow', href: '#' },
    ],
    note: 'Placeholder links — point these at your real community channels.',
  },
  jobs: {
    eyebrow: 'Jobs at portfolio companies',
    title: 'The ecosystem is hiring',
    subtitle: 'Open roles across OMEGA portfolio companies.',
    roles: [
      { role: 'Senior Smart Contract Engineer', company: 'HelioDEX', location: 'Remote', tag: 'Engineering' },
      { role: 'Protocol Researcher', company: 'Lumen Lend', location: 'Remote', tag: 'Research' },
      { role: 'Head of Growth', company: 'Strata Pay', location: 'Singapore / Remote', tag: 'Growth' },
      { role: 'Frontend Engineer', company: 'Meridian ID', location: 'Remote', tag: 'Engineering' },
      { role: 'Token Economist', company: 'Vaulta RWA', location: 'Remote', tag: 'Token' },
      { role: 'DevRel Lead', company: 'Antimony', location: 'Remote', tag: 'Community' },
    ],
    cta: 'Post a role',
    note: 'Placeholder roles — wire to your real jobs board or ATS.',
  },
  compliance: {
    eyebrow: 'Trust & compliance',
    title: 'A regulated entity, not just a website',
    intro:
      'EOS OMEGA Acceleration Inc. is a registered Money Services Business (MSB) with FinCEN, the U.S. Treasury bureau that regulates money transmitters and payment companies.',
    footerBadge: 'FinCEN MSB Registered',
    recordLabel: 'FinCEN MSB registration record',
    fields: [
      { k: 'legal_name', v: 'EOS Omega Acceleration Inc.' },
      { k: 'registration_no', v: '31000333830770' },
      { k: 'registration_type', v: 'Initial Registration' },
      { k: 'jurisdiction', v: 'California, United States' },
      {
        k: 'activities',
        v: 'Money transmitter · dealer in foreign exchange · issuer/seller of money orders · seller of prepaid access',
      },
      { k: 'states_covered', v: 'All U.S. states & territories' },
      { k: 'authorized_date', v: '2026-06-24' },
    ],
    verifyTitle: 'Verify it yourself',
    verify:
      'Drawn from FinCEN\'s public MSB Registrant Search. Verify registration 31000333830770 at fincen.gov — we\'d rather you check than take our word for it.',
    disclaimer:
      'MSB registration is a compliance filing, not a government endorsement — FinCEN does not recommend, approve, or endorse any business that registers as a money services business.',
  },
};

const zh: typeof en = {
  brand: {
    name: 'EOS OMEGA',
    sub: 'ACCELERATION',
    full: 'EOS OMEGA 加速器',
  },
  official: 'EOS 官方认可加速器',
  nav: {
    about: '关于',
    programs: '加速计划',
    portfolio: '已投项目',
    ecosystem: '生态',
    process: '流程',
    insights: '洞察',
    apply: '申请',
  },
  actions: {
    apply: '申请入营',
    applyNow: '立即申请',
    partner: '成为合作伙伴',
    learnMore: '了解更多',
    explore: '查看计划',
    viewAll: '查看全部',
    getStarted: '开始申请',
  },
  hero: {
    badge: '由 EOS Network 官方认可',
    titleLead: '在 EOS 上打造',
    titleHi: '终极',
    titleTail: '级项目',
    subtitle: 'EOS 上的官方加速器。资金、工程与全球网络——从想法到流动性。',
    ctaPrimary: '申请入营',
    ctaSecondary: '了解加速计划',
    scroll: '向下滚动',
  },
  stats: {
    eyebrow: '过往战绩',
    items: [
      { value: '$50M+', label: '资金部署' },
      { value: '45+', label: '加速项目' },
      { value: '18', label: '覆盖国家' },
      { value: '92%', label: '存活率' },
    ],
  },
  trust: {
    label: 'EOS 生态背书',
    partners: ['EOS Network Foundation', 'exSat Network', 'Antelope', 'EOS VM', 'EOS EVM', 'Helios'],
  },
  about: {
    eyebrow: 'Omega 论点',
    title: '从想法到生态的最后一公里',
    body: 'Omega 即终点。我们把最有野心的 EOS 创始人从想法送到上线、拿到融资的协议——非稀释性资助、亲力工程与资深运营者网络三合一。',
    points: [
      {
        title: '官方认可',
        desc: '直连 EOS 核心团队、资助与基础设施。',
      },
      {
        title: '运营者主导',
        desc: '由交付过协议、交易所与 L1 的创始人打造。',
      },
      {
        title: '资金 + 手艺',
        desc: '资金加上真刀真枪的工程与增长——不只是一张支票。',
      },
    ],
  },
  programs: {
    eyebrow: '加速计划',
    title: '三条赛道，一个终点。',
    subtitle: '每个阶段都有一条赛道——从第一个原型到代币上线。',
    tracks: [
      {
        tag: '种子前',
        name: '孵化',
        duration: '8 周',
        desc: '验证想法、做出原型、触达首批用户。',
        points: ['想法与代币模型验证', '技术联合开发冲刺', '最高 $50K 资助与额度'],
      },
      {
        tag: '种子',
        name: '旗舰加速',
        featured: true,
        duration: '12 周',
        desc: '为准备上线的团队打造的高强度营期，以 Demo Day 收尾。',
        points: ['$150K 标准投资', '专属工程小组', 'Demo Day 与后续轮引荐'],
      },
      {
        tag: '成长',
        name: '规模化与上线',
        duration: '常年滚动',
        desc: '面向已上线、准备代币发行或大额融资的协议。',
        points: ['代币与流动性策略', '交易所与做市商资源', '机构资本引荐'],
      },
    ],
  },
  offer: {
    eyebrow: '创始人能获得什么',
    title: '一套全栈式的不公平优势',
    subtitle: '在 EOS 上从零到拿到融资，所需的一切。',
    items: [
      { title: '资金', desc: '直接投资、非稀释性资助与后续跟投。' },
      { title: '工程', desc: '覆盖 Antelope、EOS VM 与 EOS EVM 的合约与基础设施支持——一起写代码。' },
      { title: '导师', desc: '每周与发起过 L1、交易所的运营者一对一。' },
      { title: '网络', desc: '直连 EOS 核心团队、交易所、审计与 200+ 伙伴。' },
      { title: '增长与上市', desc: '数十次生态上线打磨出的增长与发币打法。' },
      { title: '上所与流动性', desc: '代币设计、做市商与交易所资源。' },
    ],
  },
  process: {
    eyebrow: '运作方式',
    title: '从申请到 Demo Day',
    steps: [
      { title: '申请', desc: '提交团队与论点，每周评审。' },
      { title: '筛选与面试', desc: '投资与技术两轮评审。' },
      { title: '入营', desc: '第一周落定条款、资助与工程小组。' },
      { title: '共建', desc: '8–12 周高强度联合开发与增长。' },
      { title: 'Demo Day 及之后', desc: '面向生态路演、锁定后续轮、终身校友网络。' },
    ],
  },
  portfolio: {
    eyebrow: '已投项目',
    title: '与 OMEGA 共同打造的项目',
    subtitle: '正在扩张 EOS 经济的团队掠影——示意性选取。',
    filterAll: '全部',
    aggregate: [
      { value: '$340M+', label: '校友累计融资' },
      { value: '$2.1B', label: '组合合计估值' },
      { value: '45+', label: '加速项目数' },
    ],
    companies: [
      { name: 'HelioDEX', category: 'DeFi', cohort: 'OMEGA 03', desc: 'EOS EVM 上的永续与现货 DEX。', stat: '$80M TVL' },
      { name: 'Vaulta RWA', category: '现实资产', cohort: 'OMEGA 03', desc: '代币化国债与私募信贷。', stat: '$120M 发行' },
      { name: 'Antimony', category: '基础设施', cohort: 'OMEGA 02', desc: 'Antelope 的索引与数据层。', stat: '12 亿次查询' },
      { name: 'Strata Pay', category: '支付', cohort: 'OMEGA 02', desc: '面向新兴市场的稳定币通道。', stat: '40 国' },
      { name: 'Forge Arena', category: '游戏', cohort: 'OMEGA 02', desc: 'EOS 上的链上竞技游戏。', stat: '21 万玩家' },
      { name: 'Sentinel AI', category: 'AI x 加密', cohort: 'OMEGA 01', desc: '链上 Agent 基础设施。', stat: '1.5 万 Agent' },
      { name: 'Lumen Lend', category: 'DeFi', cohort: 'OMEGA 01', desc: 'EOS 上的固定利率借贷市场。', stat: '$45M TVL' },
      { name: 'Meridian ID', category: '基础设施', cohort: 'OMEGA 03', desc: '链上身份与凭证认证。', stat: '30 万身份' },
      { name: 'Cobalt Pay', category: '支付', cohort: 'OMEGA 01', desc: '商户稳定币结算。', stat: '$60M 流水' },
    ],
  },
  mentors: {
    eyebrow: '导师与伙伴',
    title: '由真正交付过的人带路',
    subtitle: '与 EOS 生态内外的运营者、投资人与核心工程师并肩。',
    roles: ['协议工程师', '交易所创始人', '代币经济学家', '增长操盘手', '法务与合规', '机构投资人'],
  },
  testimonial: {
    quote:
      'OMEGA 是原型与协议的分水岭。工程支持加直连 EOS 核心团队，把一年压进了三个月。',
    author: '创始人',
    role: '旗舰营期项目',
  },
  faq: {
    eyebrow: '常见问题',
    title: '把问题讲清楚',
    items: [
      {
        q: '「官方认可」意味着什么？',
        a: 'EOS Network 官方授权的加速伙伴——为创始人直连核心团队、资助与基础设施。',
      },
      {
        q: '谁适合申请？',
        a: '在 EOS 上构建应用、基础设施或资本市场的团队——从想法到已有牵引力皆可。',
      },
      {
        q: '你们拿股权还是代币？',
        a: '因赛道而异。旗舰为标准投资，孵化以资助为主。细节在 offer 阶段沟通。',
      },
      {
        q: '是线上还是线下？',
        a: '远程为主，配可选峰会与线下 Demo Day。全球均可申请。',
      },
      {
        q: '下一期什么时候开营？',
        a: '常年滚动、每季度开营。随时可申请，优秀团队走快速通道。',
      },
    ],
  },
  finalCta: {
    eyebrow: '下一期营期',
    title: '你的项目，配得上终极舞台。',
    subtitle: '下一期 EOS OMEGA 营期已开放。带上你最有野心的想法。',
    primary: '申请入营',
    secondary: '与团队聊聊',
  },
  footer: {
    tagline: 'EOS Network 官方认可的加速器。',
    builtFor: '为 EOS 的建设者而建。',
    cols: [
      { title: '计划', links: ['关于', '加速计划', '流程', '已投项目', '申请'] },
      { title: '生态', links: ['EOS Network', 'exSat', '资助', '开发文档', '品牌素材'] },
      { title: '公司', links: ['团队', '洞察', '招聘', '媒体', '联系我们'] },
    ],
    rights: '保留所有权利。',
    legal: ['隐私', '条款', '披露'],
    disclaimer:
      'EOS OMEGA 加速器是一个加速计划。本网站任何内容均不构成投资建议或证券要约。',
  },
  apply: {
    eyebrow: '申请',
    title: '申请加入 EOS OMEGA',
    subtitle: '告诉我们你在 EOS 上构建什么。我们每周评审。',
    form: {
      name: '创始人姓名',
      email: '邮箱',
      project: '项目 / 公司',
      website: '官网或代码仓库',
      track: '赛道',
      trackOptions: ['孵化（种子前）', '旗舰加速（种子）', '规模化与上线（成长）'],
      stage: '当前阶段',
      stageOptions: ['想法', '原型', '已上线有用户', '已有收入 / 牵引力'],
      pitch: '你在构建什么？为什么是现在？',
      pitchPlaceholder: '问题、你在 EOS 上的方案，以及目前进展…',
      submit: '提交申请',
      note: '我们通常在 5 个工作日内回复。',
      success: '申请已收到，我们的团队会尽快与你联系。',
    },
  },
  aboutPage: {
    eyebrow: '关于 EOS OMEGA',
    title: '我们把 EOS 创始人送到终点线',
    intro:
      'EOS Network 官方认可的加速器。我们投资并陪跑生态中最有野心的团队。',
    missionTitle: '我们的使命',
    mission:
      '把有野心的创始人变成定义品类的项目，复利式壮大 EOS 经济。我们专为最后、最难的一公里而存在。',
    valuesTitle: '我们的信念',
    values: [
      { title: '建设者优先', desc: '创始人是主角，一切围绕他们的速度。' },
      { title: '资金必要但不充分', desc: '开支票最容易。工程与网络才会复利。' },
      { title: '生态高于自我', desc: 'EOS 上行托起每个项目。我们为整体优化。' },
      { title: '不停地交付', desc: '早期唯一护城河是势能。以交付的代码与真实用户衡量。' },
    ],
  },
  recognition: {
    badge: '官方认可',
    title: 'EOS 生态内被认可的加速器',
    statement:
      'EOS 生态被认可的加速伙伴——直连核心团队、资助框架，以及 EOS Native / EOS EVM 基础设施。',
    lockup: '认可伙伴',
    note: 'EOS 及相关标识归各自所有者所有。正式授权素材下发后替换此 lockup。',
  },
  cohort: {
    eyebrow: '下一期营期 · OMEGA 04',
    title: '申请已开放',
    subtitle: '常年滚动评审——通常 10 个工作日内出结果。',
    milestones: [
      { phase: '申请截止', date: '2026-08-15' },
      { phase: '面试', date: '2026-08 – 09' },
      { phase: '开营', date: '2026-10-06' },
      { phase: 'Demo Day', date: '2026-12-09' },
    ],
  },
  backers: {
    vcLabel: '顶级基金跟投与后续轮支持',
    vcs: ['Helios Capital', 'Antumbra Ventures', 'Meridian Digital', 'Lattice Capital', 'Northgate Crypto', 'Vertex Web3'],
    mediaLabel: '媒体报道',
    media: ['ChainWire', 'The Ledger', 'Block Daily', 'Decrypt Wire', 'Protocol Times'],
    note: '占位伙伴——替换为你真实的投资方、媒体报道与 logo。',
  },
  team: {
    eyebrow: '导师与团队',
    title: '真正大规模交付过的运营者',
    subtitle: '创始人将与发起过协议、交易所与 L1 的人一对一共事。',
    people: [
      { name: 'Marcus Lindqvist', role: '管理合伙人', org: '前 L1 基金会' },
      { name: 'Sofia Park', role: '风险合伙人', org: 'EOS DeFi 协议创始人' },
      { name: 'Daniel Osei', role: '工程负责人', org: 'Antelope / EOS VM' },
      { name: 'Yuki Tanaka', role: '代币经济学家', org: '机制设计' },
      { name: 'Elena Rossi', role: '增长合伙人', org: '前 Top-5 交易所' },
      { name: 'Omar Haddad', role: '法务与合规', org: '数字资产法律顾问' },
    ],
    note: '占位档案——替换为你真实的导师与团队。',
  },
  grants: {
    eyebrow: '生态资助',
    title: '不稀释股权的持续弹药',
    subtitle: '除了投资，还快速对接 EOS 生态资助——按里程碑发放、不碰股权。',
    items: [
      { name: '构建资助', amount: '最高 $250K', desc: '按里程碑发放，交付核心协议与产品。' },
      { name: '生态资助', amount: '最高 $100K', desc: '面向公共物品、工具与基础设施。' },
      { name: '增长资助', amount: '一事一议', desc: '上线后的联合营销与流动性支持。' },
    ],
    points: ['非稀释——不拿股权也不拿代币', '按里程碑解锁', '直连 EOS 资助委员会'],
    note: '资助金额为示意。最终条款以 EOS 资助框架为准。',
  },
  tokenLaunch: {
    eyebrow: '代币与上线',
    title: '从代币设计到上所那天',
    subtitle: '加密上线的最后一公里——打法与关系。',
    terms: {
      title: '透明的代币条款',
      body: '若你发币，OMEGA 以与股权相同的标准条款参与，事先用一份简单 side letter 写清。大多数团队从不发币。',
      points: ['标准、对创始人友好的条款', '没有任何"必须发币"的义务', '事先写清——绝无意外'],
    },
    support: {
      title: '发币前(pre-TGE)与上所支持',
      body: '走向 TGE 的团队，我们帮你干净地进入市场。',
      items: ['代币设计与经济模型审阅', '做市商引荐', '交易所与上所资源', '上线与流动性策略'],
    },
  },
  demoDay: {
    eyebrow: 'Demo Day',
    title: '项目一鸣惊人的舞台',
    subtitle: '每期营期以 Demo Day 收尾——面向会写下一张支票的基金与伙伴。',
    stats: [
      { value: '150+', label: '在场投资人与伙伴' },
      { value: '$3.5M', label: '结营后募资中位数' },
      { value: '终身', label: '校友网络权限' },
    ],
    points: ['精选的投资人与伙伴受众', '向 EOS 生态直播', '会后温暖的后续轮引荐'],
  },
  ecosystemPage: {
    eyebrow: '生态',
    title: '一个活跃生长的 EOS 经济体',
    subtitle: '专项赛道、活动、终身社区，以及全网招人的团队。',
  },
  tracks: {
    eyebrow: '联名专项赛道',
    title: '覆盖 EOS 前沿的专项赛道',
    subtitle: '与生态伙伴联合的专项赛道——和你所在领域的团队并肩共建。',
    items: [
      { name: 'EOS Native', tag: '旗舰', desc: '直接构建在 EOS Native / Antelope 上的应用与基础设施。' },
      { name: 'DeFi', tag: '资本市场', desc: 'EOS EVM 上的 DEX、借贷、衍生品与稳定币。' },
      { name: 'RWA', tag: '生态伙伴联名', desc: '代币化国债、信贷与现实资产。' },
      { name: 'AI × 加密', tag: '新兴', desc: '链上 Agent、推理市场与数据。' },
      { name: '支付', tag: '增长', desc: '稳定币通道、结算与商户工具。' },
      { name: '游戏与消费', tag: '消费', desc: '链上游戏、社交与消费应用。' },
    ],
    note: '赛道按营期与伙伴轮换。联名赛道在每期开营前公布。',
  },
  events: {
    eyebrow: '活动与黑客松',
    title: '生态相聚之处',
    subtitle: '黑客松、Demo Day 与峰会——让建设者成为社区。',
    items: [
      { type: '黑客松', name: 'OMEGA Build Sprint', date: '2026-09', location: '全球 · 线上', desc: '两周黑客松：想法到 MVP，优胜获资助。' },
      { type: 'Demo Day', name: 'OMEGA 04 Demo Day', date: '2026-12-09', location: '线上线下', desc: '第 04 期向基金、天使与伙伴路演。' },
      { type: '峰会', name: 'EOS 创始人峰会', date: '2027 Q1', location: '待定', desc: '线下，面向校友、导师与 EOS 核心团队。' },
      { type: '聚会', name: 'OMEGA Office Hours', date: '每月', location: '线上', desc: '与伙伴和导师的开放 AMA，人人可参加。' },
    ],
    cta: '查看全部活动',
  },
  community: {
    eyebrow: '社区与 DAO',
    title: '加入 OMEGA 创始人网络',
    subtitle: '终身网络——私密创始人论坛、校友 DAO 与 90+ 伙伴权益。',
    stats: [
      { value: '700+', label: '创始人与建设者' },
      { value: '90+', label: '伙伴权益与折扣' },
      { value: '24/7', label: '创始人论坛与支持' },
    ],
    channels: [
      { name: 'Discord', handle: '加入服务器', href: 'https://discord.com' },
      { name: 'Telegram', handle: 'OMEGA builders', href: 'https://telegram.org' },
      { name: 'X', handle: '@eosomega', href: 'https://x.com' },
      { name: '校友 DAO', handle: '治理与项目流', href: '#' },
    ],
    note: '占位链接——指向你真实的社区频道。',
  },
  jobs: {
    eyebrow: '被孵项目招聘',
    title: '生态正在招人',
    subtitle: 'OMEGA 已投项目的开放职位。',
    roles: [
      { role: '高级智能合约工程师', company: 'HelioDEX', location: '远程', tag: '工程' },
      { role: '协议研究员', company: 'Lumen Lend', location: '远程', tag: '研究' },
      { role: '增长负责人', company: 'Strata Pay', location: '新加坡 / 远程', tag: '增长' },
      { role: '前端工程师', company: 'Meridian ID', location: '远程', tag: '工程' },
      { role: '代币经济学家', company: 'Vaulta RWA', location: '远程', tag: '代币' },
      { role: 'DevRel 负责人', company: 'Antimony', location: '远程', tag: '社区' },
    ],
    cta: '发布职位',
    note: '占位职位——对接你真实的招聘板或 ATS。',
  },
  compliance: {
    eyebrow: '信任与合规',
    title: '一个受监管的实体，而不只是一个网站',
    intro:
      'EOS OMEGA Acceleration Inc. 已在 FinCEN（美国财政部金融犯罪执法网络）注册为货币服务业务（MSB），该机构监管在美国运营的货币转移与支付公司。',
    footerBadge: 'FinCEN MSB 已注册',
    recordLabel: 'FinCEN MSB 注册记录',
    fields: [
      { k: 'legal_name', v: 'EOS Omega Acceleration Inc.' },
      { k: 'registration_no', v: '31000333830770' },
      { k: 'registration_type', v: '首次注册 (Initial Registration)' },
      { k: 'jurisdiction', v: '美国加利福尼亚州' },
      {
        k: 'activities',
        v: '货币转移 · 外汇交易 · 汇票发行/销售 · 预付卡销售',
      },
      { k: 'states_covered', v: '覆盖全美各州及属地' },
      { k: 'authorized_date', v: '2026-06-24' },
    ],
    verifyTitle: '欢迎自行核实',
    verify:
      '取自 FinCEN 官方 MSB 查询系统。可在 fincen.gov 用注册号 31000333830770 核实——比起信我们，更希望你自己去查。',
    disclaimer:
      'MSB 注册是一项合规备案，不是政府认证或背书——FinCEN 不推荐、不批准、也不为任何注册为货币服务业务的公司背书。',
  },
};

export const content: Record<Lang, typeof en> = { en, zh };

export function getContent(lang: Lang) {
  return content[lang] ?? content.en;
}
