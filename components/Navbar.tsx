import Link from 'next/link'
import styles from '../styles/Hero.module.css'
const Navbar = () => {
  return (
    <div className={styles.navbarItems}>
      <div className={styles.logo}>
        <Link href='/'>
          <a>
            <img src='/log.png' alt='Techo' />
          </a>
        </Link>
      </div>
      <div className={styles.navbarLinks}>
        <Link href='#'>
          <a className={styles.navbarLink}>Home</a>
        </Link>
        <Link href='#'>
          <a className={styles.navbarLink}>About</a>
        </Link>
        <Link href='#'>
          <a className={styles.navbarLink}>Contact</a>
        </Link>
      </div>
      <button className={styles.navbarButton}>
        <Link href='#'>
          <a>Subscribe</a>
        </Link>
      </button>
    </div>
  )
}
export default Navbar
