/* ==============================================================
   PRODUCTS PAGE

   Same grid as Research: two per row, in this order.
   Clicking a product opens it under its row: a big video or picture,
   the overview paragraph under it, a Learn more button and Close.

   EACH PRODUCT
   id         short name, lowercase, no spaces (products.html#product-one)
   title      the product's name
   short      one or two lines on the small panel
   youtube    a YouTube link, or "" for none
   image      a picture, 1600 x 900 pixels, in images/products/
              With a video, it replaces YouTube's thumbnail.
   text       the overview paragraph under the big video or picture.
              For two paragraphs: ["First.", "Second."]
   more       the details page "Learn more" opens, e.g. "products/my-tool.html".
              Leave "" for no Learn more button.
   moreLabel  the button's text if you want something other than "Learn more"
   links      extra buttons, e.g. GitHub. Leave [] for none.
   ============================================================== */

window.PRODUCTS = {

  intro: "A short paragraph about what the lab builds and shares: software, hardware, datasets.",

  items: [
    {
      id: "product-one",
      title: "Product one",
      short: "One or two lines on what it does.",
      youtube: "https://www.youtube.com/watch?v=jNQXAC9IVRw",
      image: "",
      text: "The overview: what it is, who it's for and what it does. A short paragraph here; the details page has room for everything else.",
      more: "products/example-product.html",
      links: [
        { label: "GitHub", url: "https://github.com/" },
      ]
    },
    {
      id: "product-two",
      title: "Product two",
      short: "One or two lines on what it does.",
      youtube: "",
      image: "images/products/product-02.jpg",
      text: "The overview paragraph for product two.",
      more: "products/example-product.html",
      links: []
    },
    {
      id: "product-three",
      title: "Product three",
      short: "One or two lines on what it does.",
      youtube: "",
      image: "images/products/product-03.jpg",
      text: "The overview paragraph for product three.",
      more: "products/example-product.html",
      links: []
    },
    {
      id: "product-four",
      title: "Product four",
      short: "One or two lines on what it does.",
      youtube: "https://youtu.be/jNQXAC9IVRw",
      image: "images/products/product-04.jpg",
      text: "This one has a video and its own thumbnail picture.",
      more: "products/example-product.html",
      links: []
    },
    {
      id: "product-five",
      title: "Product five",
      short: "One or two lines on what it does.",
      youtube: "",
      image: "images/products/product-05.jpg",
      text: "The overview paragraph for product five.",
      more: "",
      links: [
        { label: "Download", url: "https://example.com" },
      ]
    },
    {
      id: "product-six",
      title: "Product six",
      short: "One or two lines on what it does.",
      youtube: "",
      image: "images/products/product-06.jpg",
      text: "The overview paragraph for product six.",
      more: "products/example-product.html",
      links: []
    },
  ]
};
