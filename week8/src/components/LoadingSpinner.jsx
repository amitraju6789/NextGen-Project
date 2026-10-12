import React from 'react';
export function LoadingSpinner() {
  return (
    <div className="spinner-container">
      <div className="spinner"></div>
      <p>Fetching movies...</p>
    </div>
  );
}
