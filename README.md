# Student Management REST API

Lab Assignment 2 – Web Dev III (Node.js & Express Backend)

## Technology
- Node.js
- Express.js
- Postman
- Array and JSON data only
- No MongoDB/MySQL
- No Mongoose

## Project Structure

```text
student-management-rest-api/
├── app.js
├── package.json
├── README.md
├── routes/
│   └── studentRoutes.js
├── middleware/
│   └── logger.js
└── data/
    └── students.js
```

## How to Run

1. Install Node.js.
2. Open this folder in VS Code.
3. Open the terminal.
4. Run:

```bash
npm install
npm start
```

5. Server will run at:

```text
http://localhost:3000
```

## APIs

### 1. Get all students
GET `http://localhost:3000/students`

### 2. Get student by ID
GET `http://localhost:3000/students/1`

### 3. Add student
POST `http://localhost:3000/students`

Body → raw → JSON:

```json
{
  "name": "Khushi Singh",
  "age": 21,
  "course": "B.Tech CSE AI/ML"
}
```

### 4. Update student
PUT `http://localhost:3000/students/1`

Body → raw → JSON:

```json
{
  "name": "Rahul Updated",
  "age": 21,
  "course": "B.Tech CSE AI/ML"
}
```

### 5. Delete student
DELETE `http://localhost:3000/students/1`

## Status Codes

- 200 – Success
- 201 – Created
- 400 – Bad Request
- 404 – Not Found
- 500 – Internal Server Error

## Postman Testing

Test all five required APIs:
- GET /students
- GET /students/:id
- POST /students
- PUT /students/:id
- DELETE /students/:id

The custom logger prints each request in the terminal.
"# web-assignment-2" 
