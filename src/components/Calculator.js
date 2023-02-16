import { useState } from 'react';
import calculate from '../logic/calculate';
import './Calculator.css';
// import calculate from '../logic/calculate';
// import operate from '../logic/operate';

function Calculator() {
  const [state, setState] = useState({ total: 0, next: null, operation: null });
  const clickHandler = (e) => {
    setState((state) => calculate(state, e.target.name));
  };

  return (
    <div>
      <div className="grid-container">
        <div className="result">
          {state.total}
          {state.operation}
          {state.next}
        </div>
        <button type="button" name="AC" className="grid-item ac" onClick={clickHandler}>AC</button>
        <button type="button" name="+/-" className="grid-item plus-minus" onClick={clickHandler}>+/-</button>
        <button type="button" name="%" className="grid-item persent" onClick={clickHandler}>%</button>
        <button type="button" name="÷" className="grid-item divid right" onClick={clickHandler}>÷</button>
        <button type="button" name="7" className="grid-item seven" onClick={clickHandler}>7</button>
        <button type="button" name="8" className="grid-item eight" onClick={clickHandler}>8</button>
        <button type="button" name="9" className="grid-item nine" onClick={clickHandler}>9</button>
        <button type="button" name="x" className="grid-item multiple right" onClick={clickHandler}>x</button>
        <button type="button" name="4" className="grid-item four" onClick={clickHandler}>4</button>
        <button type="button" name="5" className="grid-item five" onClick={clickHandler}>5</button>
        <button type="button" name="6" className="grid-item six" onClick={clickHandler}>6</button>
        <button type="button" name="-" className="grid-item minus right" onClick={clickHandler}>-</button>
        <button type="button" name="1" className="grid-item one" onClick={clickHandler}>1</button>
        <button type="button" name="2" className="grid-item two" onClick={clickHandler}>2</button>
        <button type="button" name="3" className="grid-item three" onClick={clickHandler}>3</button>
        <button type="button" name="+" className="grid-item add right" onClick={clickHandler}>+</button>
        <button type="button" name="0" className="grid-item zero" onClick={clickHandler}>0</button>
        <button type="button" name="." className="grid-item dot" onClick={clickHandler}>.</button>
        <button type="button" name="=" className="grid-item equal right" onClick={clickHandler}>=</button>
      </div>
    </div>
  );
}

export default Calculator;
