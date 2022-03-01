import { SetStateAction, useState } from 'react'
import HTMLFlipBook from 'react-pageflip'
import { Document, Page, pdfjs } from 'react-pdf/dist/esm/entry.webpack'
import styles from '../styles/Flipbook.module.css'
import workerSrc from '../pdf-worker'
import { PDFDocumentProxy } from 'pdfjs-dist/types/src/display/api'
pdfjs.GlobalWorkerOptions.workerSrc = workerSrc

interface FlipbookProps {
  show: boolean
  onClose: () => void
}

const Flipbook: React.FC<FlipbookProps> = (props) => {
  const [file, setFile] = useState(
    'https://upload.wikimedia.org/wikipedia/commons/1/1b/Oedipus_Rex_music.pdf'
  )
  const [numPages, setNumPages] = useState(null)

  function onFileChange(event: React.ChangeEvent<any>) {
    setFile(event.target.files[0])
  }
  function onDocumentLoadSuccess({ numPages }: any) {
    setNumPages(numPages)
  }
  function pagesList(): JSX.Element[] {
    var pages = []
    for (var i = 1; i <= numPages; i++) {
      pages.push(
        <div>
          <Page width={500} pageNumber={i} />
        </div>
      )
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
              width={500}
              height={500 * 1.3}
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
