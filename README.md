# Star HR Consultancys

**starHR** is a Human Resource Management System (HRMS) designed to Products Management, enhance employee management, and improve organizational efficiency.

## Features:
 - **Add Work Records**: Easily add and manage details about the work and services provided by the company.
 - **Service Management**: Track and update services offered by the company with an organized interface.
 - **Delete Functionality**: Remove outdated or unnecessary records with a simple delete option.

## Tech Stack:
- **Frontend**: React.js (Vite.js), Redux for state management
- **Backend**: Node.js, Express.js
- **Database**: MongoDB

## **Project Setup**

### **Prerequisites**
- Node.js (v14 or above)
- MongoDB (local or cloud setup)
- npm or yarn

### **Clone the repository:**
```bash
git clone https://github.com/nameissakthi/starHR.git
```

### **Navigate to the project directory**
```bash
cd starHR
```

### Install dependencies for frontend and backend separately
**Tip:** To efficiently install dependencies for frontend, admin and backend simultaneously, use split terminals.

**Install frontend dependencies**
```bash
cd starHR/frontend
npm install
```

**Install admin dependencies**
```bash
cd starHR/admin
npm install
```

**Install backend dependencies**
```bash
cd starHR/backend
npm install
```

### Environment Variables
**Backend**
- Create a `.env` file in the `backend` directory.
- Add the following variables with appropriate values

```bash
MONGODB_URI = ''    
CLOUDINARY_API_KEY = ""
CLOUDINARY_SECRET_KEY = ""
CLOUDINARY_NAME = ""
```

**Frontend & Admin**
- Create a `.env` file in the `frontend & Admin` directory
- Add the following variable:
```bash
# Backend URL (adjust if needed)
VITE_BACKEND_URL="http://localhost:4000" 
```

**Important**
- Replace all with your actual values.
- Exclude the `.env` file from version control to protect sensitive information.

**Important:**
- **Separate terminals**: Run the commands in separate terminal windows or use `split terminal` to avoid conflicts.
- **Nodemon required**: Ensure you have `nodemon` installed globally to run the backend development servers using `npm run dev`. You can install it globally using `npm install -g nodemon`.

#### Start the backend server
- Navigate to the `backend` directory: `cd backend`
- Start the server: `npm run server`
- You should see a message indicating the server is running, usually on port 4000 or you can specify it in the PORT environment variable inside `.env` file.

#### Start the frontend server:
- Navigate to the `frontend` directory: `cd frontend`
- Start the server: `npm run dev`

#### Start the admin server:
- Navigate to the `admin` directory: `cd admin`
- Start the server: `npm run dev`

## **Bonus**
Don't forget to star the repository and share your feedback!✨

## **LICENCE**
This project is licensed under the **GNU GENERAL PUBLIC LICENSE v3.0** License - see the [LICENSE](LICENSE) file for details.

## Author
- [Sakthivel](https://github.com/nameissakthi)

![GNU License](https://img.shields.io/badge/License-GNU%20v3.0-green.svg)