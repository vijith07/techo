import Link from 'next/link'
import styles from '../styles/Footer.module.css'

const Footer = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.footerLeft}>
        <div className={styles.footerLinks}>
          <h4>Discover</h4>
          <Link href='/'>
            <a>Keka</a>
          </Link>
          <Link href='/'>
            <a>Saketa</a>
          </Link>
          <Link href='/'>
            <a>Technovert</a>
          </Link>
          <Link href='/'>
            <a>Music Club</a>
          </Link>
          <Link href='/'>
            <a>Podcast</a>
          </Link>
        </div>
        <div className={styles.footerLinks}>
          <h4>Help &amp; Support</h4>
          <Link href='/'>
            <a>Contact Us</a>
          </Link>
          <Link href='/'>
            <a>Privacy Policy</a>
          </Link>
          <Link href='/'>
            <a>Inclusion and Diversity</a>
          </Link>
          <Link href='/'>
            <a>Report an Error</a>
          </Link>
          <Link href='/'>
            <a>Legal</a>
          </Link>
        </div>
        <div className={styles.footerLinks}>
          <h4>Useful Links</h4>
          <Link href='/'>
            <a>Press Releases</a>
          </Link>
          <Link href='/'>
            <a>About Technovert</a>
          </Link>
          <Link href='/'>
            <a>Production Support</a>
          </Link>
          <Link href='/'>
            <a>Documentation</a>
          </Link>
          <Link href='/'>
            <a>Newsletter</a>
          </Link>
        </div>
        <div className={styles.footerLinks}>
          <h4>Company</h4>
          <Link href='/'>
            <a>Sales</a>
          </Link>
          <Link href='/'>
            <a>Customer Reviews</a>
          </Link>
          <Link href='/'>
            <a>Partner with Us</a>
          </Link>
          <Link href='/'>
            <a>Integrations</a>
          </Link>
          <Link href='/'>
            <a>Security</a>
          </Link>
        </div>
      </div>
      <div className={styles.footerRight}>
        <div className='footer-logo'>
          <Link href='/'>
            <a>
              <img className={styles.footerLogo} src='logo.png' alt='logo' />
            </a>
          </Link>
        </div>
        <div className='footer-social'>
          <a href='https://www.facebook.com/'>
            <img src='../public/facebook.png' alt='facebook' />
          </a>
          <a href='https://www.instagram.com/'>
            <img src='../public/instagram.png' alt='instagram' />
          </a>
          <a href='https://www.twitter.com/'>
            <img src='../public/twitter.png' alt='twitter' />
          </a>
        </div>
      </div>
    </div>
  )
}
export default Footer
