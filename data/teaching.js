/* ==============================================================
   TEACHING PAGE

   Groups show in this order, and courses inside each group too.
   Course files you host yourself (syllabus PDFs, slides) go in
   files/teaching/ and their url is "files/teaching/your-file.pdf".
   ============================================================== */

window.TEACHING = {

  intro: "A line or two about what you teach. Each course has its materials linked beside it.",

  groups: [
    {
      heading: "This term",
      courses: [
        {
          code: "COURSE 101",
          term: "Fall 2026",
          title: "Course title",
          text: "Two lines on what the course covers and who it's for.",
          links: [
            { label: "Syllabus", url: "https://example.com" },
            { label: "Slides", url: "https://example.com" },
            { label: "Assignments", url: "https://example.com" },
          ]
        },
        {
          code: "COURSE 202",
          term: "Fall 2026",
          title: "Course title",
          text: "Two lines on what the course covers and who it's for.",
          links: [
            { label: "Syllabus", url: "https://example.com" },
          ]
        },
      ]
    },
    {
      heading: "Past courses",
      courses: [
        {
          code: "COURSE 303",
          term: "Spring 2026",
          title: "Course title",
          text: "Two lines on what the course covers.",
          links: [
            { label: "Materials", url: "https://example.com" },
          ]
        },
      ]
    },
  ]
};
