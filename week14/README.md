# Week 14: Express.js Task Management REST API

A production-style RESTful API built with **Express.js** providing complete CRUD (Create, Read, Update, Delete) capabilities.

## 🚀 Key Features
- **Express.js Framework:** Clean route structuring and middleware pipeline.
- **Full CRUD Capabilities:** Add, query, edit, and delete task items.
- **JSON Request Parsing:** Integrated `express.json()` middleware.
- **Input Validation:** Required field checks and appropriate HTTP 400 responses.
- **REST Status Codes:** Correct utilization of `200 OK`, `201 Created`, `400 Bad Request`, and `404 Not Found`.

## 📡 REST API Endpoints
| Method | Endpoint | Description | Sample Body |
|--------|----------|-------------|-------------|
| `GET` | `/` | API status & endpoint directory | None |
| `GET` | `/tasks` | Retrieve all tasks | None |
| `GET` | `/tasks/:id` | Retrieve single task by numeric ID | None |
| `POST` | `/tasks` | Create a new task | `{"title": "Buy Milk", "description": "2% Milk", "status": "pending"}` |
| `PUT` | `/tasks/:id` | Update task fields | `{"status": "completed"}` |
| `DELETE` | `/tasks/:id` | Delete task by ID | None |

## 💻 Running the Server
```bash
npm install
npm start
# Or for live file watching:
npm run dev
```
Default URL: `http://localhost:3000`.
