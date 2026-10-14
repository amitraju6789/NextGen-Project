# Week 08 — CineSearch Movie Explorer

An interactive movie exploration and search web application built with **React 19**, **Vite**, and external REST API data fetching via the **OMDb API**, emphasizing asynchronous data streams, loading spinners, debounce queries, and resilient error recovery states.

---

## 🌟 Key Features
- **External REST API Integration:** Real-time communication with the OMDb API (`https://www.omdbapi.com/`).
- **Interactive Search Bar:** Real-time query submission with query parameter encoding.
- **Type Filter:** Filter media by category (**All**, **Movies**, **Series**, **Episodes**).
- **Asynchronous Lifecycle Handling:**
  - **Loading State:** Clean loading spinner during network requests.
  - **Error Boundary State:** Descriptive error display with an interactive "Try Again" retry action.
  - **Empty Results State:** Helpful fallback messaging when searches yield zero matches.
- **Movie Poster Grid:** Responsive display of title, year, IMDb ID, media badge, and poster image.

---

## 🛠️ Tech Stack & Concepts
- **React 19:** `useState`, `useEffect`, `useCallback` hook optimization.
- **Async API Fetching:** Modern JavaScript `fetch` API wrapped in `try/catch/finally`.
- **Environment Variables:** Dynamic API key management via `import.meta.env.VITE_OMDB_API_KEY`.
- **Vite:** High-performance dev server and optimized production bundler.

---

## 📁 Project Architecture
```text
src/
├── components/
│   ├── SearchBar.jsx          # Input form with search trigger
│   ├── Filter.jsx             # Media type selector dropdown
│   ├── MovieCard.jsx          # Individual film card with poster & meta
│   ├── LoadingSpinner.jsx     # Animated loading indicator
│   └── ErrorMessage.jsx       # Alert box with retry trigger
├── App.jsx                    # Data fetching logic & state coordination
├── App.css                    # Dark-themed cinematic styling
└── main.jsx                   # Application entry
```

---

## 💻 Getting Started
1. Clone the repository and enter directory:
   ```bash
   cd week8
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Run the development server:
   ```bash
   npm run dev
   ```
4. Build for production:
   ```bash
   npm run build
   ```

---

## 👤 Author
- **Developer:** Amit Kumar Singh
- **Coursework:** NextGen Full-Stack Web Development Program
