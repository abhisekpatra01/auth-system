# 🔐 Secure Authentication System

![Node.js](https://img.shields.io/badge/Node.js-18.x-green)
![Express](https://img.shields.io/badge/Express-4.x-lightgrey)
![MongoDB](https://img.shields.io/badge/MongoDB-6.x-green)
![JWT](https://img.shields.io/badge/JWT-Auth-blue)

A production-ready authentication system featuring JWT, OAuth 2.0 (Google/GitHub), and security best practices.

## 🚀 Features

- **User Authentication**
  - JWT-based registration/login
  - Password hashing with bcrypt
  - Email verification flow
- **Social Login**
  - Google OAuth 2.0
  - GitHub OAuth
- **Security**
  - Rate limiting (100 requests/15min)
  - Helmet.js HTTP headers
  - CSRF protection
  - Suspicious activity logging

## 📦 Project Structure
auth-system/
├── config/ # OAuth strategies
├── controllers/ # Route handlers
├── middleware/ # Auth & security
├── models/ # MongoDB schemas
├── routes/ # Express routers
├── services/ # Email/token services
└── utils/ # Validators/loggers

## 🛠️ Installation

1. Clone repository:
   ```bash
   git clone https://github.com/abhisekpatra01/auth-system.git
   cd auth-system
2. Install dependencies:
    npm install
3. Configure environment:
 cp .env.example .env
# Edit .env with your credentials
4.Start development server:
 npm run dev
 
## API Endpoints
Method	Endpoint	    Description
POST	/auth/register	Register new user
POST	/auth/login	    Login existing user
GET 	/auth/google	  Initiate Google OAuth
GET 	/auth/github	  Initiate GitHub OAuth

🔒 Environment Variables
 Create .env file with:
-> MONGODB_URI=mongodb://localhost:27017/auth-system
->JWT_SECRET=your_random_secret_key
-> GOOGLE_CLIENT_ID=your_google_client_id
-> GOOGLE_CLIENT_SECRET=your_google_secret
    # ... other variables
    
🧪 Testing
 Run integration tests:
 npm test
