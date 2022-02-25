import Link from 'next/link'
import styles from '../styles/Hero.module.css'
import 'bootstrap/dist/css/bootstrap.css';

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
      <button className='btn btn-dark'>
        <Link href='#'>
          <a>Subscribe</a>
        </Link>
      </button>
      </div>
    </div>
  )
}
export default Navbar
