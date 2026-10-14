# Week 15: MongoDB & Mongoose Database Integration

A persistent, production-grade REST API utilizing **Mongoose ODM** with MongoDB for task state persistence, schema validation, and error management.

## 🚀 Key Features
- **Database Persistence:** Real MongoDB storage replacing in-memory arrays.
- **Mongoose Schema & Validation:** Strict data typing, required constraints, trimmed strings, and timestamps.
- **Async / Await:** Asynchronous database query execution wrapped in `try/catch` error handlers.
- **Environment Configuration:** Configurable port and connection URI via `dotenv` (`.env`).
- **REST Status Codes:** Full compliance with REST conventions (`200 OK`, `201 Created`, `400 Bad Request`, `404 Not Found`, `500 Internal Server Error`).

## 📡 REST API Endpoints
| Method | Endpoint | Description | Sample Body |
|--------|----------|-------------|-------------|
| `GET` | `/` | API status & endpoints directory | None |
| `GET` | `/tasks` | Retrieve all persistent tasks | None |
| `GET` | `/tasks/:id` | Retrieve single task by MongoDB ObjectId | None |
| `POST` | `/tasks` | Create and store a new task | `{"title": "Deploy on AWS", "description": "Setup ECS cluster", "status": "in-progress"}` |
| `PUT` | `/tasks/:id` | Update task fields with schema validation | `{"status": "completed"}` |
| `DELETE` | `/tasks/:id` | Delete task document by ObjectId | None |

## 💻 Setup & Running
1. Install dependencies:
```bash
npm install
```
2. Configure `.env`:
```bash
cp .env.example .env
```
Ensure your MongoDB local instance or MongoDB Atlas URI is set in `MONGO_URI`.

3. Start the server:
```bash
npm start
# Or for live file watching:
npm run dev
```
Server runs on `http://localhost:3000`.
