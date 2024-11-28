# LuxeStay
This repository contains a **React web application** powered by a backend built with **Node.js**, **Express**, and **MongoDB**. It provides a modern full-stack solution for building scalable and feature-rich web applications.

---

## Features

- **Frontend**:  
  Built with **React** for a responsive and dynamic user experience. Includes routing, state management, and reusable components.

- **Backend**:  
  Powered by **Node.js** and **Express**, featuring robust APIs for secure data interaction.

- **End to End Testing**
  Integrated End to End Tests using Playwright

- **Database**:  
  **MongoDB** is used as the primary database, leveraging its flexibility and scalability.

- **Authentication**:  
  Token-based authentication (e.g., JWT) for secure user access.

- **Error Handling**:  
  Centralized error management for backend APIs.

- **Styling**:  
  Modern styling with **CSS modules** and libraries like **Tailwind CSS**.

---

## Prerequisites

Before running the application, ensure you have the following installed:

- **Node.js** (version 14.x or later)
- **npm** or **yarn**
- **MongoDB** (running locally or a connection string for a cloud instance)

---

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/krish5726/LuxeStay.git
   cd your-repo
   ```

2. Install dependencies for both frontend, backend and e2e-tests:
   ```bash
   # Navigate to the backend directory and install dependencies
   cd backend
   npm install

   # Navigate to the frontend directory and install dependencies
   cd ../frontend
   npm install

   # Navigate to the e2e-test directory and install dependencies
   cd ../e2e-tests
   npm install
   npx install playwright
   ```

---

## Configuration

1. **Backend**:
   - Create a `.env` file in the `backend` directory with the following variables:
     ```env
      MONGODB_CONNECTION_STRING = YOUR_MONGO_URI
      CLOUDINARY_CLOUD_NAME = YOUR_CLOUDINARY_NAME
      CLOUDINARY_API_KEY = YOUR_CLOUDINARY_API_KEY
      CLOUDINARY_API_SECRET = YOUR_CLOUDINARY_API_SECRET
      FRONTEND_URL = YOUR_FRONTEND_URL
      JWT_SECRET_KEY = SOME_RANDOM_STRING
      NODE_ENV = "development"
      STRIPE_API_KEY = YOUR_STRIPE_SECRET_KEY
      STRIPE_PUB_KEY = YOUR_STRIPE_PUBLIC_KEY
     
     ```

2. **Frontend**:
   - Create a `.env` file in the `frontend` directory with the following variables::
     ```env
      VITE_API_BASE_URL = BACKEND_URL
      VITE_STRIPE_PUB_KEY = YOUR_STRIPE_PUBLIC_KEY
     ```

---

## Running the Application

1. **Start the Backend**:
   ```bash
   cd backend
   npm start
   ```

   This will start the backend server on `http://localhost:3000`.

2. **Start the Frontend**:
   ```bash
   cd frontend
   npm run dev
   ```

   This will start the React development server on `http://localhost:5173`.

3. **Run Tests**
   ```bash
   cd e2e-tests
   npx playwright test tests/auth.spec.ts
   ```

---

## Project Structure

### Frontend (`/frontend`)
- **`src/`**: Contains React components, routes, and services.
  - `components/`: Reusable UI components.
  - `contexts/`: Reusable contexts.
  - `forms/`: Different forms used all around the application.
  - `pages/`: Page-level components for routing.

### Backend (`/backend`)
- **`models/`**: Mongoose schemas for MongoDB collections.
- **`routes/`**: API endpoints.
- **`middlewares/`**: Authentication, error handling, and other middlewares.

---

## Available Scripts

### Backend
- **`npm start`**: Start the backend in production mode.

### Frontend
- **`npm run dev`**: Build the React app for production.

---


## Contributing

1. Fork the repository.
2. Create a new feature branch:
   ```bash
   git checkout -b feature/your-feature
   ```
3. Commit your changes:
   ```bash
   git commit -m "Add your feature"
   ```
4. Push to your branch:
   ```bash
   git push origin feature/your-feature
   ```
5. Open a pull request.

---


## Acknowledgments

- [React](https://reactjs.org/)
- [Node.js](https://nodejs.org/)
- [Express](https://expressjs.com/)
- [MongoDB](https://www.mongodb.com/)
