import styles from './Follow.module.scss';

import img1 from './../../assets/images/follow1.png';
import img2 from './../../assets/images/follow2.png';
import img3 from './../../assets/images/follow3.png';
import img4 from './../../assets/images/follow4.png';
import instagram from './../../assets/icons/instagram.svg';

const Follow = () => {
  return (
    <section className={styles.follow}>
      <div className="container">
        <ul className={styles.list}>
          <li className={styles.item}>
            <a href="#" className={styles.link}>
              <img src={img1} alt="Post" className={styles.itemImg} />
              <img src={instagram} alt="Instagram" className={styles.itemInsta} />
            </a>
          </li>
          <li className={styles.item}>
            <a href="#" className={styles.link}>
              <img src={img2} alt="Post" className={styles.itemImg} />
              <img src={instagram} alt="Instagram" className={styles.itemInsta} />
            </a>
          </li>
          <li className={styles.mainItem}>
            <h3 className={styles.title}>Follow me on</h3>
            <img src={instagram} alt="Instagram" className={styles.mainItemInsta} />
            <a href="#" className={styles.btn}>
              instagram
            </a>
          </li>
          <li className={styles.item}>
            <a href="#" className={styles.link}>
              <img src={img3} alt="Post" className={styles.itemImg} />
              <img src={instagram} alt="Instagram" className={styles.itemInsta} />
            </a>
          </li>
          <li className={styles.item}>
            <a href="#" className={styles.link}>
              <img src={img4} alt="Post" className={styles.itemImg} />
              <img src={instagram} alt="Instagram" className={styles.itemInsta} />
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Follow;
