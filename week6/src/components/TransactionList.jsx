import React from 'react';

function TransactionList({ transactions, onDeleteTransaction }) {
  if (transactions.length === 0) {
    return <p className="empty-msg">No transactions recorded yet.</p>;
  }

  return (
    <div className="list-container">
      <h3>History</h3>
      <ul className="transaction-list">
        {transactions.map((t) => {
          const sign = t.amount < 0 ? '-' : '+';
          const itemClass = t.amount < 0 ? 'minus' : 'plus';

          return (
            <li key={t.id} className={`list-item ${itemClass}`}>
              <div>
                <strong>{t.text}</strong>
                <small className="category-tag">({t.category})</small>
              </div>
              <div className="item-actions">
                <span>
                  {sign}${Math.abs(t.amount).toFixed(2)}
                </span>
                <button
                  className="delete-btn"
                  onClick={() => onDeleteTransaction(t.id)}
                >
                  x
                </button>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default TransactionList;