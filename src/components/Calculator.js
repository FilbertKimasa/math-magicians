import React from 'react';
import Buttons from './Buttons';
import './Calculator.css';

const Calculator = () => (
  <div className="main-container">
    <input type="text" className="grid-box display" value="0" />
    <Buttons />
  </div>
);

export default Calculator;
