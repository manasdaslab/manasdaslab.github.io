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
      title: "Project one",
      short: "One or two lines that make someone want to open it.",
      youtube: "https://www.youtube.com/watch?v=jNQXAC9IVRw",
      image: "",
      text: "A paragraph explaining the research: the question, what you did, and what came out of it. Four to six lines reads well here.",
      authors: "Author One, **Your Name**, Author Three",
      links: [
        { label: "GitHub", url: "https://github.com/" },
        { label: "Project page", url: "https://example.com" },
      ]
    },
    {
      id: "project-two",
      title: "Project two",
      short: "One or two lines that make someone want to open it.",
      youtube: "",
      image: "images/research/project-02.jpg",
      text: [
        "This project has a picture instead of a video, and two paragraphs.",
        "The second paragraph starts here."
      ],
      authors: "Author One, Author Two",
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
