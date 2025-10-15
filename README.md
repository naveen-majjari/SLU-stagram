# 🧑‍💻 Lab 2 – Build SLU-stagram
**Course:** CSCI-4360 / CSCI-5360 Web Technologies  
**Student:** Naveen Majjari  

---

## 🏗️ Overview
This lab implements a **mini Instagram-style photo feed** using React 18 and Vite.  
It demonstrates component decomposition, state management, controlled forms, event handling, accessibility, and basic deployment.

---

## 📸 Deliverables & Verification

### Part 0 – Project Setup (5 pts)
✅ App successfully runs at **http://localhost:5173/** with no console errors or warnings.

---

### 🧩 Feed & Interaction (Parts 1–4)
**Functionality demonstrated in screenshots:**
1. **Two posts visible:** one liked (♥ filled + count increased) and one not liked.  
2. **Comment system:** a new comment is posted and visible under that post.  
3. **Console:** open and clean (no red/yellow warnings).  

**Comment logging location:**  
Comments are logged inside  
`src/components/CommentForm.jsx` → `onSubmit` function:  
```js
console.log("[CommentForm] New comment:", { postId, author: me, text: t });
```
Example output:  
```
[CommentForm] New comment: { postId: "p1", author: "you", text: "Nice photo!" }
```

---

### 💅 Polish (Styling & Accessibility) (5 pts)

#### Screenshot A — Font & Layout Verification
- Verified in DevTools → **Computed**:  
  - `body → font-family` contains `system-ui`.  
  - `<main class="container">` has `max-width: 720px; margin: 0 auto;`.  
- Centered layout visible with white margins.

#### Screenshot B — Button Hover Verification
- Hovered **Like button** shows background/border color change  
  (CSS rule `button:hover:not(:disabled)` active).

#### Screenshot C — Accessible Elements
- `<button>` for Like uses `aria-pressed={post.likedByMe}` toggling true/false.  
- Post image `<img>` has meaningful `alt` text (caption or fallback “Photo by @user”).  
- Avatar images use `alt="{author} avatar"`.

---

### 🎹 Keyboard Accessibility
- **Composer:** real `<form>` with `<button type="submit">`.  
  → Pressing **Enter** submits and creates a post when Image URL is valid.  
- **Like button:** real `<button>` element with `aria-pressed` toggling true/false.  
  Verified via DevTools Elements panel.

---

### 🖼️ Meaningful Alt Text
- **Avatar:** `alt="{author} avatar"`.  
- **Post image:** `alt={post.caption ? post.caption : \`Photo by @${post.author}\`}`.  
- Decorative images (if any) use `alt=""`.

---

### 🗂️ Codebase Highlights
| Component | Purpose |
|------------|----------|
| `Navbar.jsx` | Fixed header with white Upload/MSG buttons. |
| `Feed.jsx` | Maps `posts` → `<PostCard>` list. |
| `PostCard.jsx` | Displays avatar, author link (`/u/:handle`), image, caption, likes, comments. |
| `CommentList.jsx` | Renders each comment in black text. |
| `CommentForm.jsx` | Controlled input; logs comment to console on submit. |
| `Composer.jsx` | Controlled form for creating new posts (prepends to feed). |
| `Profile.jsx` | Filters feed by `/u/:handle`. |
| `App.jsx` | Main router; handles `localStorage` persistence. |

---

### 💾 Persistence (Grad Extra)
- `localStorage` key: `mini-insta-posts`.  
- Likes, comments, and new posts persist after page refresh.

---

### 🚀 Deployment via GitHub Pages
**Repo:** `mini-insta`  
- `vite.config.js` → `base: '/mini-insta/'`  
- Router switched to `<HashRouter>` for Pages.  
- Deployed using `gh-pages -d dist` to `gh-pages` branch.  
**Live URL:** [`https://USERNAME.github.io/mini-insta/`](https://USERNAME.github.io/mini-insta/)

---

### 🧾 Evidence Screenshots (attached PDF)
- Screenshot 1 — App with two posts (one liked + comment visible)  
- Screenshot 2 — Console open (no errors)  
- Screenshot A — Font and Container rules  
- Screenshot B — Button hover effect  
- Screenshot C — Accessible Like button + alt text

---


**End of README – Lab 2 (Build SLU-stagram)**
