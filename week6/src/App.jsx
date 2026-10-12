import React, { useState } from 'react';
import { useLocalStorage } from './hooks/useLocalStorage';
import Balance from './components/Balance';
import TransactionForm from './components/TransactionForm';
import CategoryFilter from './components/CategoryFilter';
import TransactionList from './components/TransactionList';

function App() {
  // Custom Hook for persistent state
  const [transactions, setTransactions] = useLocalStorage('react_expenses', [
    { id: 1, text: 'Freelance Project', amount: 500, category: 'Salary' },
    { id: 2, text: 'Grocery Shopping', amount: -60, category: 'Food' }
  ]);

  const [selectedCategory, setSelectedCategory] = useState('All');

  const addTransaction = (newTx) => {
    setTransactions([newTx, ...transactions]);
  };

  const deleteTransaction = (id) => {
    setTransactions(transactions.filter((t) => t.id !== id));
  };

  // Filtered transactions logic
  const filteredTransactions =
    selectedCategory === 'All'
      ? transactions
      : transactions.filter((t) => t.category === selectedCategory);

  return (
    <div className="app-container">
      <header>
        <h2>React Expense Tracker 💳</h2>
        <p>Veda Technologies - Week 6 React Hooks</p>
      </header>

      <Balance transactions={transactions} />
      <TransactionForm onAddTransaction={addTransaction} />
      <CategoryFilter
        selectedCategory={selectedCategory}
        onSelectCategory={setSelectedCategory}
      />
      <TransactionList
        transactions={filteredTransactions}
        onDeleteTransaction={deleteTransaction}
      />
    </div>
  );
}

export default App;