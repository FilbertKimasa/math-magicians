import React from 'react';
import PropTypes from 'prop-types';

function Buttons({ btnClick }) {
  return (
    <>
      <button type="button" className="grid-box" onClick={() => btnClick('AC')}>
        AC
      </button>
      <button
        type="button"
        className="grid-box"
        onClick={() => btnClick('+/-')}
      >
        +/-
      </button>
      <button type="button" className="grid-box" onClick={() => btnClick('%')}>
        %
      </button>
      <button
        type="button"
        className="grid-box left"
        onClick={() => btnClick('÷')}
      >
        ÷
      </button>
      <button type="button" className="grid-box" onClick={() => btnClick('7')}>
        7
      </button>
      <button type="button" className="grid-box" onClick={() => btnClick('8')}>
        8
      </button>
      <button type="button" className="grid-box" onClick={() => btnClick('9')}>
        9
      </button>
      <button
        type="button"
        className="grid-box left"
        onClick={() => btnClick('x')}
      >
        x
      </button>
      <button type="button" className="grid-box" onClick={() => btnClick('4')}>
        4
      </button>
      <button type="button" className="grid-box" onClick={() => btnClick('5')}>
        5
      </button>
      <button type="button" className="grid-box" onClick={() => btnClick('6')}>
        6
      </button>
      <button
        type="button"
        className="grid-box left"
        onClick={() => btnClick('-')}
      >
        -
      </button>
      <button type="button" className="grid-box" onClick={() => btnClick('1')}>
        1
      </button>
      <button type="button" className="grid-box" onClick={() => btnClick('2')}>
        2
      </button>
      <button type="button" className="grid-box" onClick={() => btnClick('3')}>
        3
      </button>
      <button
        type="button"
        className="grid-box left"
        onClick={() => btnClick('+')}
      >
        +
      </button>
      <button
        type="button"
        className="grid-box btn-zero"
        onClick={() => btnClick('0')}
      >
        0
      </button>
      <button type="button" className="grid-box" onClick={() => btnClick('.')}>
        .
      </button>
      <button
        type="button"
        className="grid-box left"
        onClick={() => btnClick('=')}
      >
        =
      </button>
    </>
  );
}
Buttons.propTypes = {
  btnClick: PropTypes.func.isRequired,
};

export default Buttons;
