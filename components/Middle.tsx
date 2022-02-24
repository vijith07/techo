import Link from 'next/link'
import styles from '../styles/Middle.module.css'
const Middle = () => {
  return (
    <div className={styles.middle}>
      <h3 className={styles.title}>Previous Isuues:</h3>
      <div className={styles.middleContent}>
        <div className={styles.middleContentItem}>
          <div className={styles.middleContentImage}>
            <img
              src='/previous-release.png'
              alt='previous release'
              className={styles.middleContentImage}
            />
          </div>
          <div className={styles.middleContentText}>
            <h4 className={styles.middleContentTitle}>
              Technovert’s Bi-Monthly Magazine
            </h4>
            <p className={styles.middleContentDescription}>
              Technovert’s Bi-Monthly Magazine is a monthly publication
              published by Technovert.
            </p>
            <Link href='#'>
              <a className={styles.middleContentButton}>Read More</a>
            </Link>
          </div>
        </div>
        <div className={styles.middleContentItem}>
          <div className={styles.middleContentImage}>
            <img
              src='/previous-release.png'
              alt='previous release'
              className={styles.middleContentImage}
            />
          </div>
          <div className={styles.middleContentText}>
            <h4 className={styles.middleContentTitle}>
              Technovert’s Bi-Monthly Magazine
            </h4>
            <p className={styles.middleContentDescription}>
              Technovert’s Bi-Monthly Magazine is a monthly publication
              published by Technovert.
            </p>
            <Link href='#'>
              <a className={styles.middleContentButton}>Read More</a>
            </Link>
          </div>
        </div>
        <div className={styles.middleContentItem}>
          <div className={styles.middleContentImage}>
            <img
              src='/previous-release.png'
              alt='previous release'
              className={styles.middleContentImage}
            />
          </div>
          <div className={styles.middleContentText}>
            <h4 className={styles.middleContentTitle}>
              Technovert’s Bi-Monthly Magazine
            </h4>
            <p className={styles.middleContentDescription}>
              Technovert’s Bi-Monthly Magazine is a monthly publication
              published by Technovert.
            </p>
            <Link href='#'>
              <a className={styles.middleContentButton}>Read More</a>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Middle
