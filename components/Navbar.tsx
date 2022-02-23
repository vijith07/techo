import Link from 'next/link'
import styles from '../styles/Hero.module.css'
const Navbar = () => {
  return (
    <div className={styles.navbarItems}>
      <div className='Brand'>
        <Link href='/'>
          <a>
            <img src='/log.png' alt='Techo' />
          </a>
        </Link>
      </div>
      <div className={styles.navbarLinks}>
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
      <div className='navbarButton'>
        <Link href='#'>
          <a>Subscribe</a>
        </Link>
      </div>
    </div>
  )
}
export default Navbar
