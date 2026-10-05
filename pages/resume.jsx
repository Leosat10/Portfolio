import { useState } from 'react';
import styles from '../styles/ResumePage.module.css';
import { pdfjs, Document, Page } from 'react-pdf';

pdfjs.GlobalWorkerOptions.workerSrc =
  `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

const myResume = '/Resume.pdf';

export const ResumeSection = () => {
  const [numPages, setNumPages] = useState(null);

  const onDocumentLoadSuccess = ({ numPages }) => {
    setNumPages(numPages);
  };

  return (
    <div className={styles.container}>

      {/* Header */}
      <div className={styles.header}>
        <h3>Resume</h3>

        <a
          href={myResume}
          className={styles.downloadButton}
          download="Santhosh-Resume.pdf"
        >
          Download PDF
        </a>
      </div>

      {/* PDF */}
      <div className={styles.pdfContainer}>
        <Document
          file={myResume}
          onLoadSuccess={onDocumentLoadSuccess}
          loading={
            <div className={styles.loading}>
              Loading resume...
            </div>
          }
          error={
            <div className={styles.error}>
              <p>Unable to load resume.</p>

              <a
                href={myResume}
                target="_blank"
                rel="noopener noreferrer"
              >
                Open PDF
              </a>
            </div>
          }
        >
          {Array.from(
            new Array(numPages || 0),
            (_, index) => (
              <div
                className={styles.page}
                key={`page_${index + 1}`}
              >
                <Page
                  pageNumber={index + 1}
                  width={700}
                  devicePixelRatio={2}
                  renderTextLayer={false}
                  renderAnnotationLayer={false}
                />
              </div>
            )
          )}
        </Document>
      </div>

    </div>
  );
};

export default function ResumePage(props) {
  return <ResumeSection {...props} />;
}

export async function getStaticProps() {
  return {
    props: {
      title: 'Resume',
    },
  };
}
