const express = require('express');
const axios = require('axios');
const cors = require('cors');

const app = express();
const port = 4000;

app.use(cors());

const apiBaseURL = 'http://20.244.56.144/test';

// Define routes
app.get('/primes', async (req, res) => {
  try {
    const response = await axios.get(`${apiBaseURL}/primes`);
    res.json(response.data);
  } catch (error) {
    console.error('Error fetching primes:', error.message);
    res.status(500).json({ error: 'An error occurred while fetching primes.' });
  }
});

app.get('/fibo', async (req, res) => {
  try {
    const response = await axios.get(`${apiBaseURL}/fibo`);
    res.json(response.data);
  } catch (error) {
    console.error('Error fetching fibo:', error.message);
    res.status(500).json({ error: 'An error occurred while fetching Fibonacci.' });
  }
});

app.get('/even', async (req, res) => {
  try {
    const response = await axios.get(`${apiBaseURL}/even`);
    res.json(response.data);
  } catch (error) {
    console.error('Error fetching even:', error.message);
    res.status(500).json({ error: 'An error occurred while fetching even numbers.' });
  }
});

app.get('/rand', async (req, res) => {
  try {
    const response = await axios.get(`${apiBaseURL}/rand`);
    res.json(response.data);
  } catch (error) {
    console.error('Error fetching rand:', error.message);
    res.status(500).json({ error: 'An error occurred while fetching random numbers.' });
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Proxy server is running on http://localhost:${port}`);
});
