/* ==============================================================
   SITE SETTINGS (used on every page)

   How to edit any file in this data/ folder:
   - Change only the text between the quotes "like this".
   - Every { ... } item in a list is followed by a comma.
   - Lines starting with // are notes for you. The website ignores them.
   - Need a double quote inside your text? Type \" instead.
   ============================================================== */

window.SITE = {

  // The lab name, shown in the left bar, on the home page and in the footer
  name: "MANAS Lab",

  // Your photo on the home page. It's cut into a circle automatically.
  // Square, 600 x 600 pixels, JPG. Put the file in images/lab/
  photo: "images/lab/pi.jpg",
  photoAlt: "Portrait of Your Name",   // describe the photo for people who can't see it

  // Your LinkedIn page (the small logo in the left bar). Leave "" to hide the logo.
  linkedin: "https://www.linkedin.com/in/your-profile/",

  // Shown in the footer of every page
  affiliation: "Department of Your Department, Your University",
  email: "",   // optional, e.g. "you@university.edu"

  // The tabs in the left bar, in this order.
  // To add a tab, make the page first (see README.md, "Adding a new tab").
  tabs: [
    { label: "Home", href: "index.html", page: "home" },
    { label: "Research", href: "research.html", page: "research" },
    { label: "Products", href: "products.html", page: "products" },
    { label: "Teaching", href: "teaching.html", page: "teaching" },
    { label: "People",   href: "people.html",   page: "people" }
  ]
};
