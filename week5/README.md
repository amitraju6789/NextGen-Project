# Week 05 — React Task Manager

A reactive single-page task manager application built with **React 19** and **Vite**, demonstrating clean component composition, state lifting, controlled form inputs, and dynamic list rendering.

---

## 🌟 Key Features
- **Component-Driven Architecture:** Modular separation into `TaskForm`, `TaskList`, and `TaskItem`.
- **State Lifting & Props:** Top-level application state managed in `App.jsx` and distributed down via props and callback handlers.
- **Controlled Inputs:** Two-way binding for task title and priority dropdown selection.
- **Priority Indicators:** Color-coded priority badges (`High`, `Medium`, `Low`).
- **Dynamic Task Toggling:** Completed state toggle with line-through styling and deletion handlers.

---

## 🛠️ Tech Stack
- **Framework:** React 19
- **Build Tool:** Vite
- **Language:** Modern JavaScript (ES6+ JSX)
- **Styling:** Modular CSS3

---

## 📁 Component Hierarchy
```text
App
├── TaskForm (Task creation, priority selector, submit handler)
└── TaskList (Container mapping task array)
    └── TaskItem (Individual item card, toggle checkbox, delete button)
```

---

## 💻 Getting Started
```bash
# 1. Install dependencies
npm install

# 2. Run local development server
npm run dev

# 3. Create production build
npm run build
```

---

## 👤 Author
- **Developer:** Amit Kumar Singh
- **Coursework:** NextGen Full-Stack Web Development Program