import styles from '../styles/Quote.module.css';

const Quote = () => (
  <div className={styles.quoteContainer}>
    <h2 className={styles.quote}>
      Mathematics is not about numbers, equations,
      computatioins, or algorithms; it is about understanding.
      -William Paul Thurston
    </h2>
  </div>
);
export default Quote;
