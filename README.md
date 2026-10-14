# NextGen Project — Complete Full-Stack Engineering Repository (Weeks 1 to 15)

Welcome to the **NextGen Project** master monorepo containing all weekly coursework, assignments, and production applications from **Week 1 to Week 15**.

---

## 🚀 Live Demo & Deployments
- **Master Showcase Portal:** Open `index.html` in the root directory.
- **NEXAFLOW Admin Dashboard (Week 10 Live Vercel):** [https://week10-j7ttugeh0-portfolio-b5d9.vercel.app](https://week10-j7ttugeh0-portfolio-b5d9.vercel.app)
- **Portfolio Website (Week 1 Live Vercel):** [https://amit-kumar-singh-portfolio-final.vercel.app](https://amit-kumar-singh-portfolio-final.vercel.app)

---

## 📁 Repository Structure & Coursework Matrix

| Week | Directory | Module / Project Name | Key Technologies | Status |
|:---:|---|---|---|:---:|
| **01** | [`week1`](./week1) | Personal Portfolio Website | HTML5 Semantic Elements, Tables, Forms | ✅ Verified |
| **02** | [`week2`](./week2) | InnovateX Startup Landing Page | CSS3 Grid, Flexbox, Responsive Design, Media Queries | ✅ Verified |
| **03** | [`week3`](./week3) | TaskMaster To-Do Application | Vanilla JavaScript, DOM Operations, ES6 Array Methods | ✅ Verified |
| **04** | [`week4`](./week4) | Smart Expense Tracker | Async LocalStorage, Spread Syntax, Destructuring, Reduce | ✅ Verified |
| **05** | [`week5`](./week5) | React Task Manager | React 19, Vite, Component Hierarchy, Props & State | ✅ Verified |
| **06** | [`week6`](./week6) | React Hooks Expense Tracker | Custom Hooks (`useLocalStorage`), `useEffect`, Filters | ✅ Verified |
| **07** | [`week7`](./week7) | Dynamic Multi-Page Blog | React Router v6, Dynamic Routing (`/blog/:id`), SPA Navigation | ✅ Verified |
| **08** | [`week8`](./week8) | CineSearch Movie Explorer | OMDb API Fetching, Debouncing, Loading/Error States | ✅ Verified |
| **09** | [`week9`](./week9) | Modern E-Commerce Store | React Context API, Cart Drawer, Quick View Modal, Badges | ✅ Verified |
| **10** | [`week10`](./week10) | NEXAFLOW Enterprise Admin Dashboard | Tailwind CSS, Lucide Icons, Recharts Analytics, Live Vercel | ✅ Verified |
| **11** | [`week11`](./week11) | Secure Auth & Registration System | Regex Form Validation, Dynamic Password Strength Meter | ✅ Verified |
| **12** | [`week12`](./week12) | Production Deployment & CI/CD Hub | GitHub Actions CI/CD Pipeline, Docker Container, Vercel Edge | ✅ Verified |
| **13** | [`week13`](./week13) | Node.js Core HTTP Server | Built-in HTTP Module, Custom Routing, JSON REST API | ✅ Verified |
| **14** | [`week14`](./week14) | Express.js Task Management API | Full CRUD Operations, Middleware, HTTP Status Codes | ✅ Verified |
| **15** | [`week15`](./week15) | MongoDB & Mongoose Task API | Persistent Database, Mongoose Schema Validation, Dotenv | ✅ Verified |

---

## 🛠️ Complete Tech Stack
- **Frontend Foundations:** Semantic HTML5, CSS3 (Grid & Flexbox), Vanilla JavaScript (ES6+), LocalStorage.
- **Modern Frontend Frameworks:** React 19, Vite, React Router v6, Context API, Lucide React, Recharts.
- **Styling:** CSS3 Custom Properties, Tailwind CSS.
- **Backend & APIs:** Node.js HTTP Server, Express.js 5, RESTful API architecture.
- **Databases & ODM:** MongoDB, Mongoose ODM.
- **DevOps, CI/CD & Cloud:** Git, GitHub Actions (`.github/workflows/ci-cd.yml`), Docker, Docker Compose, Nginx, Vercel Edge.

---

## 💻 Quick Start & Running Projects

### 1. Test Backend APIs Syntax (Weeks 13 - 15)
From root directory:
```bash
npm test
```

### 2. Run Any Frontend Project (e.g. Week 10, Week 12)
```bash
# Example: Week 12 Production Hub
cd week12
npm install
npm run dev

# Example: Week 10 NEXAFLOW Dashboard
cd ../week10
npm run dev
```

### 3. Run Backend Servers
```bash
# Week 13: Core HTTP
cd week13
npm start

# Week 14: Express CRUD API
cd ../week14
npm start

# Week 15: MongoDB Mongoose API
cd ../week15
npm start
```

---

## 🚢 CI/CD Workflow (`.github/workflows/ci-cd.yml`)
The repository includes an automated GitHub Actions pipeline that triggers on every push and pull request to `main`:
1. Checks out the repository.
2. Configures Node.js build matrix (`18.x`, `20.x`).
3. Runs syntax verification tests on all backend services.
4. Executes production asset compilation across React applications.

---

## 👤 Author
- **Student / Developer:** Amit Kumar Singh
- **Program:** NextGen Full-Stack Web Development & Engineering
