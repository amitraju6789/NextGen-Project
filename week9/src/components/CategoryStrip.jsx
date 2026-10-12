import React from 'react';
export default function CategoryStrip({ categories, selectedCategory, setSelectedCategory }) {
  return (
    <div className="category-strip">
      <div className="strip-container">
        <button
          className={`cat-pill ${selectedCategory === 'All' ? 'active' : ''}`}
          onClick={() => setSelectedCategory('All')}
        >
          All Offers
        </button>
        {categories.map((cat) => (
          <button
            key={cat}
            className={`cat-pill ${selectedCategory === cat ? 'active' : ''}`}
            onClick={() => setSelectedCategory(cat)}
          >
            {cat}
          </button>
        ))}
      </div>
    </div>
  );
}
