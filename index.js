// server/index.js
require("dotenv").config();

const express = require("express");
const cors = require("cors");
const path = require("path");

const connectDB = require("./config");
const router = require("./Router");

const PORT = process.env.PORT || 5000;
const app = express();

connectDB();

// Use CORS middleware for normal requests
app.use(cors({
  origin: '*', // Replace with your frontend URL for security in production
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
}));

// Custom middleware to handle OPTIONS preflight requests manually
app.use((req, res, next) => {
  if (req.method === 'OPTIONS') {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET,POST,PUT,DELETE,OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    return res.sendStatus(204);
  }
  next();
});

app.use(express.json());

app.use(router);

// Optional static serving (uncomment if needed)
// app.use(express.static(path.join(__dirname, "client", "dist")));

app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
