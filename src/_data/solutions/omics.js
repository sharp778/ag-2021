module.exports = {
  intro: [
    {
      main: "R&D Teams in biopharma have a critical dependency on timely availability of high quality insights from data. Satisfying this need has become challenging as multiple trends are converging to produce exponentially larger volumes of Omics data. For example: ",
      subPoints: [
        "Several public and private data providers are making datasets available in open and restricted ways",
        "Sequencing innovations are enabling telomere-to-telomere sequencing",
        "Human genome research is transitioning from a single reference to a pan genome reference",
        "Innovations in single cell and spatial transcriptomics producing fine-grained datasets",
      ],
    },
    {
      main: "More data is good provided we can process it all in a reasonable time frame. While several platforms exist to analyse large omics datasets, proprietary platforms are expensive for everyday R&D use, and open source platforms require extensive expertise to be deployed for industrial use.",
    },
  ],
  solution: {
    intro: [
      "An end to end  enterprise class, cloud hosted omics pipelining platform with a pre-packaged service offering for quick rollout and managed services for continuous use with the following components:",
    ],
    solutionPoints: [
      `Aganitha Omics Kube (AOK) on AWS/GCP/Azure/HPC`,
      `Hail and Cromwell (Open source state of art platforms for omics pipelines from Broad Institute)`,
      `Integrations with Illumina BaseSpace, PacBio SMRT Link, 10x Genomics Cell Ranger, Trans-Proteomic Pipeline from Institute for Systems Biology (Seattle)`,
      `APIs for integration with ELNs such as Benchling`,
    ],
  },
  solutionHighlights: [
    {
      title: "Proven performance",
      description:
        "Proven to scale well for processing vast data sets such as UK BioBank 500k WES dataset. Vertical integration and optimization help provide best in class performance when compared to other stacks we have tested with.",
      icon: "/assets/images/solutions/omics/performance.svg",
    },
    {
      title: "Cloud & HPC ready",
      description:
        "Compatible with any cloud provider supporting Kubernetes, including major vendors such as AWS, GCP and Azure.Compatible with classic HPC schedulers such as SLURM and SGE.",
      icon: "/assets/images/solutions/omics/cloud.svg",
    },
    {
      title: "Start quickly with predictable costs",
      description:
        "Pre-packaged service offering (PSO) for platform rollout alongside a full catalog of service offerings",
      icon: "/assets/images/solutions/omics/quick.svg",
    },
    {
      title: "Access to expertise",
      description:
        "Extensive domain and technical expertise brought by a cross-functional team to help you focus on science",
      icon: "/assets/images/solutions/omics/expert.svg",
    },
  ],
  benefits: [
    "Reduction in turnaround time from months to weeks and days for both internal and external analysis",
    "Reduction in cost per analysis and total cost of ownership",
    "Higher productivity of R&D teams armed by the comprehensive and timely availability of data",
    "One-stop solution for Omics analysis, e.g., GWAS, differential expression analysis, protein/metabolite identification, and more",
    "Inexpensive, scalable, and easy to use platform that ensures quick user adoption",
  ],
  benefitsAlt: [
    {
      title: "Cycle time reduction",
      icon: "/assets/images/solutions/omics/quick.svg",
      description:
        "Reduction in turnaround time from months to weeks and days for both internal and external analysis.",
    },
    {
      title: "Cost reduction",
      icon: "/assets/images/solutions/omics/reduce-cost.svg",
      description:
        "Reduction in cost per analysis and total cost of ownership.",
    },
    {
      title: "Higher R&D productivity",
      icon: "/assets/images/solutions/omics/increase.svg",
      description:
        "Higher productivity of R&D teams armed by the comprehensive and timely availability of data.",
    },
    {
      title: "Unified platform",
      icon: "/assets/images/solutions/omics/one-stop-solution.svg",
      description:
        "One-stop solution for Omics analysis, e.g., GWAS, differential expression analysis, protein/metabolite identification and more.",
    },
    {
      title: "Scale quickly",
      icon: "/assets/images/solutions/hubs/scale.png",
      description:
        "Inexpensive, scalable, and easy to use platform that ensures quick user adoption.",
    },
  ],
};
