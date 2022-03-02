import { SetStateAction, useState } from 'react'
import HTMLFlipBook from 'react-pageflip'
import { Document, Page, pdfjs } from 'react-pdf/dist/esm/entry.webpack'
import styles from '../styles/Flipbook.module.css'
import workerSrc from '../pdf-worker'
pdfjs.GlobalWorkerOptions.workerSrc = workerSrc

interface FlipbookProps {
  show: boolean
  onClose: () => void
  uri:string
}

const Flipbook: React.FC<FlipbookProps> = (props) => {
  // the file state can also be a link like s3 bucket link
  const screenWidth = window.innerWidth;
  const pdfWidth = 500;
  const [file, setFile] = useState(
    props.uri
  )
  const [numPages, setNumPages] = useState(null)
  const [pdfAspect, setPdfAspect] = useState(1.4142135623730951)

  function onFileChange(event: React.ChangeEvent<any>) {
    setFile(event.target.files[0])
  }
  function onDocumentLoadSuccess({ numPages }: any) {
    setNumPages(numPages)
    console.log("HiMom")
  }
  const onDocumentLoadProgress = () => {
    console.log("Loading")
  }
  function pagesList(): JSX.Element[] {
    var pages = []
    if (numPages != null) {
      for (var i = 1; i <= numPages; i++) {
        pages.push(
          <div>
            <Page width={pdfWidth} pageNumber={i} />
          </div>
        )
      }
    }

    return pages
  }

  if (props.show) {
    return (
      <div>
        <div className={styles.flipbookContainer}>
          <Document
            file={file}
            onLoadSuccess={onDocumentLoadSuccess}
            // onLoadProgress={onDocumentLoadProgress}
            className={styles.modal}
          >
            <div
              onClick={() => props.onClose()}
              style={{
                position: 'fixed',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
              }}
            ></div>
            <HTMLFlipBook
              width={pdfWidth}
              height={pdfWidth * 1.414}
              className={''}
              style={{}}
              startPage={0}
              size={'fixed'}
              minWidth={0}
              maxWidth={0}
              minHeight={0}
              maxHeight={0}
              drawShadow={true}
              flippingTime={1000}
              usePortrait={true}
              startZIndex={0}
              autoSize={true}
              maxShadowOpacity={1}
              showCover={true}
              mobileScrollSupport={true}
              clickEventForward={true}
              useMouseEvents={true}
              swipeDistance={30}
              showPageCorners={false}
              disableFlipByClick={false}
            >
              {pagesList()}
            </HTMLFlipBook>
          </Document>
        </div>
      </div>
    )
  } else {
    return null
  }
}
export default Flipbook
