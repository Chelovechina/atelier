import styles from './Header.module.scss';

const NavItem = ({ text, active }) => {
  return (
    <li className={styles.navItem}>
      <a href="#" className={styles.navLink}>
        {text}
      </a>
    </li>
  );
};

export default NavItem;
