import React, { useState, useRef, useEffect } from 'react';

function TransactionForm({ onAddTransaction }) {
  const [text, setText] = useState('');
  const [amount, setAmount] = useState('');
  const [category, setCategory] = useState('Food');

  // useRef to focus on the text input field on load
  const inputRef = useRef(null);

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!text.trim() || !amount) return;

    onAddTransaction({
      id: Date.now(),
      text,
      amount: +amount,
      category
    });

    setText('');
    setAmount('');
    setCategory('Food');
    inputRef.current.focus();
  };

  return (
    <form className="transaction-form" onSubmit={handleSubmit}>
      <h3>Add New Transaction</h3>
      <input
        type="text"
        ref={inputRef}
        placeholder="Enter description..."
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <input
        type="number"
        placeholder="Amount (- for expense, + for income)"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />
      <select value={category} onChange={(e) => setCategory(e.target.value)}>
        <option value="Salary">Salary</option>
        <option value="Food">Food & Dining</option>
        <option value="Shopping">Shopping</option>
        <option value="Bills">Bills & Utilities</option>
        <option value="Other">Other</option>
      </select>
      <button type="submit">Add Transaction</button>
    </form>
  );
}

export default TransactionForm;