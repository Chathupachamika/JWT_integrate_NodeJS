# JWT Authentication System 🔐
A full-stack authentication system built with React + Vite for frontend and Node.js + Express for backend, featuring JWT-based secure authentication.

![GitHub](https://img.shields.io/github/license/Chathupachamika/jwt-auth)
![Node.js Version](https://img.shields.io/badge/node-%3E%3D14.0.0-brightgreen)
![React Version](https://img.shields.io/badge/react-%5E18.0.0-blue)
![MongoDB](https://img.shields.io/badge/mongodb-v5.0+-green)

---
## 📋 Table of Contents
- [Features](#-features)
- [Demo](#-demo)
- [Prerequisites](#-prerequisites)
- [Installation](#-installation)
- [Tech Stack](#%EF%B8%8F-tech-stack)
- [Project Structure](#-project-structure)
- [Development](#-development)
- [Environment Variables](#%EF%B8%8F-environment-variables)
- [API Documentation](#-api-documentation)
- [Security Features](#-security-features)
- [Frontend Features](#-frontend-features)
- [Customization](#-customization)
- [Testing](#-testing)
- [Deployment](#-deployment)
- [Contributing](#-contributing)
- [Code of Conduct](#-code-of-conduct)
- [License](#-license)
- [Author](#-author)
- [Acknowledgments](#-acknowledgments)

---
## 🌟 Features
- 🔒 **Secure Authentication**: JWT-based authentication system
- 💻 **Modern Stack**: React, Vite, Node.js, Express, and MongoDB
- 🎨 **Material UI**: Polished user interface with Material Design
- 🔐 **Protected Routes**: Secure route handling with React Router
- 📱 **Responsive Design**: Works seamlessly on all devices
- ⚡ **Fast Development**: Powered by Vite's lightning-fast build tool
- 🔄 **Auto Refresh Tokens**: Implements JWT refresh token mechanism
- 📝 **Detailed Logging**: Comprehensive error and access logging
- 🛡️ **Security Best Practices**: Implements OWASP security guidelines

---
## 🎮 Demo
- **Live Demo**: [JWT Auth Demo](your-demo-link)
- **Test Credentials**:
  - Username: `demo_user`
  - Password: `demo123`

---
## 📌 Prerequisites
- Node.js (>= 14.0.0)
- MongoDB (>= 5.0)
- npm or yarn
- Git

---
## 📦 Installation
1. **Clone the repository**
   ```bash
   git clone https://github.com/Chathupachamika/jwt-auth.git
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

4. **Set up environment variables**
   ```bash
   cp .env.example .env
   # Edit .env with your configuration
   ```

5. **Initialize the database**
   ```bash
   npm run init-db
   ```

---
## 🛠️ Tech Stack
### Frontend
- **React** (^18.0.0): UI library
- **Vite** (^4.0.0): Build tool and development server
- **Material UI** (^5.0.0): Component library
- **Axios** (^1.0.0): HTTP client
- **React Router** (^6.0.0): Navigation and routing

### Backend
- **Node.js** (^14.0.0): Runtime environment
- **Express** (^4.18.0): Web framework
- **MongoDB** (^5.0.0): Database
- **JWT** (^9.0.0): Authentication mechanism
- **bcrypt** (^5.0.0): Password hashing
- **Winston** (^3.0.0): Logging
- **Morgan** (^1.0.0): HTTP request logging

### Development Tools
- **ESLint**: Code linting
- **Prettier**: Code formatting
- **Jest**: Testing framework
- **Supertest**: HTTP testing
- **Husky**: Git hooks

---
## 📂 Project Structure
```plaintext
jwt-auth/
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   │   ├── Login.jsx
│   │   │   └── Home.jsx
│   │   ├── services/
│   │   │   └── auth.service.js
│   │   ├── hooks/
│   │   │   └── useAuth.js
│   │   ├── utils/
│   │   │   └── axiosConfig.js
│   │   ├── App.jsx
│   │   └── main.jsx
│   ├── tests/
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
│   ├── config/
│   │   └── logger.js
│   ├── tests/
│   ├── app.js
│   ├── db.js
│   └── package.json
```

---
## 🚀 Development
1. **Start backend server**
   ```bash
   cd backend
   npm run dev
   ```

2. **Start frontend development server**
   ```bash
   cd frontend
   npm run dev
   ```

3. **Run tests**
   ```bash
   # Backend tests
   cd backend
   npm test

   # Frontend tests
   cd frontend
   npm test
   ```

4. **Lint code**
   ```bash
   npm run lint
   ```

---
## 🔍 Testing
### Backend Testing
- Unit tests for models
- Integration tests for API endpoints
- Authentication middleware tests
- Database operations tests

### Frontend Testing
- Component rendering tests
- Authentication flow tests
- Protected route tests
- API integration tests

---
## 📤 Deployment
### Backend Deployment
1. **Set up MongoDB Atlas cluster**
2. **Configure environment variables**
3. **Deploy to platform of choice:**
   - Heroku
   - DigitalOcean
   - AWS
   ```bash
   # Example for Heroku
   heroku create
   git push heroku main
   ```

### Frontend Deployment
1. **Build the project**
   ```bash
   npm run build
   ```
2. **Deploy to:**
   - Netlify
   - Vercel
   - AWS S3

---
## 📝 API Documentation
### Authentication Endpoints
- **POST /api/user/register**
  ```json
  {
    "username": "string",
    "password": "string"
  }
  ```
- **POST /api/user/login**
  ```json
  {
    "username": "string",
    "password": "string"
  }
  ```
- **GET /api/student**
  - Headers: `Authorization: Bearer <token>`

---
## 👥 Author
**Chathupa Chamika**
- GitHub: [@Chathupachamika](https://github.com/Chathupachamika)
- LinkedIn: [Chathupa Chamika](your-linkedin)
- Portfolio: [Portfolio](your-portfolio)

---
## 🤝 Contributing
1. Fork the repository
2. Create your feature branch (`git checkout -b feature/NewFeature`)
3. Commit your changes (`git commit -m 'Add NewFeature'`)
4. Push to the branch (`git push origin feature/NewFeature`)
5. Open a Pull Request

---
## 📜 Code of Conduct
Please read our [Code of Conduct](CODE_OF_CONDUCT.md) to keep our community approachable and respectable.

---
## 📃 License
This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---
## 🙏 Acknowledgments
- [Material-UI](https://mui.com/) for the amazing component library
- [JWT.io](https://jwt.io/) for JWT implementation guidelines
- [MongoDB](https://www.mongodb.com/) for the robust database solution
- All contributors who have helped this project grow

---
## ⭐️ Support
If you like this project, please give it a ⭐️!

---
Made with ❤️ by Chathupa Chamika
