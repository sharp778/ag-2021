module.exports = {
  banner: {
    title: "Knowledge Hubs",
    subtitle:
      "AI-powered curation of fast-evolving R&D insights and Competitive landscape.",
  },
  intro: [
    ` Are Google searches yielding poor results for your scientific queries?`,
    "Are Pubmed searches and alerts producing too many results you don’t have time to dig through?",
    ` Do you find it difficult to keep track of and mine insights from clinical trial designs and readouts of competitors and partners?`,
    `If yes, you are not alone.`,

    `High-throughput science (HTS) is producing knowledge and insights at a pace that is not easy to keep up with, even for specialists. COVID has also resulted in a big spike of investments into biopharma ventures, resulting in a very competitive marketplace. Winners of this era will be those who learn how to systematically tackle these challenges.`,
  ],
  solution: {
    intro: [
      `Aganitha Knowledge Hubs leverage AI to tackle the challenges of information and data overload, providing automatically and continuously curated solutions for the following subject areas.`,
    ],
    solutionPoints: [
      "Competitive intelligence covering: Investments, Financials, Product and tech announcements, pre-clinical and clinial trial designs, progress and readouts, regulatory applicatoins and actions, IP filings and grants, partnerships, and supply chain intelligence.",
      "Research and Clinical data specific to disease areas (such as Oncology and rare diseases) and  therapeutic categories (such as cell and gene therapies, RNA therapies, mAbs, vaccines and adjuvants) covering: Published research and preprints, conference presentations and transcripts, public datasets, patent applications and grants, news releases, tweets, other social media posts announcing trials, results, applications, approvals and other regulatory actions.",
      "Master data services to disambiguate, resolve and integrate: interventions, indications, studies and organizations",
    ],
    diagram: "/assets/images/solutions/hubs/solution.png",
  },

  solutionHighlights: [
    {
      title: "Aganitha Knowledge Machine",
      description: `Continuously crawling, mining, identifying, resolving, and linking biopharma entities into integrated knowledge graphs (KG)`,
      icon: "/assets/images/solutions/hubs/akm.svg",
    },
    {
      title: "Public data augmenting proprietary data",
      description: `Combining public data with private data, with clear data provenance and data quality checks`,
      icon: "/assets/images/solutions/hubs/big-data.svg",
    },
    {
      title: `Trial design analysis`,
      description: `Comparative analysis of endpoints, arm designs, inclusion/exclusion criteria, site selections and readouts to generate usable insights`,
      icon: "/assets/images/solutions/hubs/trial.svg",
    },
    {
      title: `Real-time alerts and personalization`,
      description: `Topic specific real-time alerts to call attention to developments that require attention and follow-up`,
      icon: "/assets/images/solutions/hubs/time.svg",
    },
    {
      title: `State of the art technology and data architecture
      `,
      description: `Built with Knowledge Graph (KG), NLP, API, Visualization, and UI platforms deployable using Infra-as-code approach on any cloud supporting Kubernetes`,
      icon: "/assets/images/solutions/hubs/diagram.svg",
    },
    {
      title: `Specialization on demand`,
      description: `Easily customizable to focus on an area of specialty, meeting specific needs of a team/audience`,
      icon: "/assets/images/solutions/hubs/customize.svg",
    },
  ],
  benefits: [
    "Build multiple disease hubs focusing on Covid-19, Oncology, Alzheimer’s, Immunology, Hepatitis, Rare diseases, and more",
    "Mine and organize public information in an easily consumable format",
    "Derive valuable insights on competitive intelligence for informed decision making across functions",
    "Scalable, reusable, and repeatable solution for large scale information consumption and collation",
    "Latest updates from research and market landscape with zero incremental resource deployment cost",
  ],
  benefitsAlt: [
    {
      title: "Mine information",
      icon: "/assets/images/solutions/hubs/mine.png",
      description:
        "Discover, mine, integrate and leverage fast-growing public data sources without significant additional expense on IT.",
    },
    {
      title: "Derive insights",
      icon: "/assets/images/solutions/hubs/derive.png",
      description:
        "Derive valuable insights from emerging research and trial data to improve your  trial designs.",
    },
    {
      title: "Scale",
      icon: "/assets/images/solutions/hubs/scale.png",
      description:
        "Scale your competitive intelligence gathering without adding headcount.",
    },
  ],
};
