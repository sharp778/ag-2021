module.exports = {
  intro: [
    {
      main: "Genome wide association studies (GWAS) are both a science and an art - no two studies are the same and cohorts need to be carefully designed. However, streamlining GWAS with a platform based approach can improve efficiencies and avoid recurring challenges. These include:",
      subPoints: [
        "Standing up the infra and tech stacks needed: IT teams still take months to get the setup right even in this age of cloud computing as the expertise required cuts across many disciplines",
        "Scaling tech stack to handle ever-expanding datasets: UK Biobank WES dataset currently provides 300k sequences and is growing further",
        "Consistently applying best-practice checks for Sample and Variant QC, and screening for relatedness and other sampling biases",
        "Joining with a number of reference databases such as GNOMAD for allele frequencies and ClinVar for known consequences and impact",
        "Interactive visualization of sequence data, phenotype data and study results: This is a challenge given the size of sequence data and variety of phenotypic data",
      ],
    },
  ],
  solution: {
    intro: ["Aganitha provides a proven platform for GWAS, that is:"],
    solutionPoints: [
      `Available on-demand, powered by Infrastructure as code approach, supporting both in-house HPC as well as all Cloud based clusters`,
      `Cost-effective, without dependence on expensive proprietary big data stacks and services`,
      `Vertically integrated to provide industry leading performance`,
      `Comprehensive, spanning all activities from data ingestion to QC, cohort selection, regression and visualization`,
      `Interactive, enabling scientists to inspect and apply Sample and Variant QCs, and carefully design study cohorts`,
      `Pre-integrated with commonly needed reference datasets, annotation and visualization tools`,
      `Complemented by a complete portfolio of service offerings from Aganitha which seamlessly integrate all the genomics and technology expertise needed`,
    ],
  },
  solutionHighlights: [
    {
      title: "Kubernetes",
      description:
        "Easily deployable in any cloud that supports Kubernetes, including AWS/GCP/Azure",
      background: "bg-red-100",
    },
    {
      title: "HPC deployment with SLURM/SGE/equivalent scheduler",
      description:
        "Deployable in internal HPC clusters using any of the leading schedulers such as SLURM, SGE",
    },
    {
      title: "Hail on Spark",
      description:
        "Leverages leading GWAS library, Hail (from Broad Institute), which in turn, leverages distributed data processing capabilities of Apache Spark",
    },
    {
      title: "Jupyter notebooks",
      description:
        "Supports interactive use by scientists, via Jupyter notebooks",
    },
    {
      title: "Pre-Integrated",
      description:
        "Comes pre-integrated with leading open source libraries and tools such as VEP",
    },
    {
      title: "Services",
      description:
        "Complemented by a complete portfolio of service offerings which seamlessly integrate all the genomics and technology expertise needed",
    },
  ],
  benefits: [
    "Understand Mendelian violations in trios, prune variants in linkage disequilibrium, analyze genetic similarity between samples, and compute sample scores and variant loadings using PCA",
    "Perform variant, gene-burden and eQTL association analyses using linear, logistic, and linear mixed regression, and estimate heritability",
    "Reusability of tools saving time to rewrite from scratch and regeneratable results for future",
    "Ability to use scalable cloud computing without learning about nitty gritty details",
    "Caching of runs saving computational cost",
  ],
  benefitsAlt: [
    {
      title: "High Performance",
      icon: "/assets/images/solutions/hubs/mine.png",
      description:
        "Robust high-performance solution for your GWAS needs, that puts you firmly in control with minimal expense",
    },
    {
      title: "Setup Quickly",
      icon: "/assets/images/solutions/hubs/derive.png",
      description: "Reduction in setup time from months to days",
    },
    {
      title: "Scale Elastically",
      icon: "/assets/images/solutions/hubs/scale.png",
      description:
        "Elastically scale your deployment as your WES datasets grow in size",
    },
    {
      title: "Integrate with other services",
      icon: "/assets/images/solutions/hubs/scale.png",
      description:
        "Augment the capacity available for setup and analysis with services from Aganitha",
    },
    {
      title: "Understand mendelian violations",
      icon: "/assets/images/solutions/hubs/scale.png",
      description:
        "Understand mendelian violations in trios; prune variants in linkage disequilibrium; analyze genetic similarity between samples and compute sample scores and variant loadings using PCA",
    },
    {
      title: "Leverage all types of regression models",
      icon: "/assets/images/solutions/hubs/scale.png",
      description:
        "Perform variant, gene-burden and eQTL association analyses using linear, logistic, and linear mixed regression; estimate heritability",
    },
  ],
};
