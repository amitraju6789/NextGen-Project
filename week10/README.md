# Week 10 — NEXAFLOW Enterprise Admin Dashboard

An enterprise-grade operational administrative dashboard built with **React 19**, **Tailwind CSS**, **Lucide Icons**, and **Recharts**, featuring executive KPI telemetry, interactive revenue analytics, searchable order registries, and real-time system logs.

---

## 🚀 Live Demo & Production Deployment
- **Live Vercel URL:** [https://week10-j7ttugeh0-portfolio-b5d9.vercel.app](https://week10-j7ttugeh0-portfolio-b5d9.vercel.app)

---

## 🌟 Key Features
- **Executive KPI Cards:** High-level metrics tracking total revenue, active orders, conversion rates, and server uptime with trend badges.
- **Interactive Recharts Visualizations:**
  - Revenue vs Expenses area charts with smooth gradient fills and responsive containers.
  - Category breakdown distribution graphs.
- **Searchable Orders Registry:** Interactive data table supporting full-text query filtering across customer names, product SKUs, and order status tags.
- **Live Infrastructure Stream:** Real-time simulated server logs displaying timestamped telemetry and gateway events.
- **Sidebar & Tab Navigation:** Collapsible responsive sidebar navigating between **Dashboard**, **Orders**, **Products**, **Analytics**, **Customers**, and **Settings**.
- **Dark Mode Enterprise Styling:** Designed with slate palette (`#0f172a`), high-contrast typography, and accessible interactive states.

---

## 🛠️ Tech Stack
- **Frontend Framework:** React 19
- **Build Tool:** Vite
- **Styling:** Tailwind CSS
- **Data Visualization:** Recharts
- **Iconography:** Lucide React
- **Cloud Hosting:** Vercel Edge Network

---

## 📁 Component Architecture
```text
src/
├── components/
│   ├── Sidebar.jsx            # Collapsible navigation drawer
│   ├── Navbar.jsx             # Top bar with search & status badges
│   ├── KpiCards.jsx           # Metric summary cards
│   ├── DashboardCharts.jsx    # Recharts responsive line & bar charts
│   ├── OrdersTable.jsx        # Data table with dynamic search
│   ├── AddProductForm.jsx     # Product creation form
│   └── SystemLogs.jsx         # Live telemetry event stream
├── data/
│   └── dashboardData.js       # Enterprise mock datasets
├── App.jsx                    # Root tab router & state coordinator
└── main.jsx                   # React 19 entry point
```

---

## 💻 Getting Started Locally
```bash
# 1. Install dependencies
npm install

# 2. Start local Vite development server
npm run dev

# 3. Compile for production
npm run build
```

---

## 👤 Author
- **Developer:** Amit Kumar Singh
- **Coursework:** NextGen Full-Stack Web Development Program
