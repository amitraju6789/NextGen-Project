# Week 13: Node.js Server & HTTP Fundamentals

A native Node.js HTTP server implementing modular request routing, status code handling, and JSON responses without external web frameworks.

## 🚀 Features
- **Built-in HTTP Module:** Pure Node.js `http.createServer` implementation.
- **Custom URL Routing:** Dynamic route matching for `/`, `/about`, and `/api/data`.
- **404 Handling:** Fallback handler for undefined routes with standard JSON error structures.
- **Header Management:** Proper `Content-Type: application/json` headers and HTTP response status codes.

## 📡 Endpoints
| Method | Route | Description |
|--------|-------|-------------|
| `GET` | `/` | Welcome message & server metadata |
| `GET` | `/about` | Architecture description |
| `GET` | `/api/data` | Sample syllabus topics array |

## 💻 Running the Server
```bash
npm start
# Or for live file watching:
npm run dev
```
Server runs by default on `http://localhost:3000`.
