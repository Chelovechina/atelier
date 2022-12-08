import styles from './Template.module.scss';

const TemplateItem = ({ text, children }) => {
  return (
    <li className={styles.item}>
      <a href="#" className={styles.link}>
        {children}
        <p className={styles.text}>{text}</p>
      </a>
    </li>
  );
};

export default TemplateItem;
