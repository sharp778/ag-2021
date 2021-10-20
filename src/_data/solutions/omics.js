module.exports = {
  intro: [
    {
      main: "R&D Teams in biopharma have a critical dependency on timely availability of high quality data. Satisfying this need poses a challenge as the volume of data to process is increasing exponentially.",
      subPoints: [
        "Several public and private data providers are making datasets available in open and restricted ways",
        "Sequencing innovations are driving telomere-to-telomere sequencing",
        "Transition from single reference to pan genome reference",
        "Innovations in single cell and spatial transcriptomics",
      ],
    },
    {
      main: "While several platforms exist to address the needs of omics data analysis, proprietary platforms are expensive for everyday R&D use, and open source platforms require extensive expertise to be deployed for industrial use.",
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
      background: "bg-red-100",
    },
    {
      title: "Cloud & HPC ready",
      description:
        "Compatible with any cloud provider supporting Kubernetes, including major vendors such as AWS, GCP and Azure.Compatible with classic HPC schedulers such as SLURM and SGE.",
    },
    {
      title: "Start quickly with predictable costs",
      description:
        "Pre-packaged service offering (PSO) for platform rollout alongside a full catalog of service offerings",
    },
    {
      title: "Access to expertise",
      description:
        "Extensive domain and technical expertise brought by a cross-functional team to help you focus on science",
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
      title: "Analyse Quickly",
      icon: "/assets/images/solutions/hubs/mine.png",
      description:
        "Reduction in turnaround time from months to weeks and days for both internal and external analysis.",
    },
    {
      title: "Reduce your costs",
      icon: "/assets/images/solutions/hubs/derive.png",
      description:
        "Reduction in cost per analysis and total cost of ownership.",
    },
    {
      title: "Increase productivity",
      icon: "/assets/images/solutions/hubs/scale.png",
      description:
        "Higher productivity of R&D teams armed by the comprehensive and timely availability of data.",
    },
    {
      title: "One-stop Solution",
      icon: "/assets/images/solutions/hubs/scale.png",
      description:
        "One-stop solution for Omics analysis, e.g., GWAS, differential expression analysis, protein/metabolite identification and more.",
    },
    {
      title: "Scale Quickly",
      icon: "/assets/images/solutions/hubs/scale.png",
      description:
        "Inexpensive, scalable, and easy to use platform that ensures quick user adoption.",
    },
  ],
};
