import Link from 'next/link'
import styles from '../styles/Footer.module.css'
import "bootstrap-icons/font/bootstrap-icons.css";

const Footer = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.footerLeft}>
        <div className={styles.footerLinks}>
          <h4>Discover</h4>
          <Link href='/'>
            <a className={styles.footerLink}>Keka</a>
          </Link>
          <Link href='/'>
            <a className={styles.footerLink}>Saketa</a>
          </Link>
          <Link href='/'>
            <a className={styles.footerLink}>Technovert</a>
          </Link>
          <Link href='/'>
            <a className={styles.footerLink}>Music Club</a>
          </Link>
          <Link href='/'>
            <a className={styles.footerLink}>Podcast</a>
          </Link>
        </div>
        <div className={styles.footerLinks}>
          <h4>Help &amp; Support</h4>
          <Link href='/'>
            <a className={styles.footerLink}>Contact Us</a>
          </Link>
          <Link href='/'>
            <a className={styles.footerLink}>Privacy Policy</a>
          </Link>
          <Link href='/'>
            <a className={styles.footerLink}>Inclusion and Diversity</a>
          </Link>
          <Link href='/'>
            <a className={styles.footerLink}>Report an Error</a>
          </Link>
          <Link href='/'>
            <a className={styles.footerLink}>Legal</a>
          </Link>
        </div>
        <div className={styles.footerLinks}>
          <h4>Useful Links</h4>
          <Link href='/'>
            <a className={styles.footerLink}>Press Releases</a>
          </Link>
          <Link href='/'>
            <a className={styles.footerLink}>About Technovert</a>
          </Link>
          <Link href='/'>
            <a className={styles.footerLink}>Production Support</a>
          </Link>
          <Link href='/'>
            <a className={styles.footerLink}>Documentation</a>
          </Link>
          <Link href='/'>
            <a className={styles.footerLink}>Newsletter</a>
          </Link>
        </div>
        <div className={styles.footerLinks}>
          <h4>Company</h4>
          <Link href='/'>
            <a className={styles.footerLink}>Sales</a>
          </Link>
          <Link href='/'>
            <a className={styles.footerLink}>Customer Reviews</a>
          </Link>
          <Link href='/'>
            <a className={styles.footerLink}>Partner with Us</a>
          </Link>
          <Link href='/'>
            <a className={styles.footerLink}>Integrations</a>
          </Link>
          <Link href='/'>
            <a className={styles.footerLink}>Security</a>
          </Link>
        </div>
      </div>
      <div className={styles.footerRight}>
        <div className={styles.footerLogoContainer}>
          <Link href='/'>
            <a className={styles.footerLogoLink}>
              <img className={styles.footerLogo} src='logo.png' alt='logo' />
            </a>
          </Link>
        </div>
        <div className={styles.footerSocial}>
          <a className={styles.footerLink} href='https://www.facebook.com/'>
            <i className="bi bi-facebook"></i>
          </a>
          <a className={styles.footerLink} href='https://www.instagram.com/'>
            <i className="bi bi-instagram"></i>
          </a>
          <a className={styles.footerLink} href='https://www.twitter.com/'>
            <i className="bi bi-twitter"></i>
          </a>
        </div>
      </div>
    </div>
  )
}
export default Footer
