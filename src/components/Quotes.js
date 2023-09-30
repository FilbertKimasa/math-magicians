import React, { useEffect, useState } from 'react';
import './Quote.css';

function Quotes() {
  const [quote, setQuote] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('https://api.api-ninjas.com/v1/quotes?category=intelligence', {
      method: 'GET',
      headers: { 'X-Api-Key': 'rB16lee6ZvybB0ZCrsrzwQ==6odUeEwciclckq71' },
    })
      .then((response) => response.json())
      .then((data) => {
        setQuote(data[0].quote);
        setLoading(false);
      })
      .catch((error) => {
        setError(error.message);
        setLoading(false);
      });
  }, []);

  return (
    <div className="quote">
      <h2 className="qote">Quote</h2>
      <p className="qote-content">
        {loading && 'Quote loading...'}
        {error && `Error: ${error}`}
        {quote && quote}
      </p>
    </div>
  );
}

export default Quotes;
