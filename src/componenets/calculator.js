import { Component } from 'react';
import './calculator.scss';
import calculate from '../logic/calculate';

class Calculator extends Component {
  constructor() {
    super();
    this.state = {
      total: 0,
      next: null,
      operation: null,
    };
    this.handleBtn = this.handleBtn.bind(this);
  }

  handleBtn = (btn) => {
    this.setState((object) => calculate(object, btn));
  };

  render() {
    const { total, operation, next } = this.state;
    return (
      <div className="calculator-wrapper">
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
            onClick={(e) => this.handleBtn(e.target.id)}
          >
            AC
          </button>
          <button
            id="+/-"
            className="btn"
            type="button"
            onClick={(e) => this.handleBtn(e.target.id)}
          >
            +/-
          </button>
          <button
            id="%"
            className="btn"
            type="button"
            onClick={(e) => this.handleBtn(e.target.id)}
          >
            %
          </button>
          <button
            id="&divide;"
            className="btn color"
            type="button"
            onClick={(e) => this.handleBtn(e.target.id)}
          >
            &divide;
          </button>

          <button
            id="7"
            className="btn"
            type="button"
            onClick={(e) => this.handleBtn(e.target.id)}
          >
            7
          </button>
          <button
            id="8"
            className="btn"
            type="button"
            onClick={(e) => this.handleBtn(e.target.id)}
          >
            8
          </button>
          <button
            id="9"
            className="btn"
            type="button"
            onClick={(e) => this.handleBtn(e.target.id)}
          >
            9
          </button>
          <button
            id="x"
            className="btn color"
            type="button"
            onClick={(e) => this.handleBtn(e.target.id)}
          >
            &times;
          </button>

          <button
            id="4"
            className="btn"
            type="button"
            onClick={(e) => this.handleBtn(e.target.id)}
          >
            4
          </button>
          <button
            id="5"
            className="btn"
            type="button"
            onClick={(e) => this.handleBtn(e.target.id)}
          >
            5
          </button>
          <button
            id="6"
            className="btn"
            type="button"
            onClick={(e) => this.handleBtn(e.target.id)}
          >
            6
          </button>
          <button
            id="-"
            className="btn color"
            type="button"
            onClick={(e) => this.handleBtn(e.target.id)}
          >
            &minus;
          </button>

          <button
            id="1"
            className="btn"
            type="button"
            onClick={(e) => this.handleBtn(e.target.id)}
          >
            1
          </button>
          <button
            id="2"
            className="btn"
            type="button"
            onClick={(e) => this.handleBtn(e.target.id)}
          >
            2
          </button>
          <button
            id="3"
            className="btn"
            type="button"
            onClick={(e) => this.handleBtn(e.target.id)}
          >
            3
          </button>
          <button
            id="&#43;"
            className="btn color"
            type="button"
            onClick={(e) => this.handleBtn(e.target.id)}
          >
            &#43;
          </button>

          <button
            id="0"
            className="btn zero"
            type="button"
            onClick={(e) => this.handleBtn(e.target.id)}
          >
            0
          </button>
          <button
            id="."
            className="btn"
            type="button"
            onClick={(e) => this.handleBtn(e.target.id)}
          >
            .
          </button>
          <button
            id="&#61;"
            className="btn color"
            type="button"
            onClick={(e) => this.handleBtn(e.target.id)}
          >
            &#61;
          </button>
        </div>
      </div>
    );
  }
}

export default Calculator;
