import Navbar from './Navbar'
import styles from '../styles/Hero.module.css'
import Cover from './Cover'
const Hero = () => {
  return (
    <div className={styles.hero}>
      <div className={styles.navbar}>
        <Navbar />
      </div>
      <div className={styles.heroContent}>
        <div className={styles.content}>
          <h1 className={styles.heading}>
            <span className={styles.welcome}>Welcome</span>
            <br />
            Technovert’s
            <br />
            Bi-Monthly Magazine
          </h1>
        </div>
        <Cover pathString='4.png' />
      </div>
    </div>
  )
}
export default Hero
