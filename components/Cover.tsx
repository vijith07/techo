import styles from '../styles/Cover.module.css'
import "bootstrap-icons/font/bootstrap-icons.css";
import { useState } from "react";
import dynamic from "next/dynamic";

const PDFViewer = dynamic(() => import("../components/Flipbook"), {
  ssr: false
});


interface CoverProps {
    pathString: string
    uri:string
}


const Cover:React.FC<CoverProps> = (props) => {
    const handleShow = () => {
        setModalIsOpen(true);
    };
    const [modalIsOpen, setModalIsOpen] = useState(false);
    
  return (
      <div className={styles.coverContainerContainer}>
        <PDFViewer uri={props.uri} show={modalIsOpen} onClose={()=>setModalIsOpen(false)}/>
        <div className={styles.coverContainer} onClick={()=>setModalIsOpen(true)} >
            <div className={styles.coverBody}>
                <img src={props.pathString} alt="cover of the magazine issue" className={styles.coverImage}/>
                <div className={styles.overlayContainer}>
                    <a href="#" className={styles.iconContainerLink} title="View">
                        <i className="bi bi-eye-fill"></i>
                    </a>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Cover