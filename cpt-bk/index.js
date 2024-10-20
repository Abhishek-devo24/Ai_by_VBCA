// index.js
const express = require('express');
const axios = require('axios');
const dotenv = require('dotenv');

// Load environment variables from .env file
dotenv.config();

// Initialize express app
const app = express();
app.use(express.json()); // To parse JSON bodies

// Your OpenAI API key from the .env file
const apiKey = process.env.OPENAI_API_KEY;

// POST endpoint to get chat response
app.post('/chat', async (req, res) => {
  const prompt = req.body.prompt;

  if (!prompt) {
    return res.status(400).send({ error: 'Prompt is required' });
  }

  try {
    const response = await axios.post(
      'https://api.openai.com/v1/completions',
      {
        model: 'gpt-3.5-turbo',
        prompt: prompt,
        max_tokens: 100
      },
      {
        headers: {
          'Authorization': Bearer ${apiKey},
          'Content-Type': 'application/json'
        }
      }
    );
 
    // Return the response from ChatGPT API
    res.send(response.data.choices[0].text);
  } catch (error) {
    console.error('Error calling OpenAI API:', error.message);
    res.status(500).send({ error: 'Something went wrong' });
  }
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(Server running on port ${PORT});
});