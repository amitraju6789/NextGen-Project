# Week 04 — Smart Expense Tracker Application

A persistent personal finance tracking application engineered with **Advanced JavaScript (ES6+)**, browser **LocalStorage**, simulated asynchronous promise chains, and functional array reduction algorithms.

---

## 🌟 Key Features
- **Real-Time Financial Analytics:**
  - **Net Balance:** Dynamic sum of all credits and debits.
  - **Total Income:** Filtered and reduced credit transactions.
  - **Total Expense:** Filtered and reduced debit transactions.
- **LocalStorage Data Persistence:** Automatically saves all transactions to browser storage with asynchronous promise simulation.
- **Advanced ES6 Patterns:** Utilizes object destructuring (`{ id, desc, amount, category }`) and immutable spread operators (`...transactions`).
- **Dynamic Category Filtering:** Filter records by **Income**, **Food**, **Entertainment**, **Bills**, etc.
- **Real-Time Text Search:** Instantly matches transactions by description.

---

## 🛠️ Concepts & Modern JS Architecture
- **Array Math Algorithms:** `amounts.reduce((acc, item) => (acc += item), 0).toFixed(2)`
- **Asynchronous Storage Helper:**
  ```javascript
  const updateLocalStorage = async (data) => {
      await new Promise(resolve => setTimeout(resolve, 100));
      localStorage.setItem('transactions', JSON.stringify(data));
  };
  ```
- **Immutable State Updates:** `transactions = [...transactions, newTransaction]`

---

## 📁 Project Structure
```text
week4/
├── index.html       # Financial summary dashboard and transaction form
├── style.css        # Responsive card layout with color-coded transactions
├── script.js        # Expense calculations, storage sync & event handlers
└── README.md        # Complete implementation documentation
```

---

## 💻 How to Run
Simply open `index.html` in your browser.
```bash
# Or with a local server:
npx serve .
```

---

## 👤 Author
- **Developer:** Amit Kumar Singh
- **Coursework:** NextGen Full-Stack Web Development Program