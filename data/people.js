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
            { name: "Jayden Zebrowski", photo: "images/people/jayden.jpg", role: "Research Assistant", text: "Monitoring GPU with ebpf and kernal calls", link: "" },
            { name: "Reza K. Kashkoul", photo: "images/people/reza.jpg", role: "Master's Thesis", text: "Model quantization, medical images, MIL", link: "" },
            { name: "Jacob Geisen", photo: "images/people/jacob.jpg", role: "Master's Thesis", text: "Efficient LLM model configuration, Nvidia Grace Blackwell GB10", link: "" },
            { name: "Braden Kapp", photo: "images/people/braden.jpg", role: "VR/MR Developer", text: "Building 3D models and VR simulation for Dental School, etc.", link: "" },
          ]
        },
        {
          heading: "Undergraduate students",
          people: [
            { name: "Andrea Klostermann", photo: "images/people/andrea.jpg", role: "VR/MR Developer", text: "Building 3D models and VR simulation for Dental School, etc.", link: "" },
            { name: "Jordan Jones", photo: "images/people/jones.jpg", role: "UG Research Assistant", text: "Efficient LLM model configuration, Nvidia Grace Blackwell GB10", link: "" },
            { name: "Kushith V. Konidela", photo: "images/people/kushith.jpg", role: "UG Research Assistant", text: "Monitoring Distributed AI models in clusters", link: "" },
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
            { name: "Killian Lelong", photo: "", role: "Master's Project", text: "Airport Resturant Recommendation Engine", link: "" },
            { name: "Stewart Nathaniel", photo: "", role: "Master's Project", text: "Big Data Efficient Algorithm", link: "" },
          ]
        },
        {
          heading: "Undergraduate",
          people: [
            { name: "John Doe", photo: "", role: "BS, 2027", text: "", link: "" },
            { name: "John Doe", photo: "", role: "BS, 2027", text: "", link: "" },
          ]
        },
      ]
    },
  ]
};
