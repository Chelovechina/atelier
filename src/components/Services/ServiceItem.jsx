import styles from './Services.module.scss';

const ServiceItem = ({ title, text, subtext, children }) => {
  return (
    <li className={styles.item}>
      {children}
      <h4 className={styles.itemTitle}>{title}</h4>
      <p className={styles.itemText}>{text}</p>
      <p className={styles.itemSubtext}>{subtext}</p>
    </li>
  );
};

export default ServiceItem;
