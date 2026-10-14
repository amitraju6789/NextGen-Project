# Week 03 — TaskMaster To-Do Application

An interactive task management web application built with pure **Vanilla JavaScript (ES6+)** demonstrating comprehensive DOM manipulation, event handling, real-time filtering, and state array operations.

---

## 🌟 Key Features
- **Dynamic Task Creation:** Add new tasks with automatic unique timestamp ID generation.
- **In-Place Editing:** Modify task descriptions dynamically via native browser prompt dialogues.
- **Status Toggling:** Switch tasks between completed and pending states with visual strikethrough feedback.
- **Task Deletion:** Remove items seamlessly with automatic DOM re-rendering.
- **Real-Time Live Search:** Filter tasks dynamically on every keystroke in the search bar.
- **Category Filter Tabs:** Instant toggle between **All**, **Pending**, and **Completed** views.
- **Keyboard Shortcuts:** Press `Enter` in the input field for instant task addition.

---

## 🛠️ Concepts & JavaScript Features Applied
- **DOM API:** `document.getElementById`, `document.querySelectorAll`, `createElement`, `appendChild`, `classList`.
- **ES6 Array Methods:** `filter`, `map`, `find`, `forEach`.
- **Event Listeners:** `addEventListener('click')`, `addEventListener('keypress')`, `addEventListener('input')`.
- **Global Scope Integration:** Direct function exposure on `window` for foolproof inline event handler compatibility.

---

## 📁 Project Structure
```text
week3/
├── index.html       # Markup container for task list, input form, and filter buttons
├── style.css        # Clean, modern UI styling with responsive layout
├── script.js        # Core JavaScript application logic & DOM handlers
└── README.md        # Detailed project documentation
```

---

## 💻 How to Run
1. Double-click `index.html` to open in any web browser.
2. Or use a local development server:
   ```bash
   npx serve .
   ```

---

## 👤 Author
- **Developer:** Amit Kumar Singh
- **Coursework:** NextGen Full-Stack Web Development Program