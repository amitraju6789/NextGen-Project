import React from 'react';
export function ErrorMessage({ message, onRetry }) {
  return (
    <div className="error-container">
      <p className="error-message">⚠️ {message}</p>
      {onRetry && <button onClick={onRetry}>Try Again</button>}
    </div>
  );
}
