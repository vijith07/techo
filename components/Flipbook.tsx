import { useState } from "react";
import HTMLFlipBook from "react-pageflip";
import { Document, Page, pdfjs } from "react-pdf/dist/esm/entry.webpack";
import styles from "../styles/Flipbook.module.css";
import workerSrc from "../pdf-worker";
import { redirect } from "next/dist/server/api-utils";

pdfjs.GlobalWorkerOptions.workerSrc = workerSrc;

interface FlipbookProps {
    show: boolean;
    changeState: (show: boolean) => void;
}


const Flipbook:React.FC<FlipbookProps> = (props)=> {
  const [file, setFile] = useState(
    "https://upload.wikimedia.org/wikipedia/commons/0/0e/Space_Launch_System_%28SLS%29_Mission_Planner%27s_Guide_-_ESD_30000_Baseline_-_12Apr17_106pp_-_20170005323.pdf"
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
    console.log('close chesey bro');

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
        onClick={() => handleOutsideClick()}
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
