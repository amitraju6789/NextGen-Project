# Week 06 — React Hooks Expense Tracker

A modern personal finance tracker constructed with **React 19**, **Vite**, and **Custom React Hooks**, emphasizing functional state management, side-effects synchronization, and persistent browser storage.

---

## 🌟 Key Features
- **Custom Hook Architecture (`useLocalStorage`):** Reusable state synchronization hook that mirrors React state to browser `window.localStorage`.
- **Dynamic Financial Overview:** Auto-computed net balance, total income, and total expense metrics.
- **Category Filtering:** Filter transactions instantly across categories (**All**, **Salary**, **Food**, **Entertainment**, **Utilities**).
- **Controlled Transactions Form:** Real-time validation for positive and negative financial inputs.

---

## 🛠️ Hooks Architecture
- **`useState`:** Manages active filters and form input values.
- **`useEffect`:** Handles browser synchronization and DOM focus triggers.
- **Custom Hook (`useLocalStorage`):**
  ```javascript
  const [transactions, setTransactions] = useLocalStorage('react_expenses', initialData);
  ```

---

## 📁 Project Architecture
```text
src/
├── components/
│   ├── Balance.jsx            # Net balance & cash flow summary
│   ├── CategoryFilter.jsx     # Dropdown / button filters
│   ├── TransactionForm.jsx    # Input form for income/expenses
│   └── TransactionList.jsx    # Mapped list of transaction items
├── hooks/
│   └── useLocalStorage.js     # Custom persistent storage hook
├── App.jsx                    # Root composition & state coordination
└── main.jsx                   # React 19 entry point
```

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