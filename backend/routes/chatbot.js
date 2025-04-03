const express = require("express");
const { getChatbotResponse } = require("../controllers/chatbotController");
const router = express.Router();

router.post("/ask", async (req, res) => {
  const { message } = req.body;
  if (!message) {
    return res.status(400).json({ error: "Message is required" });
  }

  try {
    const reply = await getChatbotResponse(message);
    res.json({ reply });
  } catch (error) {
    res.status(500).json({ error: "Failed to get a response from Gemini API." });
  }
});

module.exports = router;
