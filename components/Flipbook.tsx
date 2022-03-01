import { useState } from "react";
import HTMLFlipBook from "react-pageflip";
import { Document, Page, pdfjs } from "react-pdf/dist/esm/entry.webpack";
import styles from "../styles/Flipbook.module.css";
import workerSrc from "../pdf-worker";
import { redirect } from "next/dist/server/api-utils";

pdfjs.GlobalWorkerOptions.workerSrc = workerSrc;

interface FlipbookProps {
    show: boolean;
    onClose: () => void;
}


const Flipbook:React.FC<FlipbookProps> = (props)=> {
  const [file, setFile] = useState(
    "https://upload.wikimedia.org/wikipedia/commons/1/1b/Oedipus_Rex_music.pdf"
  );
  const [numPages, setNumPages] = useState(null);

  function onFileChange(event) {
    setFile(event.target.files[0]);
  }
  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }
  function pagesList() {
    var pages = [];
    for (var i = 1; i <= numPages; i++) {
      pages.push(
        <div>
          <Page width={500} pageNumber={i} />
        </div>
      );
    }
    return pages;
  }
  function handleOutsideClick(event) {
    //reload the window
    window.location.reload();

  }

  return (
      props.show &&
      <div
        style={{
          position: "fixed",
          top: "0",
          right: "0",
          bottom: "0",
          left: "0",
          zIndex: "1000",
        }}
        onClick = {props.onClose}
      >
        <Document
        file={file}
        onLoadSuccess={onDocumentLoadSuccess}
        className={styles.modal}
      >
        <HTMLFlipBook width={500} height={500 * 1.3}>
          {pagesList()}
        </HTMLFlipBook>
      </Document>
      </div>

  );
}
export default Flipbook;
