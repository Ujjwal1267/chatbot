
// const axios = require("axios");

// // Function to handle the chat request to Gemini API
// const getChatbotResponse = async (message) => {
//   try {
//     const response = await axios.post(
//       // `https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent`,
//       `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${GEMINI_API_KEY}`,
//       {
//         contents: [
//           {
//             parts: [{ text: message }],
//           },
//         ],
//       },
//       {
//         headers: {
//           "Content-Type": "application/json",
//         },
//         params: {
//           key: process.env.GEMINI_API_KEY,
//         },
//       }
//     );
//     return response.data.candidates[0].content.parts[0].text;
//   } catch (error) {
//     console.error("Error with Gemini API:", error.message);
//     throw error;
//   }
// };

// module.exports = { getChatbotResponse };




const axios = require("axios");

// Function to handle the chat request to Gemini API
const getChatbotResponse = async (message) => {
  try {
    // Ensure that GEMINI_API_KEY is properly set in your environment variables
    const apiKey = process.env.GEMINI_API_KEY; // Access the API key from environment variables

    if (!apiKey) {
      throw new Error("GEMINI_API_KEY is not defined in environment variables.");
    }

    // Make the POST request to the Gemini API
    const response = await axios.post(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent`,  // Correct API endpoint
      {
        contents: [
          {
            parts: [{ text: message }],
          },
        ],
      },
      {
        headers: {
          "Content-Type": "application/json",
        },
        params: {
          key: apiKey,  // Use the API key in the params
        },
      }
    );

    // Return the chatbot response text
    return response.data.candidates[0].content.parts[0].text;
  } catch (error) {
    // Handle and log errors from the API request
    console.error("Error with Gemini API:", error.message);
    throw error;
  }
};

module.exports = { getChatbotResponse };
