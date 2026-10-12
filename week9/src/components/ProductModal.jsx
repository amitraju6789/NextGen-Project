import React from 'react';
import { useCart } from '../context/CartContext';
export default function ProductModal({ product, onClose }) {
  const { addToCart } = useCart();
  if (!product) return null;
  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="close-btn" onClick={onClose}>&times;</button>
        <div className="modal-grid">
          <img src={product.image} alt={product.title} />
          <div className="modal-info">
            <span className="badge">{product.category}</span>
            <h2>{product.title}</h2>
            <p className="modal-rating">⭐ {product.rating} Rating</p>
            <p className="description">{product.description}</p>
            <h3 className="modal-price">${product.price.toFixed(2)}</h3>
            <button
              className="btn-primary"
              onClick={() => {
                addToCart(product);
                onClose();
              }}
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
