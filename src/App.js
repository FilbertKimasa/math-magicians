import React from 'react';
import Calculator from './components/Calculator';
import './App.css';
import Quotes from './components/Quotes';

function App() {
  return (
    <div className="calculator-section">
      <Calculator />
      <Quotes />
    </div>
  );
}

export default App;
