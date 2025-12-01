# Chancharik Mitra - Personal Website

A clean, distinctive academic website with filterable publications, dark/light mode, and modular structure.

## 📁 Structure

```
chancharik-website/
├── index.html          # Main website (all-in-one file)
├── README.md           # This file
└── media/
    ├── profile.jpg     # Your profile photo (ADD THIS)
    ├── research-overview.png  # Main research figure (ADD THIS)
    ├── cv.pdf          # Your CV (ADD THIS)
    └── favicon.svg     # Browser icon (optional)
```

## 🚀 Quick Start

1. Add your profile photo as `media/profile.jpg`
2. Add your research overview figure as `media/research-overview.png`
3. Add your CV as `media/cv.pdf`
4. Update the social links in the header
5. Deploy to GitHub Pages

---

## ✏️ How to Edit

### File Structure

Everything is in `index.html`. The file has three main parts:

1. **CSS Styles** (lines ~10-400) - Colors, fonts, layouts
2. **HTML Content** (lines ~400-550) - Your bio, links, sections
3. **JavaScript** (lines ~550-end) - Publications data, filtering logic

---

### 📸 Update Profile Photo

Find this around line 430 and replace the placeholder:

```html
<!-- Find this: -->
<div class="profile-placeholder">Profile Photo</div>

<!-- Replace with: -->
<img src="media/profile.jpg" alt="Chancharik Mitra" class="profile-image">
```

---

### 🖼️ Update Research Figure

Find the research figure section around line 470 and replace:

```html
<!-- Find this: -->
<div class="research-figure-placeholder">
    ...
    Research Overview Figure
</div>

<!-- Replace with: -->
<img src="media/research-overview.png" alt="Research Overview" class="research-figure">
```

---

### 🔗 Update Social Links

Find the `header-links` section around line 445. Update the URLs:

```html
<a href="https://scholar.google.com/citations?user=YOUR_ID" target="_blank">Scholar</a>
<a href="https://linkedin.com/in/YOUR_USERNAME" target="_blank">LinkedIn</a>
<a href="https://github.com/YOUR_USERNAME" target="_blank">GitHub</a>
<a href="https://x.com/YOUR_USERNAME" target="_blank">X</a>
```

---

### 📝 Update Bio

Find the `<p class="bio">` section around line 455. Edit the text directly:

```html
<p class="bio">
    Your bio text here. Use <strong>bold</strong> for emphasis.
    Link to advisors: <a href="URL" class="advisor-link">Prof. Name</a>
</p>
```

---

## 📚 Managing Publications

### Where Publications Are Stored

All publications are in a JavaScript array starting around line 570:

```javascript
const publications = [
    {
        title: "Paper Title",
        authors: ["Author One", "Chancharik Mitra", "Author Three"],
        venue: "Conference Name, Year",
        year: 2025,
        tags: ["few-shot", "vision-language"],
        links: { paper: "https://...", code: "https://...", project: "https://..." },
        bibtex: `@article{...}`
    },
    // ... more papers
];
```

### Add a New Paper

Copy this template and add it to the `publications` array:

```javascript
{
    title: "Your Paper Title",
    authors: ["First Author", "Chancharik Mitra", "Last Author"],
    venue: "Conference/Journal Name, Year",
    year: 2025,
    tags: ["tag1", "tag2"],  // See available tags below
    links: { 
        paper: "https://arxiv.org/abs/...",  // Required
        code: "https://github.com/...",       // Optional
        project: "https://project-page.com"   // Optional
    },
    bibtex: `@inproceedings{key2025paper,
  title={Your Paper Title},
  author={Last, First and Mitra, Chancharik and Other, Author},
  booktitle={Conference Name},
  year={2025}
}`
}
```

**Important:** 
- Add new papers at the TOP of the array (they display in order)
- Your name in authors will automatically be bolded
- The bibtex uses backticks (\`) for multi-line strings

### Available Tags

| Tag ID | Display Name | Color |
|--------|--------------|-------|
| `few-shot` | Few-Shot | Purple |
| `mech-interp` | Mech. Interp. | Cyan |
| `compositionality` | Compositionality | Amber |
| `pragmatics` | Pragmatics | Pink |
| `vision-language` | Vision-Language | Green |
| `robotics` | Robotics | Red |
| `edai` | EdAI | Indigo |

### Add a New Tag

To add a completely new tag (e.g., "multimodal"):

**Step 1:** Add CSS color variable (around line 20):
```css
--tag-multimodal: #your-hex-color;
```

**Step 2:** Add filter button styles (around line 200):
```css
.tag-filter[data-tag="multimodal"] { border-color: var(--tag-multimodal); color: var(--tag-multimodal); }
.tag-filter[data-tag="multimodal"].active { background: var(--tag-multimodal); color: white; }
```

**Step 3:** Add publication tag style (around line 280):
```css
.pub-tag.multimodal { background: var(--tag-multimodal); }
```

**Step 4:** Add filter button HTML (around line 500):
```html
<button class="tag-filter" data-tag="multimodal" onclick="toggleFilter('multimodal')">Multimodal</button>
```

**Step 5:** Add label in JavaScript (around line 620):
```javascript
'multimodal': 'Multimodal',
```

---

## 📑 Adding New Sections

### Add a New Navigation Item

Find the nav-links div around line 410:

```html
<div class="nav-links">
    <a href="#about" class="active">About</a>
    <a href="#publications">Publications</a>
    <a href="#teaching">Teaching</a>  <!-- Add this -->
    ...
</div>
```

### Add a New Section

Add after the publications section (around line 540):

```html
<section id="teaching">
    <div class="section-header">
        <h2 class="section-title">Teaching</h2>
    </div>
    
    <!-- Your content here -->
    <p>Course 1 - Teaching Assistant, Fall 2024</p>
    <p>Course 2 - Teaching Assistant, Spring 2024</p>
</section>
```

---

## 🎨 Customization

### Change Colors

Find the `:root` section at the top of the CSS (around line 10):

```css
:root {
    --bg-primary: #fefdfb;        /* Main background */
    --accent-primary: #2563eb;    /* Links, buttons */
    --tag-few-shot: #8b5cf6;      /* Tag colors */
    ...
}
```

Dark mode colors are in `[data-theme="dark"]` (around line 35).

### Change Fonts

Find the Google Fonts import in the `<head>` and the `body` font-family:

```css
body {
    font-family: 'Newsreader', Georgia, serif;  /* Change this */
}
```

### Make Dark Mode NOT Default

Find this in the JavaScript (around line 560):

```javascript
// Change this:
} else {
    document.documentElement.setAttribute('data-theme', 'dark');
}

// To this:
} else {
    // Light mode is default - do nothing
}
```

---

## 🌐 Deployment

### GitHub Pages

1. Create repo named `yourusername.github.io` for personal site
2. Upload all files (index.html, README.md, media folder)
3. Go to Settings → Pages
4. Select: Deploy from branch → main → / (root)
5. Site will be live at `https://yourusername.github.io/`

### Custom Domain

1. Create a file named `CNAME` with your domain (e.g., `chancharik.com`)
2. Configure DNS A records to point to GitHub's IPs
3. Enable HTTPS in repository Settings → Pages

---

## 🔧 Common Tasks

| Task | Location |
|------|----------|
| Add a paper | `publications` array in `<script>` |
| Update bio | `<p class="bio">` in HTML |
| Change profile photo | Replace `profile-placeholder` div |
| Add social link | `header-links` div |
| Change colors | `:root` CSS variables |
| Add new section | After `</section>` tags |
| Add new tag | CSS + HTML + JS (see above) |

---

## 📄 License

Feel free to use and modify for your own academic website.
