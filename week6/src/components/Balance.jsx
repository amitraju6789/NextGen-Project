import React from 'react';

function Balance({ transactions }) {
  const amounts = transactions.map((t) => t.amount);

  const total = amounts.reduce((acc, item) => (acc += item), 0).toFixed(2);
  const income = amounts
    .filter((item) => item > 0)
    .reduce((acc, item) => (acc += item), 0)
    .toFixed(2);
  const expense = (
    amounts.filter((item) => item < 0).reduce((acc, item) => (acc += item), 0) * -1
  ).toFixed(2);

  return (
    <div className="balance-container">
      <h3>Your Balance</h3>
      <h1>${total}</h1>
      <div className="inc-exp-container">
        <div className="inc-box">
          <h4>Income</h4>
          <p className="money plus">+${income}</p>
        </div>
        <div className="exp-box">
          <h4>Expense</h4>
          <p className="money minus">-${expense}</p>
        </div>
      </div>
    </div>
  );
}

export default Balance;