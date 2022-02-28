import styles from '../styles/Cover.module.css'
import "bootstrap-icons/font/bootstrap-icons.css";

interface CoverProps {
    pathString: string
}


const Cover:React.FC<CoverProps> = (props) => {
  return (
    <div className={styles.coverContainer}>
        <div className={styles.coverBody}>
            <img src={props.pathString} alt="cover of the magazine issue" className={styles.coverImage}/>
            <div className={styles.overlayContainer}>
                <a href="#" className={styles.iconContainerLink} title="View">
                    <i className="bi bi-eye-fill"></i>
                </a>
            </div>
        </div>
    </div>
  )
}

export default Cover