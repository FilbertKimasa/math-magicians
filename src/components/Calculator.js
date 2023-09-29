import React, { useState } from 'react';
import Buttons from './Buttons';
import calculate from '../logic/Calculate';
import './Calculator.css';

const Calculator = () => {
  const [display, setDisplay] = useState({
    total: null,
    next: null,
    operation: null,
  });

  const btnClick = (btnValue) => {
    setDisplay(calculate(display, btnValue));
  };

  return (
    <div className="main-container">
      <div className="display">
        {display.total || display.operation || display.next || 0}
      </div>
      <Buttons btnClick={btnClick} />
    </div>
  );
};

export default Calculator;
