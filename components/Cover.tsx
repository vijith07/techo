import styles from '../styles/Cover.module.css'

interface CoverProps {
    pathString: string
}


const Cover:React.FC<CoverProps> = (props) => {
  return (
    <div className={styles.coverContainer}>
        <div className={styles.cover}>
            <img src={props.pathString} alt="cover of 4th edition" className={styles.coverImage}/>
        </div>
    </div>
  )
}

export default Cover