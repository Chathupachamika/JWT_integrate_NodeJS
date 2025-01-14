# JWT Authentication System 🔐
A full-stack authentication system built with React + Vite for frontend and Node.js + Express for backend, featuring JWT-based secure authentication.

---
## 🌟 Features
- 🔒 **Secure Authentication**: JWT-based authentication system
- 💻 **Modern Stack**: React, Vite, Node.js, Express, and MongoDB
- 🎨 **Material UI**: Polished user interface with Material Design
- 🔐 **Protected Routes**: Secure route handling with React Router
- 📱 **Responsive Design**: Works seamlessly on all devices
- ⚡ **Fast Development**: Powered by Vite's lightning-fast build tool

---
## 📦 Installation
1. **Clone the repository**
   ```bash
   git clone https://github.com/Chathupachamika/JWT_integrate_NodeJS.git
   cd jwt-auth
   ```

2. **Install backend dependencies**
   ```bash
   cd backend
   npm install
   ```

3. **Install frontend dependencies**
   ```bash
   cd ../frontend
   npm install
   ```

---
## 🛠️ Tech Stack
### Frontend
- **React**: UI library
- **Vite**: Build tool and development server
- **Material UI**: Component library
- **Axios**: HTTP client
- **React Router**: Navigation and routing

### Backend
- **Node.js**: Runtime environment
- **Express**: Web framework
- **MongoDB**: Database
- **JWT**: Authentication mechanism
- **bcrypt**: Password hashing

---
## 📂 Project Structure
```plaintext
jwt-auth/
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   │   ├── Login.jsx
│   │   │   └── Home.jsx
│   │   ├── App.jsx
│   │   └── main.jsx
│   └── package.json
│
├── backend/
│   ├── middleware/
│   │   └── auth.js
│   ├── models/
│   │   └── user.js
│   ├── routers/
│   │   ├── user.js
│   │   └── student.js
│   ├── app.js
│   ├── db.js
│   └── package.json
```

---
## 🚀 Development
1. **Start backend server**
   ```bash
   cd backend
   npm start
   ```

2. **Start frontend development server**
   ```bash
   cd frontend
   npm run dev
   ```

3. **Build frontend for production**
   ```bash
   npm run build
   ```

---
## ⚙️ Environment Variables
### Backend (.env)
```plaintext
TOKEN_KEY=your-secret-token-key
RE_TOKEN_KEY=your-secret-re-token-key
PORT=3003
MONGO_URI=your-mongodb-connection-string
```

---
## 🔒 API Endpoints
### Authentication
- **POST /api/user/register**: Register new user
- **POST /api/user/login**: User login
- **GET /api/student**: Protected route (requires token)

---
## 🔐 Security Features
- Password hashing with bcrypt
- JWT token authentication
- Protected routes in both frontend and backend
- MongoDB for secure data storage
- CORS protection
- Environment variable configuration

---
## 📱 Frontend Features
- Clean and modern login interface
- Protected route navigation
- JWT token management
- Error handling and user feedback
- Loading states and animations
- Responsive design

---
## 🔧 Customization
1. **Material UI Theme**
   - Edit theme configuration in `App.jsx`
   - Customize components using Material UI's styling system

2. **API Configuration**
   - Update API endpoints in frontend components
   - Modify backend routes as needed

---
## 🤝 Contributing
Contributions are welcome! Please feel free to submit a Pull Request.

---
## 📜 License
This project is licensed under the MIT License - see the LICENSE file for details.

---
Made with ❤️ by Chathupa Chamika
