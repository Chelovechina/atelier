import styles from './Services.module.scss';
import ServiceItem from './ServiceItem';

import webDesign from './../../assets/icons/web-design.svg';
import uxUi from './../../assets/icons/ux-ui.svg';
import seo from './../../assets/icons/seo.svg';

const Services = () => {
  return (
    <section className={styles.services}>
      <div className="container">
        <div className={styles.wrapper}>
          <p className={styles.subtitle}>Our Core Features</p>
          <h2 className={styles.title}>Our Services</h2>
          <ul className={styles.list}>
            <ServiceItem
              title={'Web Design'}
              text={'Suspendisse varius enim in'}
              subtext={'cursus id rutrum imperdiet. eros elementum tristique.'}>
              <img src={webDesign} alt="Web Design" />
            </ServiceItem>
            <ServiceItem
              title={'UI/UX Design'}
              text={'Suspendisse varius enim in'}
              subtext={'cursus id rutrum imperdiet. eros elementum tristique.'}>
              <img src={uxUi} alt="UI/UX Design" />
            </ServiceItem>
            <ServiceItem
              title={'SEO & Marketing'}
              text={'Suspendisse varius enim in'}
              subtext={'cursus id rutrum imperdiet. eros elementum tristique.'}>
              <img src={seo} alt="SEO & Marketing" />
            </ServiceItem>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Services;
