# Week 09 — Modern E-Commerce Storefront

A responsive e-commerce web application engineered with **React 19**, **Vite**, and the **React Context API**, featuring a slide-in shopping cart drawer, quick-view product modal, real-time toast notifications, and category filter strips.

---

## 🌟 Key Features
- **Global Cart Management (Context API):** Centralized `CartContext` providing `cartItems`, `addToCart`, `removeFromCart`, `updateQuantity`, and `clearCart` methods across all components without prop drilling.
- **Slide-in Cart Drawer:** Interactive slide-out cart sidebar with line-item pricing, quantity adjusters, and total checkout calculations.
- **Product Details Modal:** High-resolution quick view modal for inspection of product specs, pricing, and ratings.
- **Dynamic Category Strip:** Auto-generated category filters (`Audio`, `Wearables`, `Accessories`, `Peripherals`) derived dynamically using `Set` deduplication.
- **Live Search Filtering:** Real-time search by product title and category.
- **Toast Notifications:** Timed toast alerts confirming item addition and quantity changes.

---

## 🛠️ Architecture & Tech Stack
- **Framework:** React 19
- **State Management:** React Context API (`createContext`, `useContext`, `useReducer`/`useState`)
- **Performance Optimization:** `useMemo` for category generation and filtered product caching
- **Build System:** Vite

---

## 📁 Component Tree
```text
CartProvider
└── App
    ├── Navbar (Logo, search bar, active cart badge count)
    ├── CategoryStrip (Deduplicated category selector)
    ├── Notification (Timed toast alert popup)
    ├── HeroBanner (Promotional marketing banner)
    ├── ProductCard (Product image, price, rating, add-to-cart button)
    ├── ProductModal (In-depth quick view dialog)
    └── CartDrawer (Slide-in drawer with checkout totals)
```

---

## 💻 Getting Started
```bash
# 1. Install dependencies
npm install

# 2. Run dev server
npm run dev

# 3. Create production build
npm run build
```

---

## 👤 Author
- **Developer:** Amit Kumar Singh
- **Coursework:** NextGen Full-Stack Web Development Program
