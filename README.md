### 📁 `backend/README.md`

# 📒 Notes Manager – Backend

A RESTful API built with **Node.js**, **Express**, and **MongoDB** for managing personal notes and bookmarks.  
Supports creating, reading, updating, deleting (CRUD) notes and bookmarks with support for tagging, searching, and auto-fetching bookmark metadata.

---

## 🔧 Tech Stack

- **Backend:** Node.js + Express.js  
- **Database:** MongoDB  
- **Frontend:** [Notes Manager Frontend](../frontend)

## 📁 Project Structure

```markdown

backend/
├── controllers/
├── models/
├── routes/
├── utils/
├── middlewares/
├── .env
├── server.js
└── README.md

````

## 🚀 Getting Started

### Prerequisites

- Node.js ≥ 16.x  
- MongoDB installed locally or use MongoDB Atlas

### Setup

```bash
git clone https://github.com/yourusername/notes-manager-backend.git
cd notes-manager-backend
npm install
touch .env
````

### .env Example

```env
PORT=8080
MONGO_URI=mongodb://localhost:27017/notesmanager
```

### Start Server

```bash
npm start          # OR
npm run dev        # (with nodemon)
```

Server runs on: `http://localhost:8080`

---

## 📘 API Documentation

### Notes API

| Method | Endpoint        | Description                          |
| ------ | --------------- | ------------------------------------ |
| POST   | /api/notes      | Create a new note                    |
| GET    | /api/notes      | Get all notes |
| GET    | /api/notes/\:id | Get a specific note                  |
| PUT    | /api/notes/\:id | Update a note                        |
| DELETE | /api/notes/\:id | Delete a note                        |

### Bookmarks API

| Method | Endpoint            | Description                              |
| ------ | ------------------- | ---------------------------------------- |
| POST   | /api/bookmarks      | Create a new bookmark                    |
| GET    | /api/bookmarks      | Get all bookmarks |
| GET    | /api/bookmarks/\:id | Get a specific bookmark                  |
| PUT    | /api/bookmarks/\:id | Update a bookmark                        |
| DELETE | /api/bookmarks/\:id | Delete a bookmark                        |

---

## 🧪 Features

* Validation for required fields
* URL validation for bookmarks
* Auto-fetch title from bookmark URL if not provided
* Proper HTTP status codes and error handling

---

## 📂 Sample API Request

```bash
curl -X POST http://localhost:5000/api/notes \
-H "Content-Type: application/json" \
-d '{"title":"Learn Express","content":"Middlewares and routing","tags":["node","express"]}'
```

---

## 🧑‍💻 Author

Made by **Atharve Agrawal**

---

````
