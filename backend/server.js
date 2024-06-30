const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const itemsRouter = require("./routes/items"); // Import the items route

const app = express();
const port = 5000;

// Middleware
app.use(cors());
app.use(express.json()); // For parsing application/json

// Routes
app.use("/api/items", itemsRouter); // Register the items route

// Database connection
mongoose
  .connect("mongodb://localhost:27017/mydatabase", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Connected to MongoDB"))
  .catch((error) => console.error("Could not connect to MongoDB:", error));

// Start server
app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});
