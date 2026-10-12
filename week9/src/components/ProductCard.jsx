import React from 'react';
import { useCart } from '../context/CartContext';
export default function ProductCard({ product, onViewDetails }) {
  const { addToCart } = useCart();
  const discountPercent = Math.round(
    ((product.originalPrice - product.price) / product.originalPrice) * 100
  );
  return (
    <div className="product-card">
      <div className="card-image-box" onClick={() => onViewDetails(product)}>
        <img src={product.image} alt={product.title} loading="lazy" />
        <span className="discount-badge">{discountPercent}% OFF</span>
        {product.badge && <span className="custom-badge">{product.badge}</span>}
      </div>
      <div className="card-body">
        <span className="product-category">{product.category}</span>
        <h3 className="product-title" onClick={() => onViewDetails(product)}>
          {product.title}
        </h3>
        <div className="rating-row">
          <span className="rating-badge">★ {product.rating}</span>
          <span className="review-count">({product.reviews.toLocaleString()} reviews)</span>
        </div>
        <div className="price-row">
          <span className="current-price">₹{product.price.toLocaleString('en-IN')}</span>
          <span className="original-price">₹{product.originalPrice.toLocaleString('en-IN')}</span>
        </div>
        <div className="card-actions">
          <button className="btn-add-cart" onClick={() => addToCart(product)}>
            ADD TO CART
          </button>
          <button className="btn-quick-view" onClick={() => onViewDetails(product)} title="Quick View">
            👁️
          </button>
        </div>
      </div>
    </div>
  );
}
