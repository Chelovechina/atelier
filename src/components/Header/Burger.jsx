import styles from './Header.module.scss';

const Burger = ({ handleClick }) => {
  return (
    <div className={styles.burger} onClick={handleClick}>
      <span className={styles.span}></span>
      <span className={styles.span}></span>
      <span className={styles.span}></span>
    </div>
  );
};

export default Burger;
