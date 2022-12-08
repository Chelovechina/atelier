import styles from './Atelier.module.scss';

const Atelier = () => {
  return (
    <section className={styles.atelier}>
      <p className={styles.subtitle}>WE ARE Atelier Creative Agency</p>
      <h1 className={styles.title}>
        Unique UI Kit Template for
        <br />
        Creative Agencies
      </h1>
      <a className={styles.btn}>view layouts</a>
    </section>
  );
};

export default Atelier;
