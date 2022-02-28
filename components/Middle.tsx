import Link from 'next/link'
import styles from '../styles/Middle.module.css'
import Cover from './Cover'
const Middle = () => {
  // declare a variable path string
  const pathString = "/4.png"
  
  return (
    <div className={styles.middle}>
      <h3 className={styles.title}>Previous Issues</h3>
      <div className={styles.middleContent}>
        <div className={styles.middleContentItem}>
          <div className={styles.middleContentImage}>
            <Cover pathString="3.png"/>
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
          <Cover pathString='2.png'/>
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
          <Cover pathString='1.png'/>
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
