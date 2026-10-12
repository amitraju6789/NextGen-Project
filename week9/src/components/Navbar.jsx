import React from 'react';
import { useCart } from '../context/CartContext';
export default function Navbar({ searchTerm, setSearchTerm, onOpenCart }) {
  const { totalItems } = useCart();
  return (
    <header className="navbar">
      <div className="nav-container">
        <div className="logo-section" onClick={() => setSearchTerm('')}>
          <div>
            <div className="logo-text">NEXAFLOW</div>
            <div className="logo-sub">FUTURE <span style={{ color: '#ffe500' }}>COMMERCE</span></div>
          </div>
        </div>
        <div className="header-search">
          <input
            type="text"
            placeholder="Search future-ready products, gadgets & fashion..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button className="search-icon-btn">🔍</button>
        </div>
        <button className="cart-btn" onClick={onOpenCart}>
          <div className="cart-icon-wrapper">
            <span>🛒</span>
            {totalItems > 0 && <span className="cart-badge">{totalItems}</span>}
          </div>
          <span>Cart</span>
        </button>
      </div>
    </header>
  );
}
