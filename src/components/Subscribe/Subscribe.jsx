import styles from './Subscribe.module.scss';

import facebook from './../../assets/icons/facebook.svg';
import twitter from './../../assets/icons/twitter.svg';
import instagram from './../../assets/icons/instagram.svg';
import linkedin from './../../assets/icons/linkedin.svg';

const Subscribe = () => {
  return (
    <section className={styles.subscribe}>
      <div className="container">
        <div className={styles.wrapper}>
          <h2 className={styles.title}>Subscribe to Atelier Newsletter</h2>
          <p className={styles.text}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros
            elementum tristique.
          </p>
          <input type="text" placeholder="Enter your email" className={styles.input} />
          <button className={styles.btn}>Subscribe</button>
          <p className={styles.info}>
            * By clicking <span className={styles.span}>“Subscribe”</span> button, you agree to our
            Terms and that you have read our{' '}
            <a href="#" className={styles.link}>
              Data Use Policy.
            </a>
          </p>
          <ul className={styles.socialList}>
            <li className={styles.socialItem}>
              <a href="#" className={styles.socialLink}>
                <img src={facebook} alt="Facebook" className={styles.socialImg} />
              </a>
            </li>
            <li className={styles.socialItem}>
              <a href="#" className={styles.socialLink}>
                <img src={twitter} alt="Twitter" className={styles.socialImg} />
              </a>
            </li>
            <li className={styles.socialItem}>
              <a href="#" className={styles.socialLink}>
                <img src={instagram} alt="Instagram" className={styles.socialImg} />
              </a>
            </li>
            <li className={styles.socialItem}>
              <a href="#" className={styles.socialLink}>
                <img src={linkedin} alt="LinkedIn" className={styles.socialImg} />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Subscribe;
