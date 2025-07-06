# 🛒 AdaptNXT E-commerce API

A simple and modular backend API for an e-commerce platform built using **Node.js**, **Express**, and **MongoDB**.  
Developed as part of the **Backend Developer Intern Assignment** at **AdaptNXT**.

---

## 🔧 Features

-  User Authentication (Register/Login)
-  Role-based Access (Admin & Customer)
-  Product Management (CRUD for Admin)
-  Cart Operations (Add, Update, Remove Items)
-  Order Placement from Cart
-  Secure Routes with JWT
-  Clean Codebase (MVC structure)
-  Simple Frontend UI (Optional)
-  Postman Collection for API Testing

---

## 📁 Project Structure

adaptnxt-ecommerce-api/
│
├── controllers/ # Request logic
├── models/ # MongoDB Schemas
├── routes/ # API Endpoints
├── middleware/ # Auth middleware
├── frontend/ # Basic HTML UI
├── .env.example # Environment template
├── server.js # App entry point
├── package.json
└── README.md


## 🚀 Getting Started

### 1. Clone the repository


git clone https://github.com/SundeepKumar-24/ecommerce_api_nodejs_adaptnxt.git
cd ecommerce_api_nodejs_adaptnxt
2. Install dependencies -npm install
3. Configure environment variables
Create a .env file in the root directory.
Use .env.example as reference:

env
Copy
Edit
PORT=5000
MONGO_URI=mongodb://localhost:27017/adaptnxt_ecom
JWT_SECRET=your_jwt_secret
4. Run MongoDB locally
bash
mongod
5. Start the development server
bash
npm start
Server runs at: http://localhost:5000

🛠 Tech Stack
Backend: Node.js, Express.js

Database: MongoDB + Mongoose

Authentication: JWT, bcryptjs

Frontend: HTML + JS (Optional)

Dev Tools: Nodemon, dotenv, Postman

👨‍💻 Author
Sundeep Kumar
GitHub Profile

📢 Submission
This project is built for the AdaptNXT Backend Developer Intern Assignment.
It fulfills all mandatory requirements, including authentication, role access, cart/order flows, and optional frontend integration.
