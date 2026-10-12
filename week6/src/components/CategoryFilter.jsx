import React from 'react';

function CategoryFilter({ selectedCategory, onSelectCategory }) {
  return (
    <div className="filter-container">
      <label>Filter by Category: </label>
      <select
        value={selectedCategory}
        onChange={(e) => onSelectCategory(e.target.value)}
      >
        <option value="All">All Categories</option>
        <option value="Salary">Salary</option>
        <option value="Food">Food & Dining</option>
        <option value="Shopping">Shopping</option>
        <option value="Bills">Bills & Utilities</option>
        <option value="Other">Other</option>
      </select>
    </div>
  );
}

export default CategoryFilter;