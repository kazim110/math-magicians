import { useState } from 'react';
import calculate from '../logic/calculate';
import styles from '../styles/Calculator.module.css';
// import calculate from '../logic/calculate';
// import operate from '../logic/operate';

function Calculator() {
  const [state, setState] = useState({ total: 0, next: null, operation: null });
  const clickHandler = (e) => {
    setState((state) => calculate(state, e.target.name));
  };

  return (
    <div className={styles.mainContainer}>
      <h2>Let&apos;s do some math!</h2>
      <div className={styles['grid-container']}>
        <div className={styles.result}>
          {state.total}
          {state.operation}
          {state.next}
        </div>
        <button type="button" name="AC" className={`${styles['grid-item']} ${styles.ac}`} onClick={clickHandler}>AC</button>
        <button type="button" name="+/-" className={`${styles['grid-item']} ${styles['plus-minus']}`} onClick={clickHandler}>+/-</button>
        <button type="button" name="%" className={`${styles['grid-item']} ${styles.persent}`} onClick={clickHandler}>%</button>
        <button type="button" name="÷" className={`${styles['grid-item']} ${styles.right} ${styles.divid}`} onClick={clickHandler}>÷</button>
        <button type="button" name="7" className={`${styles['grid-item']} ${styles.seven}`} onClick={clickHandler}>7</button>
        <button type="button" name="8" className={`${styles['grid-item']} ${styles.eight}`} onClick={clickHandler}>8</button>
        <button type="button" name="9" className={`${styles['grid-item']} ${styles.nine}`} onClick={clickHandler}>9</button>
        <button type="button" name="x" className={`${styles['grid-item']} ${styles.right} ${styles.multiple}`} onClick={clickHandler}>x</button>
        <button type="button" name="4" className={`${styles['grid-item']} ${styles.four}`} onClick={clickHandler}>4</button>
        <button type="button" name="5" className={`${styles['grid-item']} ${styles.five}`} onClick={clickHandler}>5</button>
        <button type="button" name="6" className={`${styles['grid-item']} ${styles.six}`} onClick={clickHandler}>6</button>
        <button type="button" name="-" className={`${styles['grid-item']} ${styles.right} ${styles.minus}`} onClick={clickHandler}>-</button>
        <button type="button" name="1" className={`${styles['grid-item']} ${styles.one}`} onClick={clickHandler}>1</button>
        <button type="button" name="2" className={`${styles['grid-item']} ${styles.two}`} onClick={clickHandler}>2</button>
        <button type="button" name="3" className={`${styles['grid-item']} ${styles.three}`} onClick={clickHandler}>3</button>
        <button type="button" name="+" className={`${styles['grid-item']} ${styles.right} ${styles.add}`} onClick={clickHandler}>+</button>
        <button type="button" name="0" className={`${styles['grid-item']} ${styles.zero}`} onClick={clickHandler}>0</button>
        <button type="button" name="." className={`${styles['grid-item']} ${styles.dot}`} onClick={clickHandler}>.</button>
        <button type="button" name="=" className={`${styles['grid-item']} ${styles.right} ${styles.equal}`} onClick={clickHandler}>=</button>
      </div>
    </div>
  );
}

export default Calculator;
