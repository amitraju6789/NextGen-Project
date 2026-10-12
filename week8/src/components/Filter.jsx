import React from 'react';
export default function Filter({ type, setType }) {
  return (
    <div className="filter-container">
      <label htmlFor="type-select">Category: </label>
      <select
        id="type-select"
        value={type}
        onChange={(e) => setType(e.target.value)}
      >
        <option value="">All Types</option>
        <option value="movie">Movies</option>
        <option value="series">TV Series</option>
        <option value="episode">Episodes</option>
      </select>
    </div>
  );
}
