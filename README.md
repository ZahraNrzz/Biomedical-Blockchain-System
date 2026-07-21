# Biomedical Blockchain System

A simplified implementation of a blockchain-based biomedical dataset request management system inspired by the paper:

**Distributed, Immutable, and Transparent Biomedical Limited Data Set Request Management on Multi-Capacity Network**

The project demonstrates how blockchain can be integrated with a web application to provide secure and transparent management of biomedical dataset requests.

---

# Technologies

### Frontend
- React.js
- Vite
- Bootstrap
- Axios

### Backend
- Node.js
- Express.js
- MongoDB
- Mongoose
- JWT
- bcrypt

### Blockchain
- Solidity
- Hardhat
- Ethers.js

---

# Features

- User Registration & Login
- JWT Authentication
- Role-based Access (Researcher / Admin)
- Dataset Management
- Request Management
- Smart Contract Integration
- Blockchain-based Approval
- MongoDB Database

---

# Project Structure

```
Biomedical-Blockchain-System
│
├── backend
├── frontend
├── smart-contracts
└── README.md
```

---

# Database Collections

### Users

- name
- email
- password
- walletAddress
- role

### Datasets

- title
- description
- hospital
- downloadLink

### Requests

- researcher
- dataset
- status
- blockchainId
- txHash

---

# Smart Contract Functions

- addRequest()
- approveRequest()
- getRequest()
- getTotalRequests()

---

# Installation

### Backend

```bash
cd backend
npm install
npm run dev
```

Create a `.env` file:

```env
PORT=5000
MONGODB_URI=mongodb://127.0.0.1:27017/biomedical
JWT_SECRET=your_secret_key

RPC_URL=http://127.0.0.1:8545
PRIVATE_KEY=your_private_key
CONTRACT_ADDRESS=your_contract_address
```

---

### Frontend

```bash
cd frontend
npm install
npm run dev
```

---

## MongoDB

Start MongoDB server.

Create a database named:

```
biomedical
```

### Run Blockchain

```bash
npx hardhat node
npx hardhat run scripts/deploy.js --network localhost
```

---

# API

### Authentication

- POST `/api/auth/register`
- POST `/api/auth/login`

### Datasets

- GET `/api/datasets`
- POST `/api/datasets`

### Requests

- GET `/api/requests`
- POST `/api/requests`
- PUT `/api/requests/approve/:id`

---

# Project Workflow

```
Researcher Login
        ↓
View Datasets
        ↓
Submit Request
        ↓
Save Request in MongoDB
        ↓
Record Request on Blockchain
        ↓
Admin Reviews Request
        ↓
Approve Request
        ↓
Blockchain Transaction
        ↓
Update MongoDB
```

---


# Educational Purpose

This project was developed as a university project for the **Advanced Database Engineering** course.

The objective is to demonstrate the integration of:

- Blockchain
- MongoDB
- REST APIs
- Smart Contracts
- Distributed Data Management

within a biomedical dataset management system.

The implementation is intentionally simplified for educational purposes while preserving the core concepts introduced in the original research paper.

---


# Notes

This project is a simplified educational implementation based on the original research paper. It combines MongoDB for data storage with Ethereum smart contracts to provide a transparent and immutable biomedical dataset request management system.
