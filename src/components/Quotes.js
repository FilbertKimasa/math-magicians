import React, { useEffect, useState } from 'react';
import '../styles/Quote.css';

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
    <section className="section-quote">
      <h2 className="quote">Quote</h2>
      <p className="quote-content">
        {loading && 'Quote loading...'}
        {error && `Error: ${error}`}
        {quote && quote}
      </p>
    </section>
  );
}

export default Quotes;
