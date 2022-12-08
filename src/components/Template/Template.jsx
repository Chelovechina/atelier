import styles from './Template.module.scss';
import TemplateItem from './TemplateItem';

import img1 from './../../assets/images/1.png';
import img2 from './../../assets/images/2.png';
import img3 from './../../assets/images/3.png';
import img4 from './../../assets/images/4.png';
import img5 from './../../assets/images/5.png';
import img6 from './../../assets/images/6.png';
import img7 from './../../assets/images/7.png';
import img8 from './../../assets/images/8.png';
import img9 from './../../assets/images/9.png';
import img10 from './../../assets/images/10.png';
import img11 from './../../assets/images/11.png';
import img12 from './../../assets/images/12.png';
import img13 from './../../assets/images/13.png';
import img14 from './../../assets/images/14.png';
import img15 from './../../assets/images/15.png';
import img16 from './../../assets/images/16.png';
import img17 from './../../assets/images/17.png';
import img18 from './../../assets/images/18.png';
import img19 from './../../assets/images/19.png';
import img20 from './../../assets/images/20.png';
import img21 from './../../assets/images/21.png';

const Template = () => {
  return (
    <section className={styles.templateSection}>
      <div className="container">
        <p className={styles.subtitle}>Our Core Layouts</p>
        <h2 className={styles.title}>Template Pages</h2>
        <ul className={styles.list}>
          <TemplateItem text={'Landing vr.1'}>
            <img src={img1} alt="Landing vr.1" className={styles.img} />
          </TemplateItem>
          <TemplateItem text={'Landing vr.2'}>
            <img src={img2} alt="Landing vr.2" className={styles.img} />
          </TemplateItem>
          <TemplateItem text={'Landing vr.3'}>
            <img src={img3} alt="Landing vr.3" className={styles.img} />
          </TemplateItem>
          <TemplateItem text={'Portfolio 1'}>
            <img src={img4} alt="Portfolio 1" className={styles.img} />
          </TemplateItem>
          <TemplateItem text={'Portfolio 1'}>
            <img src={img5} alt="Portfolio 1" className={styles.img} />
          </TemplateItem>
          <TemplateItem text={'Portfolio 1'}>
            <img src={img6} alt="Portfolio 1" className={styles.img} />
          </TemplateItem>
          <TemplateItem text={'Portfolio 1'}>
            <img src={img7} alt="Portfolio 1" className={styles.img} />
          </TemplateItem>
          <TemplateItem text={'Single Project'}>
            <img src={img8} alt="Single Project" className={styles.img} />
          </TemplateItem>
          <TemplateItem text={'About Company'}>
            <img src={img9} alt="About Company" className={styles.img} />
          </TemplateItem>
          <TemplateItem text={'About TEam'}>
            <img src={img10} alt="About TEam" className={styles.img} />
          </TemplateItem>
          <TemplateItem text={'Single Team Member'}>
            <img src={img11} alt="Single Team Member" className={styles.img} />
          </TemplateItem>
          <TemplateItem text={'FAQ PAge'}>
            <img src={img12} alt="FAQ PAge" className={styles.img} />
          </TemplateItem>
          <TemplateItem text={'Contact Us'}>
            <img src={img13} alt="Contact Us" className={styles.img} />
          </TemplateItem>
          <TemplateItem text={'Blog 1'}>
            <img src={img14} alt="Blog 1" className={styles.img} />
          </TemplateItem>
          <TemplateItem text={'Blog 2'}>
            <img src={img15} alt="Blog 2" className={styles.img} />
          </TemplateItem>
          <TemplateItem text={'Blog 3'}>
            <img src={img16} alt="Blog 3" className={styles.img} />
          </TemplateItem>
          <TemplateItem text={'Blog Categories'}>
            <img src={img17} alt="Blog Categories" className={styles.img} />
          </TemplateItem>
          <TemplateItem text={'Single Blog'}>
            <img src={img18} alt="Single Blog" className={styles.img} />
          </TemplateItem>
          <TemplateItem text={'Pricing'}>
            <img src={img19} alt="Pricing" className={styles.img} />
          </TemplateItem>
          <TemplateItem text={'Style guide'}>
            <img src={img20} alt="Style guide" className={styles.img} />
          </TemplateItem>
          <TemplateItem text={'Licenses'}>
            <img src={img21} alt="Licenses" className={styles.img} />
          </TemplateItem>
        </ul>
      </div>
    </section>
  );
};

export default Template;
