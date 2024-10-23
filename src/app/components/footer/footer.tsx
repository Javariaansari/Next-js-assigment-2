import Link from 'next/link';
import styles from './footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.boxContainer}>
        <div className={styles.box}>
          <h3 className={styles.boxTitle}>About Us</h3>
          <p>Learn more about our mission and values.</p>
          <Link href="/about" className={styles.link}>Learn More</Link>
        </div>
        <div className={styles.box}>
          <h3 className={styles.boxTitle}>Customer Service</h3>
          <p>Get help and support with your orders.</p>
          <Link href="/contact" className={styles.link}>Get Help</Link>
        </div>
        <div className={styles.box}>
          <h3 className={styles.boxTitle}>Contact Us</h3>
          <p>Reach out for inquiries or feedback.</p>
          <Link href="/contact" className={styles.link}>Contact Us</Link>
        </div>
        <div className={styles.box}>
          <h3 className={styles.boxTitle}>Follow Us</h3>
          <p>Stay updated through our social media channels.</p>
          <Link href="/social" className={styles.link}>Follow Us</Link>
        </div>
      </div>
      <p className={styles.footerText}>&copy; 2024 My Next.js Website</p>
    </footer>
  );
};

export default Footer;
