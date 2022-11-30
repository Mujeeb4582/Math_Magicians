import { Component } from 'react';
import './calculator.scss';

// eslint-disable-next-line react/prefer-stateless-function
class Calculator extends Component {
  render() {
    return (
      <div className="calculator-wrapper">
        <div className="screen">
          <p>0</p>
        </div>
        <div className="btn-container">
          <div className="btn-row">
            <button className="btn" type="button">AC</button>
            <button className="btn" type="button">+/-</button>
            <button className="btn" type="button">%</button>
            <button className="btn color" type="button">&divide;</button>
          </div>
          <div className="btn-row">
            <button className="btn" type="button">7</button>
            <button className="btn" type="button">8</button>
            <button className="btn" type="button">9</button>
            <button className="btn color" type="button">&times;</button>
          </div>
          <div className="btn-row">
            <button className="btn" type="button">4</button>
            <button className="btn" type="button">5</button>
            <button className="btn" type="button">6</button>
            <button className="btn color" type="button">&minus;</button>
          </div>
          <div className="btn-row">
            <button className="btn" type="button">1</button>
            <button className="btn" type="button">2</button>
            <button className="btn" type="button">3</button>
            <button className="btn color" type="button">&#43;</button>
          </div>
          <div className="btn-last-row">
            <button className="btn zero" type="button">0</button>
            <button className="btn" type="button">2</button>
            <button className="btn color" type="button">&#61;</button>
          </div>
        </div>
      </div>
    );
  }
}

export default Calculator;
