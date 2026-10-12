import React, { useState, useMemo } from 'react';
import { CartProvider } from './context/CartContext';
import { PRODUCTS } from './data/products';
import Navbar from './components/Navbar';
import CategoryStrip from './components/CategoryStrip';
import HeroBanner from './components/HeroBanner';
import ProductCard from './components/ProductCard';
import ProductModal from './components/ProductModal';
import CartDrawer from './components/CartDrawer';
import Notification from './components/Notification';
import './App.css';
export default function App() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const categories = useMemo(
    () => Array.from(new Set(PRODUCTS.map((p) => p.category))),
    []
  );
  const filteredProducts = useMemo(() => {
    return PRODUCTS.filter((product) => {
      const matchesSearch = product.title
        .toLowerCase()
        .includes(searchTerm.toLowerCase());
      const matchesCategory =
        selectedCategory === 'All' || product.category === selectedCategory;
      return matchesSearch && matchesCategory;
    });
  }, [searchTerm, selectedCategory]);
  return (
    <CartProvider>
      <div className="app">
        <Navbar
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
          onOpenCart={() => setIsCartOpen(true)}
        />
        <CategoryStrip
          categories={categories}
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
        />
        <Notification />
        <main className="main-content">
          <HeroBanner />
          <div className="section-title">
            <div>
              <h2>Featured Products</h2>
              <p className="sub-heading">Curated high-performance items with instant delivery</p>
            </div>
            <span className="product-count">
              Showing <strong>{filteredProducts.length}</strong> items
            </span>
          </div>
          {filteredProducts.length === 0 ? (
            <div className="empty-state">
              <h3>No matching products found</h3>
              <p>Try searching for something else like "Audio", "Smartwatch", or "Keyboard".</p>
              <button
                className="btn-add-cart"
                style={{ width: 'auto', padding: '0.75rem 1.5rem', marginTop: '1rem' }}
                onClick={() => {
                  setSearchTerm('');
                  setSelectedCategory('All');
                }}
              >
                Reset Filters
              </button>
            </div>
          ) : (
            <div className="products-grid">
              {filteredProducts.map((product) => (
                <ProductCard
                  key={product.id}
                  product={product}
                  onViewDetails={setSelectedProduct}
                />
              ))}
            </div>
          )}
        </main>
        <ProductModal
          product={selectedProduct}
          onClose={() => setSelectedProduct(null)}
        />
        <CartDrawer
          isOpen={isCartOpen}
          onClose={() => setIsCartOpen(false)}
        />
      </div>
    </CartProvider>
  );
}
