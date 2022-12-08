import { useState } from 'react';
import './calculator.scss';
import calculate from '../logic/calculate';

const Calculator = () => {
  const initialState = {
    total: null,
    next: null,
    operation: null,
  };

  const [result, setResult] = useState(initialState);

  const handleBtn = (btn) => {
    setResult((object) => calculate(object, btn));
  };

  const { total, operation, next } = result;
  return (
    <div className="calculator-wrapper">
      <h1>Let&apos;s do some math!</h1>
      <div className="btn-container">
        <div className="screen">
          <p>
            <span>{total}</span>
            <span>{operation}</span>
            <span>{next}</span>
          </p>
        </div>

        <button
          id="AC"
          className="btn"
          type="button"
          onClick={(e) => handleBtn(e.target.id)}
        >
          AC
        </button>
        <button
          id="+/-"
          className="btn"
          type="button"
          onClick={(e) => handleBtn(e.target.id)}
        >
          +/-
        </button>
        <button
          id="%"
          className="btn"
          type="button"
          onClick={(e) => handleBtn(e.target.id)}
        >
          %
        </button>
        <button
          id="&divide;"
          className="btn color"
          type="button"
          onClick={(e) => handleBtn(e.target.id)}
        >
          &divide;
        </button>

        <button
          id="7"
          className="btn"
          type="button"
          onClick={(e) => handleBtn(e.target.id)}
        >
          7
        </button>
        <button
          id="8"
          className="btn"
          type="button"
          onClick={(e) => handleBtn(e.target.id)}
        >
          8
        </button>
        <button
          id="9"
          className="btn"
          type="button"
          onClick={(e) => handleBtn(e.target.id)}
        >
          9
        </button>
        <button
          id="x"
          className="btn color"
          type="button"
          onClick={(e) => handleBtn(e.target.id)}
        >
          &times;
        </button>

        <button
          id="4"
          className="btn"
          type="button"
          onClick={(e) => handleBtn(e.target.id)}
        >
          4
        </button>
        <button
          id="5"
          className="btn"
          type="button"
          onClick={(e) => handleBtn(e.target.id)}
        >
          5
        </button>
        <button
          id="6"
          className="btn"
          type="button"
          onClick={(e) => handleBtn(e.target.id)}
        >
          6
        </button>
        <button
          id="-"
          className="btn color"
          type="button"
          onClick={(e) => handleBtn(e.target.id)}
        >
          &minus;
        </button>

        <button
          id="1"
          className="btn"
          type="button"
          onClick={(e) => handleBtn(e.target.id)}
        >
          1
        </button>
        <button
          id="2"
          className="btn"
          type="button"
          onClick={(e) => handleBtn(e.target.id)}
        >
          2
        </button>
        <button
          id="3"
          className="btn"
          type="button"
          onClick={(e) => handleBtn(e.target.id)}
        >
          3
        </button>
        <button
          id="&#43;"
          className="btn color"
          type="button"
          onClick={(e) => handleBtn(e.target.id)}
        >
          &#43;
        </button>

        <button
          id="0"
          className="btn zero"
          type="button"
          onClick={(e) => handleBtn(e.target.id)}
        >
          0
        </button>
        <button
          id="."
          className="btn"
          type="button"
          onClick={(e) => handleBtn(e.target.id)}
        >
          .
        </button>
        <button
          id="&#61;"
          className="btn color"
          type="button"
          onClick={(e) => handleBtn(e.target.id)}
        >
          &#61;
        </button>
      </div>
    </div>
  );
};

export default Calculator;
