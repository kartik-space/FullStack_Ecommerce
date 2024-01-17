E-Commerce Full Stack Application

Overview

This is a full-stack e-commerce application built using React, Node.js, Express, Multer, and MongoDB. The application includes a user-facing storefront and an admin portal for managing products.

Features

User-Facing Storefront
View detailed product information
Add products to the shopping cart
Proceed to checkout and place orders
User authentication and authorization
Admin Portal
Secure login for admin users
Add new products to the store
Edit existing product details
Remove products from the inventory
View a list of all products in the store

Technologies Used

Frontend:
React.js
Multer (for image upload)
HTML, CSS3, JavaScript (ES6+)
Backend:
Node.js
Express.js
MongoDB (for data storage)
Admin Authentication:
JSON Web Tokens (JWT) for secure admin authentication
Getting Started

Prerequisites
Node.js and npm installed on your machine
MongoDB server set up and running
Installation
Clone the repository:
bash
Copy code
git clone https://github.com/your-username/e-commerce-fullstack.git
cd e-commerce-fullstack
Install dependencies:
bash
Copy code
cd client
npm install

cd ../server
npm install
Configuration
Configure MongoDB:
Update the MongoDB connection string in server/config/db.js with your own MongoDB URL.
Set up environment variables:
Create a .env file in the server directory with the following variables:
makefile
Copy code
PORT=4000
JWT_SECRET=your_jwt_secret_key
Running the Application
Start the backend server:
bash
Copy code
cd server
npm start
The server will run on http://localhost:4000.

Start the frontend:
bash

npm start
The React app will run on http://localhost:3000.

Access the application in your browser:
User-Facing Storefront: http://localhost:3000
Admin Portal: http://localhost:5173
Usage

Visit the user-facing storefront to explore and shop for products.
Log in to the admin portal using the provided credentials to manage products.
Contributing

Contributions are welcome! Please open an issue or submit a pull request for any improvements or features you'd like to add.
