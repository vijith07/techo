import styles from '../styles/Cover.module.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
import { useState } from 'react'
import dynamic from 'next/dynamic'

const PDFViewer = dynamic(() => import('../components/Flipbook'), {
  ssr: false,
})

interface CoverProps {
  pathString: string
}

const Cover: React.FC<CoverProps> = (props) => {
  const handleShow = () => {
    setShowModal(true)
  }
  const [showModal, setShowModal] = useState(false)
  function handleOutsideClick() {
    //reload the window
    window.location.reload()
  }

  return (
    <div className={styles.coverContainer} onClick={handleShow}>
      <PDFViewer show={showModal} onClose={handleOutsideClick} />
      <div className={styles.coverBody}>
        <img
          src={props.pathString}
          alt='cover of the magazine issue'
          className={styles.coverImage}
        />
        <div className={styles.overlayContainer}>
          <a href='#' className={styles.iconContainerLink} title='View'>
            <i className='bi bi-eye-fill'></i>
          </a>
        </div>
      </div>
    </div>
  )
}

export default Cover
