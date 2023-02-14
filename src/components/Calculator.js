import './Calculator.css';

const Calculator = () => (
  <div>
    <div className="grid-container">
      <div className="grid-input">0</div>
      <div className="grid-item grid-2">AC</div>
      <div className="grid-item grid-3">+/-</div>
      <div className="grid-item grid-4">%</div>
      <div className="div-item right">/</div>
      <div className="grid-item grid-6">7</div>
      <div className="grid-item grid-7">8</div>
      <div className="grid-item grid-8">9</div>
      <div className="mul-item right">X</div>
      <div className="grid-item grid-10">4</div>
      <div className="grid-item grid-11">5</div>
      <div className="grid-item grid-12">6</div>
      <div className="sub-item right">-</div>
      <div className="grid-item grid-14">1</div>
      <div className="grid-item grid-15">2</div>
      <div className="grid-item grid-16">3</div>
      <div className="add-item right">+</div>
      <div className="grid-item grid-0">0</div>
      <div className="grid-item grid-19">.</div>
      <div className="equ-item right">=</div>
    </div>
  </div>
);

export default Calculator;
