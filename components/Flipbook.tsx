import { useState } from 'react';
import HTMLFlipBook from 'react-pageflip';
import { Document, Page } from 'react-pdf/dist/esm/entry.webpack';
import styles from '../styles/Flipbook.module.css'

function Flipbook(props: any) {
    const [numPages, setNumPages] = useState(null);
    const [pageNumber, setPageNumber] = useState(1);

    function onDocumentLoadSuccess({ numPages }) {
      setNumPages(numPages);
    }
    function pagesList(){
      var pages = [];
      for(var i=1; i<=numPages; i++){
        pages.push(<div><Page width={500} pageNumber={i}/></div>);
      }
      return pages;
    }

    return (
        <Document
        file="./Sample.pdf"
        onLoadSuccess={onDocumentLoadSuccess}
        className={styles.modal}
        >        
        <HTMLFlipBook width={500} height={707}>
            {pagesList()}
        </HTMLFlipBook>
        </Document>
    );
}
export default Flipbook;