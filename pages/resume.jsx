import { useState } from 'react';
import styles from '../styles/ResumePage.module.css';
import { pdfjs, Document, Page } from 'react-pdf';

pdfjs.GlobalWorkerOptions.workerSrc = 
  `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

const myResume = '/Resume.pdf'; // must be inside public/

export const ResumeSection = () => {
  const [numPages, setNumPages] = useState(null);
  const [pageWidth, setPageWidth] = useState(null);

  const onDocumentLoadSuccess = ({ numPages }) => {
    setNumPages(numPages);
  };

  const onPageLoadSuccess = () => {
    if (!pageWidth) {
      const viewportWidth =
        typeof window !== 'undefined' ? window.innerWidth : 1200;
      const maxWidth = Math.min(viewportWidth * 0.9, 800);
      setPageWidth(maxWidth);
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h3>Resume</h3>
        <a href={myResume} className={styles.downloadButton} download>
          Download PDF
        </a>
      </div>

      <div className={styles.pdfContainer}>
        <Document
          file={myResume}
          onLoadSuccess={onDocumentLoadSuccess}
        >
          {Array.from(new Array(numPages), (_, index) => (
            <Page
              key={index}
              pageNumber={index + 1}
              width={pageWidth}
              onLoadSuccess={onPageLoadSuccess}
            />
          ))}
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
    props: { title: 'Resume' },
  };
}