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

  intro: "A short paragraph about the lab's research directions. Two or three sentences is plenty.",

  projects: [
    {
      id: "project-one",
      title: "Network Behaviour of GB10 over RoCE with LLM Inference",
      short: "Preliminary results on how commodity switch behave over 8 to 405 Billion LLM model",
      youtube: "",
      image: "images/research/pic3.jpg",
      text: "NVIDIA GB10 (DGX Spark): 128 GB Unified memory, fits on a desk. A few nodes can serve a hundreds of billion model in a lab. But how to connect them? buy the fastest fabric, use pipeline parallelism across nodes, which is standard datacenter habit. We tried to answer: For inference on a small cluster of GB10 machines connected by commodity Ethernet, what does the network actually do, and what does it actually need to be?",
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
        "We build an always-on, cross-layer telemetry system that diagnoses the causes across hardware, framework, storage, and network layers."
      ],
      authors: "Jayden Zebrowski, Manas J. Das",
      links: [
        { label: "Paper", url: "https://example.com" },
      ]
    },
    {
      id: "project-three",
      title: "Project three",
      short: "One or two lines that make someone want to open it.",
      youtube: "https://youtu.be/jNQXAC9IVRw",
      image: "",
      text: "A paragraph explaining the research.",
      authors: "Author One, Author Two, Author Three",
      links: []
    },
    {
      id: "project-four",
      title: "Project four",
      short: "One or two lines that make someone want to open it.",
      youtube: "https://www.youtube.com/watch?v=jNQXAC9IVRw",
      image: "images/research/project-04.jpg",
      text: "This one has a video and its own thumbnail picture.",
      authors: "Author One, Author Two",
      links: [
        { label: "GitHub", url: "https://github.com/" },
      ]
    },
    {
      id: "project-five",
      title: "Project five",
      short: "One or two lines that make someone want to open it.",
      youtube: "",
      image: "images/research/project-05.jpg",
      text: "A paragraph explaining the research.",
      authors: "Author One",
      links: []
    },
    {
      id: "project-six",
      title: "Project six",
      short: "One or two lines that make someone want to open it.",
      youtube: "https://www.youtube.com/watch?v=jNQXAC9IVRw",
      image: "",
      text: "A paragraph explaining the research.",
      authors: "Author One, Author Two",
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
     "files/papers/your-file.pdf".                                          */
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
  ]
};
