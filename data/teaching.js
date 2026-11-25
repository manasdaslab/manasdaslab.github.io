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
      heading: "This term (Spring-27)",
      courses: [
        {
          code: "CS 325",
          term: "Fall 2024 - Current",
          title: "Software Engineering",
          text: "Git, Container, Agile, Scrum, Testimg, UML, CI, Pattern(SOLID), etc.",
          links: []
        },
       /* {
          code: "CS 325",
          term: "Fall 2024 - Current",
          title: "Software Engineering",
          text: "Two lines on what the course covers and who it's for",
          links: [
            { label: "Syllabus", url: "https://example.com" },
            { label: "Slides", url: "https://example.com" },
            { label: "Assignments", url: "https://example.com" },
          ]
        }, */
        {
          code: "CS 425",
          term: "Fall 2024 - Current",
          title: "Software Design...",
          text: "A two semester long capstone project that facilitates students in completing client submitted projects.",
          links: []
        },
	{
          code: "CS 490",
          term: "Spring 2027",
          title: "Fundamentals of Data Science with AI",
          text: "Basics of Data Science",
          links: []	
	
	}
      ]
    },
    {
      heading: "Past courses",
      courses: [
        {
          code: "CS 499",
          term: "Fall 2026",
          title: "Software Implementation...",
          text: "The second half of capstone project, it facilitates students in completing client submitted projects.",
          links: []
        },
        {
          code: "CS 490",
          term: "Spring 2026",
          title: "Computation in Healthcare",
          text: "Basics of AI models viz: FCNN, CNN, Transformer. Basics of genomics and genome accessibility problem.",
          links: []
        },
        {
          code: "CS 234",
          term: "Fall 2024",
          title: "Database and Web System Development",
          text: "HTML, CSS, PHP, SQL",
          links: []
        },
      ]
    },
  ]
};
