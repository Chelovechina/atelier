import styles from './Footer.module.scss';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.wrapper}>
          <p className={styles.powered}>
            Powered By <span className={styles.span}>Webflow</span>
          </p>
          <ul className={styles.list}>
            <li className={styles.item}>
              <a href="#" className={styles.link}>
                Licenses
              </a>
            </li>
            <span className={styles.gap}>|</span>
            <li className={styles.item}>
              <a href="#" className={styles.link}>
                Style Guide
              </a>
            </li>
            <span className={styles.gap}>|</span>
            <li className={styles.item}>
              <a href="#" className={styles.link}>
                Instruction
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
