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
      icon: "/assets/images/solutions/gwas/k8.svg",
    },
    {
      title: "HPC deployment with SLURM/SGE/equivalent scheduler",
      description:
        "Deployable in internal HPC clusters using any of the leading schedulers such as SLURM, SGE",
      icon: "/assets/images/solutions/gwas/cluster.svg",
    },
    {
      title: "Hail on Spark",
      description:
        "Leverages leading GWAS library, Hail (from Broad Institute), which in turn, leverages distributed data processing capabilities of Apache Spark",
      icon: "/assets/images/solutions/gwas/hail.png",
    },
    {
      title: "Jupyter notebooks",
      description:
        "Supports interactive use by scientists, via Jupyter notebooks",
      icon: "/assets/images/solutions/gwas/jupyter.svg",
    },
    {
      title: "Pre-Integrated",
      description:
        "Comes pre-integrated with leading open source libraries and tools such as VEP",
      icon: "/assets/images/solutions/gwas/integration.svg",
    },
    {
      title: "Services",
      description:
        "Complemented by a complete portfolio of service offerings which seamlessly integrate all the genomics and technology expertise needed",
      icon: "/assets/images/solutions/gwas/services.svg",
    },
  ],

  benefitsAlt: [
    {
      title: "Careful cohort selections",
      icon: "/assets/images/solutions/hubs/scale.png",
      description:
        "Understand mendelian violations in trios; prune variants in linkage disequilibrium; analyze genetic similarity between samples and compute sample scores and variant loadings using PCA",
    },
    {
      title: "Rich association studies",
      icon: "/assets/images/solutions/hubs/scale.png",
      description:
        "Perform variant, gene-burden and eQTL association analyses using linear, logistic, and linear mixed regression; estimate heritability",
    },
    {
      title: "Industrial strength",
      icon: "/assets/images/solutions/gwas/strength.svg",
      description:
        "Robust high-performance solution for your GWAS needs, that puts you firmly in control with minimal expense",
    },
    {
      title: "Access to expertise",
      icon: "/assets/images/solutions/gwas/expert.svg",
      description:
        "Augment the capacity available for setup and analysis with services from Aganitha",
    },
    {
      title: "Instant ignition",
      icon: "/assets/images/solutions/gwas/instant.svg",
      description: "Reduction in setup time from months to days",
    },
    {
      title: "Scalable",
      icon: "/assets/images/solutions/hubs/scale.png",
      description:
        "Elastically scale your deployment as your WES datasets grow in size",
    },
  ],
};
