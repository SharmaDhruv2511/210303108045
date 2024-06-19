import React, { useState } from 'react';
import axios from 'axios';

const AverageCalculator = () => {
  const [response, setResponse] = useState(null);
  const [error, setError] = useState(null);

  const apiUrls = {
    primes: 'http://localhost:4000/primes',
    fibo: 'http://localhost:4000/fibo',
    even: 'http://localhost:4000/even',
    rand: 'http://localhost:4000/rand'
  };

  const fetchData = async (type) => {
    setError(null);
    setResponse(null);

    try {
      const res = await axios.get('http://20.244.56.144/test/even');
      const numbers = res.data;
      const average = numbers.reduce((a, b) => a + b, 0) / numbers.length;
      setResponse({ numbers, average });
    } catch (err) {
      setError('An error occurred while fetching data.');
      console.error('Error fetching data:', err.message);
    }
  };

  return (
    <div>
      <h1>Average Calculator</h1>
      <div>
        <button onClick={() => fetchData('primes')}>Get Primes</button>
        <button onClick={() => fetchData('fibo')}>Get Fibonacci</button>
        <button onClick={() => fetchData('even')}>Get Even Numbers</button>
        <button onClick={() => fetchData('rand')}>Get Random Numbers</button>
      </div>
      {error && <p>{error}</p>}
      {response && (
        <div>
          <h2>Response:</h2>
          <p>Numbers: {response.numbers.join(', ')}</p>
          <p>Average: {response.average}</p>
        </div>
      )}
    </div>
  );
};

export default AverageCalculator;
