# Blog System — Quick Reference
# ===============================
# How to add a new post to omarfaruk-k.github.io/blog/

## FOLDER STRUCTURE
omarfaruk-k.github.io/
├── index.html               ← main portfolio page
├── style.css                ← shared styles (used by ALL pages)
├── script.js                ← shared scripts (used by ALL pages)
├── author.jpg               ← your photo
└── blog/
    ├── index.html           ← blog listing page
    ├── my-first-post/
    │   └── index.html       ← post page
    ├── your-next-post/      ← duplicate this folder for each new post
    │   └── index.html
    └── another-post/
        └── index.html


## HOW TO ADD A NEW POST (3 steps)

### Step 1 — Duplicate the template folder
  Copy:  blog/my-first-post/
  Paste: blog/your-post-slug/         ← use a short, hyphenated name
  Edit:  blog/your-post-slug/index.html

### Step 2 — Update these 8 things in the new index.html
  1.  <title>          → Your Post Title — Omar Faruk Khan
  2.  <meta name="description"> → 1-sentence summary
  3.  breadcrumb slug  → your-post-slug
  4.  post-category    → Backend / Mobile / Flutter / Firebase / DevOps
  5.  Date & read time → Jan 15, 2025 · 5 min read
  6.  <h1 class="post-title">  → post title
  7.  <p class="post-subtitle"> → post intro sentence
  8.  post content     → write between the BEGIN/END CONTENT comments
  9.  post-tags        → relevant tags
  10. TOC              → match your h2 headings and IDs

  Then update Prev/Next nav links at the bottom.

### Step 3 — Add a card to blog/index.html
  Find the comment "COPY THIS BLOCK TO ADD A NEW LOCAL POST" and paste:

  <a class="blog-card reveal" href="your-post-slug/index.html" data-category="backend">
    <div class="blog-meta">
      <span class="blog-category">Backend</span>
      <span>·</span>
      <span>5 min</span>
      <span>·</span>
      <span>Jan 2025</span>
    </div>
    <h3 class="blog-title">Your Post Title</h3>
    <p class="blog-excerpt">One or two sentence summary of the post.</p>
    <span class="blog-readmore">Read →</span>
  </a>

  Also update the featured post block if this is your newest post.


## ADDING AN EXTERNAL-ONLY POST (Medium or dev.to, no local copy)
  Use this card template in blog/index.html:

  <a class="blog-card reveal" href="https://medium.com/your-real-url"
     target="_blank" rel="noopener" data-category="backend">
    <div class="blog-meta">
      <span class="blog-category">Backend</span>
      <span>·</span>
      <span>5 min</span>
      <span>·</span>
      <span>Jan 2025</span>
      <span class="external-badge">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
          <polyline points="15 3 21 3 21 9"/>
          <line x1="10" y1="14" x2="21" y2="3"/>
        </svg>
        Medium
      </span>
    </div>
    <h3 class="blog-title">Your Post Title</h3>
    <p class="blog-excerpt">Short summary.</p>
    <span class="blog-readmore">Read on Medium →</span>
  </a>


## CATEGORIES AVAILABLE
  data-category values (must match filter-btn data-filter in blog/index.html):
    backend   → Node.js, Django, Flask, APIs
    mobile    → Android, Flutter, React Native
    flutter   → Flutter-specific posts
    firebase  → Firebase, Firestore, Auth, FCM
    devops    → Docker, GitHub Actions, GCP, deployment

  To add a new category:
    1. Add a button in blog/index.html:
       <button class="filter-btn" data-filter="newcat">New Category</button>
    2. Use data-category="newcat" on your post cards.


## UPDATING THE MAIN SITE BLOG SECTION (index.html)
  When you publish a new post, update the 3 blog cards in index.html#blog
  to reflect your latest articles.


## TIPS
  - Keep post slugs short, lowercase, hyphenated: "rest-api-nodejs" not "MyPostAboutAPIs"
  - Read time: ~200 words per minute. 1000 words ≈ 5 min read.
  - Always include the external-banner if a post is cross-posted to Medium/dev.to
  - The TOC sidebar auto-stacks and hides on mobile — no need to change anything
  - style.css is shared — changes there affect all pages
  - script.js is shared — theme toggle and scroll effects apply everywhere
