import Navbar from './Navbar'
import styles from '../styles/Hero.module.css'
const Hero = () => {
  return (
    <div className={styles.hero}>
      <div className={styles.navbar}>
        <Navbar />
      </div>
      <div className={styles.heroContent}>
        <p>Welcome</p>
        <h1>Techovert's Bi-Monthly Magazine</h1>
      </div>
    </div>
  )
}
export default Hero
