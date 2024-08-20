// Import required modules
const express = require("express");
const dotenv = require("dotenv");

// Load environment variables from .env file
dotenv.config();

// Create an Express application
const app = express();
const port = process.env.PORT || 3000;

// Health check route
app.get("/health", (req, res) => {
  res.status(200).json({ status: "UP" });
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
