# Week 07 — Dynamic Multi-Page Blog Application

A complete multi-page Single Page Application (SPA) built with **React Router v6** and **Vite**, demonstrating client-side routing, dynamic route parameters, active navigation highlights, and 404 fallback routing.

---

## 🌟 Key Features
- **Client-Side Routing:** Zero page reloads using HTML5 History API via React Router DOM.
- **Dynamic Parameter Routes (`/blog/:id`):** Dynamically extracts blog article IDs using `useParams()` and matches content from data models.
- **Active Navigation Links:** Enhanced user feedback with `NavLink` active states in header.
- **Custom 404 Route:** Graceful wildcard fallback (`*`) for unmatched paths.
- **Static Pages Suite:** Home, Blog Index, Article Detail, About, and Contact pages.

---

## 🗺️ Route Directory
| Route | Component | Description |
|---|---|---|
| `/` | `Home.jsx` | Landing page introducing the blog platform |
| `/blog` | `Blog.jsx` | Full listing of published blog posts |
| `/blog/:id` | `BlogDetails.jsx` | Dynamic individual article view via `useParams()` |
| `/about` | `About.jsx` | Engineering team and mission overview |
| `/contact` | `Contact.jsx` | Interactive contact & inquiry form |
| `*` | `NotFound.jsx` | Custom 404 error page with redirect button |

---

## 🛠️ Tech Stack
- **Framework:** React 19
- **Routing:** React Router DOM v6
- **Build System:** Vite
- **Styling:** CSS3 Flexbox & Grid

---

## 💻 Getting Started
```bash
npm install
npm run dev
# Production build:
npm run build
```

---

## 👤 Author
- **Developer:** Amit Kumar Singh
- **Coursework:** NextGen Full-Stack Web Development Program