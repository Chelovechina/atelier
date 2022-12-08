import styles from './Header.module.scss';
import NavItem from './NavItem';

const Header = () => {
  return (
    <header className={styles.header}>
      <div className="container">
        <nav className={styles.nav}>
          <a href="#" className={styles.brand}>
            Atelier.
          </a>
          <div className={styles.navWrapper}>
            <ul className={styles.navList}>
              <NavItem active text={'overview'} />
              <NavItem text={'pages'} />
              <NavItem text={'portfolio'} />
              <NavItem text={'template'} />
              <NavItem text={'contact'} />
            </ul>
            <a className={styles.btn}>buy template</a>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
