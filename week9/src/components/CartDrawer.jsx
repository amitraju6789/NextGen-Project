import React from 'react';
import { useCart } from '../context/CartContext';
export default function CartDrawer({ isOpen, onClose }) {
  const { cart, removeFromCart, updateQuantity, totalPrice, clearCart } = useCart();
  if (!isOpen) return null;
  return (
    <div className="drawer-overlay" onClick={onClose}>
      <div className="drawer-content" onClick={(e) => e.stopPropagation()}>
        <div className="drawer-header">
          <h3>Shopping Cart ({cart.length})</h3>
          <button className="close-btn" onClick={onClose}>&times;</button>
        </div>
        {cart.length === 0 ? (
          <div style={{ padding: '3rem 1rem', textAlign: 'center', color: '#64748b' }}>
            <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>🛒</div>
            <p>Your shopping cart is empty.</p>
          </div>
        ) : (
          <>
            <div className="cart-items">
              {cart.map((item) => (
                <div key={item.id} className="cart-item">
                  <img src={item.image} alt={item.title} />
                  <div className="item-details">
                    <h4>{item.title}</h4>
                    <p className="item-price">₹{item.price.toLocaleString('en-IN')}</p>
                    <div className="quantity-controls">
                      <button onClick={() => updateQuantity(item.id, item.quantity - 1)}>-</button>
                      <span>{item.quantity}</span>
                      <button onClick={() => updateQuantity(item.id, item.quantity + 1)}>+</button>
                    </div>
                  </div>
                  <button className="remove-btn" onClick={() => removeFromCart(item.id)} title="Remove">
                    🗑️
                  </button>
                </div>
              ))}
            </div>
            <div className="drawer-footer">
              <div className="total-row">
                <span>Subtotal:</span>
                <strong>₹{totalPrice.toLocaleString('en-IN')}</strong>
              </div>
              <button className="checkout-btn" onClick={() => alert('Proceeding to Checkout!')}>
                PROCEED TO CHECKOUT
              </button>
              <button className="btn-clear" onClick={clearCart} style={{ width: '100%', marginTop: '0.5rem' }}>
                Clear Cart
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
