import Link from 'next/link'
import styles from '../styles/Hero.module.css'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-icons/font/bootstrap-icons.css'

const Navbar = () => {
  return (
    <div className={styles.navbarItems}>
      <div>
        <Link href='/'>
          <img className={styles.logo} src='/logo.png' alt='Techo Logo' />
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
      <div>
        <div className={styles.navbarButton}>
          <Link href='#'>
            <a>Subscribe</a>
          </Link>
        </div>
      </div>
      {/* hamburger menu */}
      <div className={styles.hamburgerMenu}>
        <i className='bi bi-list'></i>
        <div className={styles.hamburgerMenuItems}>
          <Link href='#'>
            <a>Home</a>
          </Link>
          <Link href='#'>
            <a>About</a>
          </Link>
          <Link href='#'>
            <a>Contact</a>
          </Link>
        </div>
        <div className={styles.hamburgerMenuButton}>
          <Link href='#'>
            <a>Subscribe</a>
          </Link>
        </div>
      </div>
    </div>
  )
}
export default Navbar
