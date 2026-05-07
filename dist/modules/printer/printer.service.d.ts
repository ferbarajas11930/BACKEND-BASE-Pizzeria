import { BufferOptions, TDocumentDefinitions } from 'pdfmake/interfaces';
export declare class PrinterService {
    private printer;
    creatPdf(docDefinition: TDocumentDefinitions, options?: BufferOptions): PDFKit.PDFDocument;
}
