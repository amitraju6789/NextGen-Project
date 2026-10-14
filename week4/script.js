// State Management
let transactions = JSON.parse(localStorage.getItem('transactions')) || [];

// DOM Elements
const balanceEl = document.getElementById('totalBalance');
const incomeEl = document.getElementById('totalIncome');
const expenseEl = document.getElementById('totalExpense');
const listEl = document.getElementById('transactionList');
const formEl = document.getElementById('transactionForm');
const descInput = document.getElementById('desc');
const amountInput = document.getElementById('amount');
const categoryInput = document.getElementById('category');
const searchInput = document.getElementById('search');
const filterCatEl = document.getElementById('filterCategory');

// Save to LocalStorage using Async Simulation
const updateLocalStorage = async (data) => {
    try {
        await new Promise((resolve) => setTimeout(resolve, 100)); // Async simulation
        localStorage.setItem('transactions', JSON.stringify(data));
    } catch (error) {
        console.error('Failed to save transactions:', error);
    }
};

// Calculate Balance, Income & Expense using map & reduce
const updateValues = () => {
    const amounts = transactions.map(t => t.amount);

    const total = amounts
        .reduce((acc, item) => (acc += item), 0)
        .toFixed(2);

    const income = amounts
        .filter(item => item > 0)
        .reduce((acc, item) => (acc += item), 0)
        .toFixed(2);

    const expense = (
        amounts.filter(item => item < 0).reduce((acc, item) => (acc += item), 0) * -1
    ).toFixed(2);

    balanceEl.innerText = `$${total}`;
    incomeEl.innerText = `+$${income}`;
    expenseEl.innerText = `-$${expense}`;
};

// Add Transaction with Destructuring and Spread Operator
const addTransaction = (e) => {
    e.preventDefault();

    const desc = descInput.value.trim();
    const amount = +amountInput.value.trim();
    const category = categoryInput.value;

    if (desc === '' || isNaN(amount) || amount === 0) {
        alert('Please enter a valid description and non-zero amount');
        return;
    }

    // Object Creation with Unique ID
    const newTransaction = {
        id: Date.now(),
        desc,
        amount,
        category
    };

    // Spread Operator
    transactions = [...transactions, newTransaction];

    updateLocalStorage(transactions);
    init();

    descInput.value = '';
    amountInput.value = '';
};

// Remove Transaction by ID
const removeTransaction = (id) => {
    transactions = transactions.filter(t => t.id !== id);
    updateLocalStorage(transactions);
    init();
};

// Render Filtered Transactions
const renderList = () => {
    listEl.innerHTML = '';

    const query = searchInput.value.toLowerCase();
    const selectedCategory = filterCatEl.value;

    const filtered = transactions.filter(({ desc, category }) => {
        const matchesSearch = desc.toLowerCase().includes(query);
        const matchesCategory = selectedCategory === 'All' || category === selectedCategory;
        return matchesSearch && matchesCategory;
    });

    filtered.forEach(({ id, desc, amount, category }) => {
        const sign = amount < 0 ? '-' : '+';
        const itemClass = amount < 0 ? 'minus' : 'plus';

        const li = document.createElement('li');
        li.classList.add(itemClass);

        li.innerHTML = `
            <div>
                <strong>${desc}</strong> <small>(${category})</small>
            </div>
            <div>
                <span>${sign}$${Math.abs(amount).toFixed(2)}</span>
                <button class="delete-btn" onclick="removeTransaction(${id})">x</button>
            </div>
        `;

        listEl.appendChild(li);
    });
};

// Initialize App
const init = () => {
    renderList();
    updateValues();
};

// Event Listeners
formEl.addEventListener('submit', addTransaction);
searchInput.addEventListener('input', renderList);
filterCatEl.addEventListener('change', renderList);

// Expose for inline onclick handlers
window.removeTransaction = removeTransaction;

init();