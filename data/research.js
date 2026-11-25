/* ==============================================================
   RESEARCH PAGE

   ORDER: the grid fills left to right, two per row.
   Project 1 and 2 are the first row, 3 and 4 the second, and so on.
   To reorder, cut a whole { ... }, block and paste it elsewhere.

   EACH PROJECT
   id       short name, lowercase, no spaces. Used for links such as
            research.html#project-one (the highlights on the home page use it).
   title    shown on the small panel and the open one
   short    one or two lines on the small panel
   youtube  a YouTube link. Leave "" if there's no video.
   image    a picture, 1600 x 900 pixels, in images/research/
            With a video, this picture replaces YouTube's thumbnail.
            Without a video, it's shown when the panel opens.
   text     the paragraph shown when the panel opens.
            For two paragraphs, write ["First paragraph.", "Second paragraph."]
   authors  names, e.g. "A. Author, **Your Name**, C. Author"
   links    buttons under the text. Leave [] for none.
   ============================================================== */

window.RESEARCH = {

  intro: "We are HBMble (read humble: HBM + humble) AI researcher. Currently, we are leveraging a smaller unified memory architecture to extend our knowledge of its limitations and capabilities regarding LLM and other practical AI applications.",

  projects: [
    {
      id: "project-one",
      title: "Network Behaviour of GB10 over RoCE with LLM Inference",
      short: "Preliminary results on how commodity switch behave over 8 to 405 Billion LLM model",
      youtube: "",
      image: "images/research/pic3.jpg",
      text: [ "NVIDIA GB10 (DGX Spark): 128 GB Unified memory, fits on a desk. A few nodes can serve a hundreds of billion model in a lab. But how to connect them? buy the fastest fabric, use pipeline parallelism across nodes, which is standard datacenter habit. We tried to answer: For inference on a small cluster of GB10 machines connected by commodity Ethernet, what does the network actually do, and what does it actually need to be?",
	"Supercomputing 2026, Chicago", 
	"This work is supported by Center for Crime Science and Violence Prevention (CCSVP)"],
      authors: "**Manas J Das**",
      links: [
        { label: "GitHub", url: "https://github.com/" },
        { label: "Project page", url: "https://example.com" },
      ]
    },
    {
      id: "project-two",
      title: "Efficiently Monitoring Massive Data Center Resources",
      short: "Bridging the Observability Gap in Distributed AI Training/Interface",
      youtube: "",
      image: "images/research/pic5.jpg",
      text: [
        "Modern distributed AI training (DDP, FSDP, TP/PP) relies on synchronous communication: meaning a small stall on a single rank(node) serializes the entire cluster. Today, labs face a trade-off: hardware dashboards (DCGM) show when a GPU is idle but not why, while deep profilers (Nsight, PyTorch Profiler) explain everything but carry a prohibitive 20–40% overhead. Consequently, labs run blind, spot issues days late, and waste expensive GPU hours.",
        "We build an always-on, cross-layer telemetry system that diagnoses the causes across hardware, framework, storage, and network layers.",
	"Demo: Washington, D.C."
      ],
      authors: "Jayden Zebrowski, Manas J. Das",
      links: [
        { label: "Paper", url: "https://example.com" },
      ]
    },
    {
      id: "project-three",
      title: "An Analytical model for Distributed LLM Decoding on Edge Device",
      short: "A mathematical model to model the LLM inference Decode and Prefill Step",
      youtube: "",
      image: "images/research/pic2.jpg",
      text: [ "This is an ongoing research",
	"This work is supported by Center for Crime Science and Violence Prevention (CCSVP)"
	],
      authors: "Manas J. Das, Jacob Geisen, Jordan Jones",
      links: []
    },
    {
      id: "project-four",
      title: "Impact of Quantization in Medical Images Analysis",
      short: "Evaluating the Novelty of Low-Precision Inference in Medical Image Analysis",
      youtube: "",
      image: "images/research/pic4.jpg",
      text: "This is an ongoing research",
      authors: "Reza K. Kashkoul, Manas J. Das",
      links: [
        { label: "GitHub", url: "https://github.com/" },
      ]
    },
    {
      id: "project-five",
      title: "Multi-Objective Autonomous Network Management",
      short: "An AI model for network management using topology and traffic flow embeddings",
      youtube: "",
      image: "images/research/pic1.jpg",
      text: "This is an ongoing research",
      authors: "Manas J. Das, Susmit Shannigrahi",
      links: []
    },
    {
      id: "project-six",
      title: "Untitled",
      short: "In next couple of months",
      youtube: "https://www.youtube.com/watch?v=jNQXAC9IVRw",
      image: "images/research/project-02.jpg",
      text: "Still in incubation phase",
      authors: "Manas J. Das",
      links: [
        { label: "Project page", url: "https://example.com" },
      ]
    },
  ],


  /* ---------- Papers ----------
     Shown in this order. Newest first usually reads best.
     Put **two stars** around lab members' names to make them bold.
     links: buttons such as PDF, Code, Video. Leave [] for a paper with no links.
     A PDF you host yourself goes in files/papers/ and its url is
     "files/papers/your-file.pdf".                                          
  papers: [
    {
      title: "Paper title goes here",
      authors: "A. Author, **Your Name**, C. Author",
      venue: "Journal or conference name, 2026",
      links: [
        { label: "PDF", url: "https://example.com" },
        { label: "Code", url: "https://github.com/" },
      ]
    },
    {
      title: "A longer paper title that wraps onto a second line, while its buttons stay on the right",
      authors: "A. Author, **Your Name**",
      venue: "Journal name, 2025",
      links: [
        { label: "PDF", url: "https://example.com" },
      ]
    },
    {
      title: "A paper with no links yet",
      authors: "**Your Name**, B. Author, C. Author, D. Author",
      venue: "Conference name, 2025",
      links: []
    },
    {
      title: "Paper title goes here",
      authors: "A. Author, B. Author",
      venue: "Journal name, 2024",
      links: [
        { label: "PDF", url: "https://example.com" },
        { label: "Code", url: "https://github.com/" },
        { label: "Video", url: "https://www.youtube.com/watch?v=jNQXAC9IVRw" },
      ]
    },
  ] */
papers: [
{
    title: "Characterizing Network Behavior of Distributed LLM Inference on a Four Node Edge Cluster",
    authors: "**M. J. Das**",
    venue: "Proceedings of the SC '26 Workshops of the International Conference for High Performance Computing, Networking, Storage and Analysis, 2026",
    links: [
      { label: "DOI(Soon)", url: "https://dl.acm.org" }
    ]
  },  
{
    title: "Beyond Siloed Systems: Network State Embeddings for Autonomous Networking",
    authors: "S. Timilsina, **M. J. Das**, S. Shannigrahi",
    venue: "35th International Conference on Computer Communications and Networks (ICCCN), 2026",
    links: [
      { label: "DOI", url: "https://doi.org/10.1109/ICCCN69946.2026.11662913" }
    ]
  },
  {
    title: "A Dataset of Network Traffic Collected During Large-Scale Human Genome Sequence Analysis",
    authors: "**M. J. Das**, K. Shehzad, P. Rao",
    venue: "IEEE DataPort, 2025",
    links: [
      { label: "DOI", url: "https://doi.org/10.21227/Y0T5-1W13" }
    ]
  },
  {
    title: "Impact of the Networking Infrastructure on the Performance of Variant Calling on Human Genomes in Commodity Clusters",
    authors: "**M. J. Das**, P. Rao, L. Xu",
    venue: "Proceedings of the 15th ACM International Conference on Bioinformatics, Computational Biology and Health Informatics (BCB), 2024",
    links: [
      { label: "DOI", url: "https://doi.org/10.1145/3698587.3701354" }
    ]
  },
  {
    title: "A Scalable Tool for Democratizing Variant Calling on Human Genomes Using Commodity Clusters",
    authors: "K. Shehzad, A. Kumar, M. Schutz, C. Webb, P. Nalela, **M. J. Das**, P. Rao",
    venue: "Proceedings of the 33rd ACM International Conference on Information and Knowledge Management (CIKM), 2024",
    links: [
      { label: "DOI", url: "https://doi.org/10.1145/3627673.3679221" }
    ]
  },
  {
    title: "Efficient Variant Calling on Human Genome Sequences Using a GPU-Enabled Commodity Cluster",
    authors: "**M. J. Das**, K. Shehzad, P. Rao",
    venue: "Proceedings of the 32nd ACM International Conference on Information and Knowledge Management (CIKM), 2023",
    links: [
      { label: "DOI", url: "https://doi.org/10.1145/3583780.3615268" }
    ]
  },
  {
    title: "Multiscale Anisotropic Morlet Wavelet for Texture Classification of Interstitial Lung Diseases",
    authors: "**M. J. Das**, L. B. Mahanta",
    venue: "International Conference on Artificial Intelligence and Data Engineering (AIDE), 2019",
    links: [
      { label: "DOI", url: "https://doi.org/10.1007/978-981-15-3514-7_88" }
    ]
  },
  {
    title: "Design and Analysis of an Isotropic Wavelet Features-Based Classification Algorithm for Adenocarcinoma and Squamous Cell Carcinoma of Lung Histological Images",
    authors: "**M. J. Das**, L. B. Mahanta",
    venue: "International Conference on Pattern Recognition and Machine Intelligence (PReMI), 2019",
    links: [
      { label: "DOI", url: "https://doi.org/10.1007/978-3-030-34872-4_6" }
    ]
  },
]
};
