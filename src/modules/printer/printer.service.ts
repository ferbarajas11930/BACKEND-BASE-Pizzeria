import { Injectable } from '@nestjs/common';
const PdfPrinter = require('pdfmake');
import { BufferOptions, TDocumentDefinitions } from 'pdfmake/interfaces';

const fonts = {
  Roboto: {
    normal: 'src/common/assets/fonts/Roboto-Regular.ttf',
    bold: 'src/common/assets/fonts/Roboto-Medium.ttf',
    italics: 'src/common/assets/fonts/Roboto-Italic.ttf',
    bolditalics: 'src/common/assets/fonts/Roboto-MediumItalic.ttf',
  },
};

@Injectable()
export class PrinterService {
  private printer = new PdfPrinter(fonts);

  creatPdf(
    docDefinition: TDocumentDefinitions,
    options: BufferOptions = {},
  ): PDFKit.PDFDocument {
    return this.printer.createPdfKitDocument(docDefinition, options);
  }
}
