"use client"
import { useState, useCallback } from "react"
import { pdfjs, Document, Page } from "react-pdf"
import { useResizeObserver } from "@wojtekmaj/react-hooks"
import type { PDFDocumentProxy } from "pdfjs-dist"
import "react-pdf/dist/Page/AnnotationLayer.css"
import "react-pdf/dist/esm/Page/TextLayer.css";

type PDFFile = string | File | null

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  "pdfjs-dist/build/pdf.worker.min.js",
  import.meta.url
).toString()

const options = {
  cMapUrl: "/cmaps/",
  standardFontDataUrl: "/standard_fonts/",
}

const resizeObserverOptions = {}

const maxWidth = 800

export default function Cv() {
  const [file, setFile] = useState<PDFFile>("./static/cv_jeremie_meyer.pdf")
  const [numPages, setNumPages] = useState<number>()
  const [containerRef, setContainerRef] = useState<HTMLElement | null>(null)
  const [containerWidth, setContainerWidth] = useState<number>()

  const onResize = useCallback<ResizeObserverCallback>((entries) => {
    const [entry] = entries

    if (entry) {
      setContainerWidth(entry.contentRect.width)
    }
  }, [])

  useResizeObserver(containerRef, resizeObserverOptions, onResize)


  function onDocumentLoadSuccess({
    numPages: nextNumPages,
  }: PDFDocumentProxy): void {
    setNumPages(nextNumPages)
  }

  return (
    <div>
      <div className="Example__container">
        <div className="Example__container__document" ref={setContainerRef}>
          <Document
            file={file}
            onLoadSuccess={onDocumentLoadSuccess}
            options={options}
            loading="Chargement du PDF..."
          >
            {numPages &&
              Array.from({ length: numPages }, (_, index) => (
                <Page
                  key={`page_${index + 1}`}
                  pageNumber={index + 1}
                  width={
                    containerWidth
                      ? Math.min(containerWidth, maxWidth)
                      : maxWidth
                  }
                />
              ))}
          </Document>
        </div>
      </div>
    </div>
  )
}
