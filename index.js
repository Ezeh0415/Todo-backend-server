// server/index.js
require("dotenv").config();
const express = require("express");
const cors = require("cors");
const path = require("path");
const connectDB = require("./config");
const router = require("./Router");
const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
// If you want more control:
app.options('*', cors()); // handle preflight for all routes
app.use(express.json());

// conect to db
connectDB();

// file routers setup
app.use(router);

// Start the server
app.listen(PORT, () => {
  console.log(
    `Server running on http://localhost:${PORT} path ${path.join(
      __dirname,
      "client",
      "dist"
    )}`
  );
});
