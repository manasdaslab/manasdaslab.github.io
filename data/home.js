/* ==============================================================
   HOME PAGE

   The order in each list is the order on the page.
   To move something, cut its whole { ... }, block and paste it
   where you want it.

   Inside any text you can write:
     **two stars**              -> bold
     [link text](https://...)   -> a link
   ============================================================== */

window.HOME = {

  // The paragraph next to your photo. Two or three sentences reads best.
  intro: "MANAS Lab: Multidisciplinary AI, Networking, Architecture, Systems ?",


  /* ---------- Photo strip ----------
     Three photos sit side by side. The first three in this list show first.
     Every few seconds one of them changes to the next photo in the list,
     left to right, and the list starts again at the end.

     Size: square, 900 x 900 pixels, JPG, under 250 KB each.
     Put the files in images/slideshow/
     "alt" is a short description for people who can't see the photo.       */
  photos: [
    { src: "images/slideshow/photo-01.jpg", alt: "" },
    { src: "images/slideshow/photo-02.jpg", alt: "" },
    { src: "images/slideshow/photo-03.jpg", alt: "" },
    { src: "images/slideshow/photo-04.jpg", alt: "" },
    { src: "images/slideshow/photo-05.jpg", alt: "" },
    { src: "images/slideshow/photo-06.jpg", alt: "" },
    { src: "images/slideshow/photo-07.jpg", alt: "" },
    { src: "images/slideshow/photo-08.jpg", alt: "" },
    { src: "images/slideshow/photo-09.jpg", alt: "" },
  ],
  photoMode: "one-at-a-time",   // or "all-together" to change all three at once
  photoSeconds: 4,              // seconds between changes


  /* ---------- Highlights: six tiles, three per row ----------
     kind:  the small word in the corner, e.g. "Research" or "Product"
     icon:  a small square picture, 160 x 160 pixels, in images/highlights/
     link:  where "Learn more" goes. To open a project or product directly,
            write the page, then #, then that item's id from
            data/research.js or data/products.js.                          */
  highlights: [
    {
      kind: "Research",
      icon: "images/highlights/highlight-01.jpg",
      title: "Network Behaviour of GB10 over RoCE with LLM Inference",
      text: "Preliminary results on how commodity switch behave over 8 to 405 Billion LLM model",
      link: "research.html#project-one"
    },
    {
      kind: "Product",
      icon: "images/highlights/highlight-02.jpg",
      title: "VR/MR Visualization of Dental Anatomy",
      text: "Multi-user visualization of various dental anatomy in collaboration with the School of Dental",
      link: "products.html#product-one"
    },
    {
      kind: "Research",
      icon: "images/highlights/highlight-03.jpg",
      title: "Efficiently Monitoring Massive Data Center Resources. ",
      text: "Bridging the Observability Gap in Distributed AI Training/Interface",
      link: "research.html#project-two"
    },
    {
      kind: "Research",
      icon: "images/highlights/highlight-04.jpg",
      title: "Impact of Quantization in Medical Images Analysis",
      text: "Evaluating the Novelty of Low-Precision Inference in Medical Image Analysis",
      link: "research.html#project-three"
    },
    {
      kind: "Product",
      icon: "images/highlights/highlight-05.jpg",
      title: "A VR Barn task Simulation for St. Louis WildCare Park",
      text: "A task-based VR simulation to make the public aware of the different chores a barn keeper has to do.",
      link: "products.html#product-two"
    },
    {
      kind: "Research",
      icon: "images/highlights/highlight-06.jpg",
      title: "Multi-Objective Autonomous Network Management",
      text: "An AI model for network management using topology and traffic flow embeddings",
      link: "products.html#product-three"
    },
  ],


  /* ---------- News ----------
     Put the newest item at the top.
     "link" is optional. Leave it "" when there's nothing to link to.       */
  newsShown: 6,   // how many items show before the "Show all news" button
  news: [
    { date: "November 2026", text: "Presented paper on Network Behaviour of GB10 over RoCE with LLM Inference", link: "" },
    { date: "November 2026", text: "The VR team visted St. Louis WildCare Park and “almost” completed the project handover", link: "" },
    { date: "October 2026", text: "The VR team visited School of Dental", link: "" },
    { date: "October 2026", text: "Showcase: VR Dental Anatomy and in-house LLM Inference chatbot at SIU Technology & Innovation Expo"},
    { date: "September 2026", text: "Showcase: Efficiently Monitoring Massive Data Center Resources at NFS Workshop, Washington, D.C.", link: ""},
    { date: "June 2026", text: "Visited CVPR-2026, Denver, Colorado", link: "" },
  ]
};
