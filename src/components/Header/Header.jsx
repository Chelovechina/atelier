import { useState } from 'react';

import styles from './Header.module.scss';
import Burger from './Burger';
import NavItem from './NavItem';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
    if (!isOpen) {
      window.onscroll = () => {
        window.scrollTo(0, 0);
      };
    } else {
      window.onscroll = () => {};
    }
  };

  return (
    <header className={styles.header}>
      <div className="container">
        <nav className={styles.nav}>
          <a href="#" className={styles.brand}>
            Atelier.
          </a>
          <div className={isOpen ? `${styles.navWrapper} ${styles.active}` : styles.navWrapper}>
            <ul className={styles.navList}>
              <NavItem active text={'overview'} />
              <NavItem text={'pages'} />
              <NavItem text={'portfolio'} />
              <NavItem text={'template'} />
              <NavItem text={'contact'} />
            </ul>
            <a className={styles.btn}>buy template</a>
          </div>
          <Burger handleClick={handleClick} />
        </nav>
      </div>
    </header>
  );
};

export default Header;
