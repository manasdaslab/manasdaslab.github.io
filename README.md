# MANAS Lab website

A plain HTML, CSS and JavaScript site that runs on GitHub Pages. There's nothing to install or build. You change text, pictures and links in a few simple files, upload, and the site updates.

---

## What's in this folder

```
index.html                 Home page
research.html              Research page (projects grid + papers)
products.html              Products page (products grid)
teaching.html              Teaching page
people.html                People page
products/
  example-product.html     A product's details page (copy it for each product)

data/                      ← YOUR CONTENT. You'll edit these files.
  site.js                  lab name, your photo, LinkedIn, footer, menu tabs
  home.js                  home paragraph, photo strip, 6 highlights, news
  research.js              research intro, projects, papers
  products.js              products intro, products
  teaching.js              courses
  people.js                current members and alumni

images/                    ← YOUR PICTURES
  lab/                     your photo (pi.jpg)
  slideshow/               photos for the strip on the home page
  highlights/              small square icons for the 6 home tiles
  research/                project pictures and thumbnails
  products/                product pictures and figures
  people/                  people photos
  favicon.svg              the little icon in the browser tab
  og-image.jpg             picture shown when someone shares the site's link

assets/css/style.css       colors, fonts and layout
assets/js/site.js          how the pages work (you don't need to edit this)
```

Every picture in `images/` right now is a grey placeholder showing the size it should be.

---

## 1. Programs you'll use

| What | Program | Why |
|---|---|---|
| Editing files | **Visual Studio Code** (free, code.visualstudio.com) | Colors the code so mistakes stand out; shows a red squiggle on a missing comma or quote. |
| Previewing | **Live Server**, an extension inside VS Code (search "Live Server" in the Extensions panel) | Opens the site in your browser and reloads every time you save. YouTube videos need it to play on your computer. |
| Hosting | A free **GitHub** account (github.com) | GitHub Pages hosts the site for free. |
| Uploading | The GitHub website, or **GitHub Desktop** (free, desktop.github.com) | The website is enough. GitHub Desktop is easier once you update often. |
| Pictures | **Squoosh** (squoosh.app, free, in the browser) | Resizes and compresses photos so the site loads fast. |
| Browser | An up-to-date Chrome, Edge, Firefox or Safari | Older browsers may not show everything correctly. |

---

## 2. See the site on your computer

**Quick look:** double-click `index.html`. Everything shows, but YouTube videos may show an error, because YouTube only plays inside a real web address.

**Full preview (recommended):**
1. Open VS Code, then **File → Open Folder** and pick this folder.
2. Install the **Live Server** extension (Extensions icon on the left, search "Live Server", Install).
3. Right-click `index.html` → **Open with Live Server**.
4. Leave it open. Each time you save a file, the browser reloads.

---

## 3. Make it yours: the checklist

| Change | Where |
|---|---|
| Lab name, your photo, LinkedIn link, department and university | `data/site.js` |
| Your photo file | replace `images/lab/pi.jpg` (keep the name, or change `photo` in `data/site.js`) |
| Home paragraph, photos, highlights, news | `data/home.js` |
| Research projects and papers | `data/research.js` |
| Products | `data/products.js` |
| Courses | `data/teaching.js` |
| People | `data/people.js` |
| Browser tab titles and the Google description | the `<title>` and `<meta name="description">` lines at the top of each `.html` file |
| Link preview picture (LinkedIn, Slack, email) | replace `images/og-image.jpg` (1200 x 630) |
| Accent color | top of `assets/css/style.css` (three alternatives are written there, ready to copy) |
| Fonts | the Google Fonts line in each `.html` file plus `--font-head` and `--font-body` at the top of `style.css` |
| Tab icon | `images/favicon.svg` (or use a 512 x 512 PNG and change the `<link rel="icon">` line in each page) |

---

## 4. How the content files work

Each file in `data/` is a list of items. An item looks like this:

```js
{
  id: "project-one",
  title: "Project one",
  short: "One or two lines that make someone want to open it.",
  youtube: "https://www.youtube.com/watch?v=jNQXAC9IVRw",
  image: "",
  text: "The paragraph shown when the panel opens.",
  authors: "Author One, **Your Name**, Author Three",
  links: [
    { label: "GitHub", url: "https://github.com/your-name/your-repo" },
  ]
},
```

Rules that keep it working:

- Change only the text **between the quotes**.
- Every `{ ... }` item ends with a **comma**.
- A double quote inside your text must be written `\"`. Curly quotes like “ ” and apostrophes ’ are fine as they are.
- Lines starting with `//` are notes for you; the site ignores them.
- `**two stars**` around words makes them **bold** (use it for lab members' names in author lists).
- `[link text](https://example.com)` makes a link inside text.
- Two paragraphs: `text: ["First paragraph.", "Second paragraph."]`
- Leave something empty with `""` (text) or `[]` (lists). Empty items are simply not shown.

If a data file has a mistake, the page shows a red box naming the file. Press **F12** and open **Console**: it shows the line number.

### Controlling the order

The order in the file **is** the order on the page. Nothing is sorted automatically, so you're always in control:

- **Research and Products grids** fill left to right, two per row: items 1 and 2 are the top row, 3 and 4 the next, and so on. On a phone they stack one per row in the same order.
- **Photo strip:** the first three photos show first, left to right. Then each photo is replaced by the next in the list, and the list starts over at the end.
- **News and Papers:** shown top to bottom exactly as written. Put the newest at the top and add new items at the top.
- **People:** three per row in the order written. Moving a whole group (for example Alumni above Current) works the same way.
- **To move an item:** select everything from its `{` to its closing `},` (comma included), cut, and paste it where you want it.

---

## 5. Pictures

### Adding a picture

1. Resize and compress it (see the sizes below). Squoosh: drop the photo in, choose **Resize**, set the width, choose **MozJPEG** at quality 75–80, download.
2. Give it a simple name: **lowercase, no spaces**, hyphens between words. `protein-folding.jpg`, not `Protein Folding.JPG`.
3. Put it in the right folder in `images/`.
4. Write its path in the data file, starting from the site's main folder: `image: "images/research/protein-folding.jpg"`.

Easiest of all: replace a placeholder with your picture under **the same name**. Nothing else needs changing.

**Important:** GitHub Pages treats `Photo.jpg` and `photo.jpg` as different files. If a picture shows on your computer but not online, check the capital letters and the extension (`.jpg` vs `.jpeg` vs `.JPG`).

### Sizes

| Picture | Shape | Size in pixels | Folder | Keep under |
|---|---|---|---|---|
| Your photo (shown round) | square | 600 x 600 | `images/lab/` | 150 KB |
| Photo strip | square | 900 x 900 | `images/slideshow/` | 250 KB each |
| Highlight icons | square | 160 x 160 | `images/highlights/` | 30 KB |
| Research and product pictures, custom thumbnails | 16:9 | 1600 x 900 | `images/research/`, `images/products/` | 300 KB |
| Figures on a details page | any | 1200–1600 wide | `images/products/` | 300 KB |
| People | square | 400 x 400 | `images/people/` | 80 KB |
| Link preview | 1200 x 630 | 1200 x 630 | `images/` | 300 KB |

Tips:

- **Keep the subject in the middle.** Pictures fill their box and trim the edges if the shape differs. On phones the strip photos are trimmed to a narrower shape, so the middle matters most.
- **The strip as one continuous picture:** take a wide panorama, crop it to exactly 3 times as wide as it is tall (2700 x 900), cut it into three 900 x 900 squares, and list them next to each other in `photos`. With `photoMode: "all-together"` the three change together, so a panorama stays in one piece.
- People photos look best when they match: same crop (head and shoulders), similar light and background.
- Research and product pictures with no video are shown whole when the panel opens, so diagrams aren't cut off.

---

## 6. YouTube videos

1. Open the video on YouTube, press **Share**, then **Copy**.
2. Paste it into the item: `youtube: "https://youtu.be/abc123XYZ00"`. Any normal YouTube link works (watch, youtu.be, shorts).
3. Its thumbnail is picked up automatically. To use your own instead, also set `image` to a 1600 x 900 picture.

Good to know:

- The video loads only when someone opens the panel, so pages stay fast, and it stops when the panel closes.
- **Unlisted** videos work; **private** ones don't. The video must allow embedding (YouTube Studio → the video → Show more → Allow embedding; it's on by default).
- The dummy links all point to the same short public video. Replace each with yours.
- To put a video on a details page, use `<div class="media media-hero" data-youtube="your link"></div>` (there's one in `products/example-product.html`).

---

## 7. A details page for each product

"Learn more" on an open product goes to a page that isn't in the menu.

1. In `products/`, copy `example-product.html` and rename the copy, e.g. `my-tool.html`.
2. Open it and change the text, links and pictures. Picture paths on this page start with `../`, e.g. `../images/products/my-tool-figure.jpg`.
3. In `data/products.js`, set that product's `more: "products/my-tool.html"`.

Leave `more: ""` and the product has no Learn more button.

---

## 8. Linking a home highlight to a project or product

Each project and product has an `id`. In `data/home.js`, set the highlight's `link` to the page, a `#`, and that id:

```js
link: "research.html#project-one"
```

"Learn more" then opens the Research page with that project already open. If you change a project's `id`, change the highlight's link too.

---

## 9. Adding a new tab

1. Copy `teaching.html`, rename it (e.g. `outreach.html`), and change `<title>`, the `<h1>` and `data-page="teaching"` to `data-page="outreach"`.
2. Delete `<div id="courses"></div>` and the `data/teaching.js` script line, and write your content in the page as normal HTML (see the details page for examples of sections, pictures and videos).
3. In `data/site.js`, add the tab: `{ label: "Outreach", href: "outreach.html", page: "outreach" },`

---

## 10. Put it online with GitHub Pages

### First time (website only, no extra programs)

1. Sign in at github.com and press **New repository** (the + at the top right).
2. **Name it.**
   - `your-username.github.io` makes the site live at `https://your-username.github.io`
   - any other name, e.g. `manas-lab`, makes it `https://your-username.github.io/manas-lab/`
   - for a lab account, first create a free **Organization** (e.g. `manaslab`), then a repository named `manaslab.github.io`
3. Choose **Public** (free GitHub Pages needs a public repository) and press **Create repository**.
4. On the new page, click **uploading an existing file**. Open this folder on your computer, select **everything inside it** (not the folder itself, and not the zip), and drag it into the browser. `index.html` must end up at the top level of the repository.
5. Scroll down and press **Commit changes**. Wait until the upload finishes.
6. Go to **Settings → Pages**. Under **Build and deployment**, set Source to **Deploy from a branch**, Branch to **main** and the folder to **/ (root)**. Press **Save**.
7. Wait a minute or two, then refresh the Settings → Pages page. The address of your live site appears at the top. Open it.

### Updating the site

- **Small text edits:** open the file on github.com (e.g. `data/home.js`), press the pencil icon, edit, then **Commit changes**.
- **New pictures:** open the folder on github.com (e.g. `images/people`), **Add file → Upload files**, drag them in, **Commit changes**.
- **Many changes at once:** use GitHub Desktop. Once: **File → Clone repository** and pick your repository. Then work in that folder on your computer, open GitHub Desktop, write a short summary, press **Commit to main**, then **Push origin**.

The live site updates about a minute later. If you don't see a change, reload with **Ctrl + F5** (Windows) or **Cmd + Shift + R** (Mac) to skip the browser's saved copy. The **Actions** tab on GitHub shows whether the update finished.

### Your own address (optional)

To use an address like `manaslab.org` or `manas.your-university.edu`: Settings → Pages → **Custom domain**. Then add the DNS records GitHub shows you at your domain registrar. For a university address, send those records to your IT department.

---

## 11. When something looks wrong

| You see | Likely cause | Fix |
|---|---|---|
| A red box naming a data file | a missing comma, quote or bracket | Press F12, open Console, go to the line number it shows. VS Code also underlines the problem in red. |
| "Picture not found" with a path | the path or the file name doesn't match | Check folder, spelling, capital letters and the extension. |
| Video says it's unavailable | private video, embedding turned off, or the file opened by double-click | Make it public or unlisted, allow embedding, preview with Live Server. |
| Changes don't show online | browser saved copy, or GitHub still updating | Wait a minute, then Ctrl + F5. Check the Actions tab. |
| Site address shows "404" | `index.html` isn't at the top level, or Pages isn't switched on | Move the files up one level; recheck Settings → Pages. |
| A whole section disappeared | its list in the data file is empty | Add at least one item. Empty sections hide on purpose. |

---

## 12. Making it look good

- **Write less.** Two or three sentences for page intros, one or two lines on small panels, one line per news item. The open panels are where detail goes.
- **Keep pictures consistent.** Same shape within a grid, similar light and colors. Six highlight icons in one style (all photos, or all simple drawings) look far better than a mix.
- **Fill rows.** An even number of projects and products keeps the two-column grid tidy.
- **Keep news current.** A newest item from two years ago makes the whole site feel abandoned; ten good items beat forty.
- **Describe pictures.** Fill in `alt` and `photoAlt` with what's in the picture. Screen readers and Google both use it.
- **Check on your phone** after each big change. The layout adjusts itself, but long names or very long titles are easiest to spot there.
- **Compress everything.** A page with ten 4 MB photos takes ages on a phone; ten 200 KB photos look the same and load instantly.
