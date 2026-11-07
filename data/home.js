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
  intro: "MANAS Lab studies [your field]. Replace this with two or three plain sentences about the questions you work on and why they matter.",


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
      title: "Research highlight one",
      text: "One or two lines on why this is worth a look.",
      link: "research.html#project-one"
    },
    {
      kind: "Product",
      icon: "images/highlights/highlight-02.jpg",
      title: "Product highlight one",
      text: "One or two lines on why this is worth a look.",
      link: "products.html#product-one"
    },
    {
      kind: "Research",
      icon: "images/highlights/highlight-03.jpg",
      title: "Research highlight two",
      text: "One or two lines on why this is worth a look.",
      link: "research.html#project-two"
    },
    {
      kind: "Research",
      icon: "images/highlights/highlight-04.jpg",
      title: "Research highlight three",
      text: "One or two lines on why this is worth a look.",
      link: "research.html#project-three"
    },
    {
      kind: "Product",
      icon: "images/highlights/highlight-05.jpg",
      title: "Product highlight two",
      text: "One or two lines on why this is worth a look.",
      link: "products.html#product-two"
    },
    {
      kind: "Product",
      icon: "images/highlights/highlight-06.jpg",
      title: "Product highlight three",
      text: "One or two lines on why this is worth a look.",
      link: "products.html#product-three"
    },
  ],


  /* ---------- News ----------
     Put the newest item at the top.
     "link" is optional. Leave it "" when there's nothing to link to.       */
  newsShown: 6,   // how many items show before the "Show all news" button
  news: [
    { date: "Nov 2026", text: "A news item, in one line: a paper accepted, a talk, someone joining.", link: "https://example.com", linkLabel: "Read more" },
    { date: "Oct 2026", text: "A news item without a link.", link: "" },
    { date: "Sep 2026", text: "A longer news item. It wraps onto a second line and the date stays in its own column.", link: "https://example.com", linkLabel: "Read more" },
    { date: "Aug 2026", text: "Welcome to our new PhD student, **Graduate student 4**.", link: "" },
    { date: "Jun 2026", text: "Our paper was presented at [Conference name](https://example.com).", link: "" },
    { date: "May 2026", text: "Another news item.", link: "https://example.com", linkLabel: "Slides" },
    { date: "Mar 2026", text: "Older items stay hidden until someone presses Show all news.", link: "" },
  ]
};
