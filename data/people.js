/* ==============================================================
   PEOPLE PAGE

   People show three per row, in the order written here.
   photo  square, 400 x 400 pixels, JPG, in images/people/
          Leave "" and the person's initials show in a circle instead.
   role   the small grey line under the name
   text   optional extra line. Leave "" for none.
   link   optional personal page. The name becomes a link.

   A group or subgroup with nobody in it is hidden automatically.
   ============================================================== */

window.PEOPLE = {

  intro: "",   // optional line under the title, e.g. "Interested in joining? Email us."

  groups: [
    {
      heading: "Current",
      subgroups: [
        {
          heading: "Graduate students",
          people: [
            { name: "Graduate student 1", photo: "images/people/person-01.jpg", role: "PhD student, since 2024", text: "Works on the first research direction.", link: "" },
            { name: "Graduate student 2", photo: "", role: "PhD student, since 2024", text: "Works on the second research direction.", link: "" },
            { name: "Graduate student 3", photo: "", role: "PhD student, since 2025", text: "", link: "" },
            { name: "Graduate student 4", photo: "", role: "MS student, since 2025", text: "Works on the third research direction.", link: "" },
            { name: "Graduate student 5", photo: "", role: "MS student, since 2025", text: "", link: "" },
            { name: "Graduate student 6", photo: "", role: "MS student, since 2026", text: "", link: "" },
          ]
        },
        {
          heading: "Undergraduate students",
          people: [
            { name: "Undergraduate 1", photo: "", role: "Your major, 2027", text: "Project title.", link: "" },
            { name: "Undergraduate 2", photo: "", role: "Your major, 2027", text: "", link: "" },
            { name: "Undergraduate 3", photo: "", role: "Your major, 2028", text: "", link: "" },
          ]
        },
      ]
    },
    {
      heading: "Alumni",
      subgroups: [
        {
          heading: "Graduate",
          people: [
            { name: "Alumna 1", photo: "", role: "PhD, 2025", text: "Now at a company or university.", link: "" },
            { name: "Alumnus 2", photo: "", role: "MS, 2024", text: "Now at a company or university.", link: "" },
            { name: "Alumna 3", photo: "", role: "MS, 2023", text: "", link: "" },
          ]
        },
        {
          heading: "Undergraduate",
          people: [
            { name: "Alumnus 4", photo: "", role: "BS, 2025", text: "Now at a company or university.", link: "" },
            { name: "Alumna 5", photo: "", role: "BS, 2024", text: "", link: "" },
          ]
        },
      ]
    },
  ]
};
