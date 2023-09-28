import React from 'react';
import './Calculator.css';

function Calculator() {
  return (
    <div className="main-container">
      <input type="text" className="grid-box display" value="0" />
      <button type="button" className="grid-box">
        AC
      </button>
      <button type="button" className="grid-box">
        +/-
      </button>
      <button type="button" className="grid-box">
        %
      </button>
      <button type="button" className="grid-box left">
        ÷
      </button>
      <button type="button" className="grid-box">
        7
      </button>
      <button type="button" className="grid-box">
        8
      </button>
      <button type="button" className="grid-box">
        9
      </button>
      <button type="button" className="grid-box left">
        x
      </button>
      <button type="button" className="grid-box">
        4
      </button>
      <button type="button" className="grid-box">
        5
      </button>
      <button type="button" className="grid-box">
        6
      </button>
      <button type="button" className="grid-box left">
        -
      </button>
      <button type="button" className="grid-box">
        1
      </button>
      <button type="button" className="grid-box">
        2
      </button>
      <button type="button" className="grid-box">
        3
      </button>
      <button type="button" className="grid-box left">
        +
      </button>
      <button type="button" className="grid-box btn-zero">
        0
      </button>
      <button type="button" className="grid-box">
        .
      </button>
      <button type="button" className="grid-box left">
        =
      </button>
    </div>
  );
}

export default Calculator;
