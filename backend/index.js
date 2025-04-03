const express = require("express");
const bodyParser = require("body-parser");
const chatbotRoutes = require("./routes/chatbot");
require('dotenv').config();


const app = express();
const port = process.env.PORT || 5000;

// Middleware setup
app.use(bodyParser.json());

// Routes
app.use("/api/chatbot", chatbotRoutes);

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
