
# 🛒 Ecommerce Website  

![Tech Stack](https://img.shields.io/badge/Frontend-React-blue) ![Backend](https://img.shields.io/badge/Backend-Node.js-green) ![Database](https://img.shields.io/badge/Database-MongoDB-brightgreen) ![UI](https://img.shields.io/badge/UI-Material%20UI-blueviolet)

This is a **full-stack ecommerce platform** built using **React**, **Node.js**, and **MongoDB**, showcasing modern front-end and back-end development practices. The project includes key ecommerce features such as product catalogue, cart management, user authentication, routing, and **integrated Paytm payment gateway**.

---

## 🚀 Project Overview

This project is a comprehensive **Ecommerce Website** designed and developed by **Samriddh Singh**, a **Front-end Developer with 2 years of professional experience**. It highlights my expertise in:

- **Modern React development (Functional Components, Hooks, Routing)**  
- **State Management (useState, useEffect, useReducer)**  
- **Material UI for sleek and responsive design**  
- **Custom CSS for additional styling needs**  
- **Node.js & Express backend with MongoDB integration**  
- **REST API handling & asynchronous data fetching**  
- **Payment Gateway Integration (Paytm)**  

---

## 📑 Features Implemented

✅ Product Listing & Detailed View  
✅ Add to Cart & Quantity Management  
✅ Remove from Cart  
✅ Dynamic Routing with React Router  
✅ User Authentication (Login/Signup)  
✅ Secure REST API with Node.js & Express  
✅ MongoDB as Database  
✅ Paytm Payment Gateway Integration  
✅ Clean Material UI Layout  
✅ Error Handling & Toast Notifications  
✅ Fully Responsive Design  

---

## 🛠️ Tech Stack

| Layer        | Technology               |
|--------------|--------------------------|
| Frontend     | React, Material UI, CSS |
| Backend      | Node.js, Express         |
| Database     | MongoDB (Mongoose ODM)   |
| Payment      | Paytm Payment Gateway    |
| Version Control | Git & GitHub         |
| Tools Used   | VS Code, Postman         |

---

## 📂 Project Structure (Frontend)

```
src/
│-- components/
│   │-- Navbar.jsx
│   │-- ProductCard.jsx
│   │-- CartItem.jsx
│
│-- pages/
│   │-- Home.jsx
│   │-- ProductDetail.jsx
│   │-- Cart.jsx
│   │-- Login.jsx
│
│-- api/
│   │-- productApi.js
│   │-- authApi.js
│
│-- App.js
│-- index.js
```

---

## 💡 Good Practices & Clean Code Highlights

✅ **Component-based Architecture** – UI is broken into modular, reusable components.  
✅ **Separation of Concerns** – API calls are abstracted into dedicated files in the `api` folder.  
✅ **Proper Error Handling** – Comprehensive error messages for API failures.  
✅ **Responsive UI** – Mobile-first approach using Material UI's responsive grid system.  
✅ **Folder Structuring** – Well-structured folders for scalability.  
✅ **Consistent Naming** – Files, functions, and components follow standard naming conventions.  
✅ **Minimal Inline Styling** – Focus on reusable styles via MUI and external CSS.  
✅ **Secure Payment Handling** – Integrated Paytm gateway with secure backend communication.

---

## 🧑‍💻 How to Set Up Locally

### 1️⃣ Clone the Repository
```bash
git clone https://github.com/saketbyte/ecommerce-website.git
cd ecommerce-website
```

### 2️⃣ Install Frontend Dependencies
```bash
cd frontend
npm install
```

### 3️⃣ Install Backend Dependencies
```bash
cd ../backend
npm install
```

### 4️⃣ Set Up Environment Variables

Create a `.env` file in the `backend` folder with the following:

```
MONGO_URI=your_mongodb_connection_string
PORT=5000
JWT_SECRET=your_secret_key
PAYTM_MID=your_paytm_merchant_id
PAYTM_KEY=your_paytm_merchant_key
PAYTM_WEBSITE=WEBSTAGING
PAYTM_CHANNEL_ID=WEB
PAYTM_INDUSTRY_TYPE=Retail
```

### 5️⃣ Run Backend Server
```bash
cd backend
npm run dev
```

### 6️⃣ Run Frontend
```bash
cd frontend
npm run dev
```

### 7️⃣ Access the App
Open `http://localhost:5173` in your browser.

---


## 🔥 Future Enhancements

- **Replace Paytm with Razorpay for a better payment experience**  
- **Add Pagination in Product Listing**  
- **Add Wishlist Functionality**  
- **Admin Panel for Product Management**  
- **Dark Mode Support**

---

## 🧰 Requirements

- Node.js v16+  
- MongoDB (local or Atlas)  
- NPM v8+

---

## ✨ Author

**Samriddh Singh**  
Frontend Developer (2 years experience)  
[LinkedIn](https://www.linkedin.com/in/saketbyte)  
[GitHub](https://github.com/saketbyte)

---

