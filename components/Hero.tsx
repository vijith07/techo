import Navbar from './Navbar'
import styles from '../styles/Hero.module.css'
const Hero = () => {
  return (
    <div className={styles.hero}>
      <div className={styles.navbar}>
        <Navbar/>
      </div>
      <div className={styles.heroContent}>
        <div className={styles.content}>
          <h1 className={styles.heading}>
            <span className={styles.welcome}>Welcome</span><br/>
            Technovert's<br/>
            Bi-Monthly Magazine
          </h1>
        </div>
        <div className={styles.latestRelease}>
          <div className={styles.latestReleaseImage}>
            <img
              src='/latest-release.png'
              alt='latest release'
              className={styles.latestReleaseImage}
            />
          </div>
        </div>
      </div>
    </div>
  )
}
export default Hero
