# Week 12: Production Deployment & GitHub Workflows (CI/CD)

An enterprise-ready production deployment implementation featuring automated **GitHub Actions CI/CD workflows**, **Vercel edge hosting**, and multi-stage **Docker containerization**.

## 🚀 Key Architectural Features
- **GitHub Actions Automation (`.github/workflows/ci-cd.yml`):**
  - Triggered automatically on push to `main` and on pull requests.
  - Multi-version Node.js test matrix (Node 18.x, 20.x).
  - Automated dependency verification, code linting, and production asset compilation.
- **Production Edge Hosting:**
  - Configured for Vercel with SPA routing fallbacks and immutable caching headers (`vercel.json`).
- **Containerization Architecture:**
  - Multi-stage `Dockerfile` creating minimal footprint Alpine Nginx production images.
  - `docker-compose.yml` for unified local and production container orchestration.
- **Interactive Production Hub:**
  - Live pipeline status visualizer and telemetry log streaming interface built with React 19 and Vite.

## 🛠️ Tech Stack
- **Build System:** Vite 6, React 19
- **Deployment Platform:** Vercel Edge Network
- **CI/CD Orchestration:** GitHub Actions Workflows
- **Containerization:** Docker, Docker Compose, Nginx Alpine

## 💻 Local Execution & Container Testing
### Run with Node/Vite:
```bash
npm install
npm run dev
# Production build:
npm run build
```

### Run with Docker Compose:
```bash
docker compose up -d --build
```
Navigate to `http://localhost:8080`.
