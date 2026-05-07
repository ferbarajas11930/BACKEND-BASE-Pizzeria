"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PrinterService = void 0;
const common_1 = require("@nestjs/common");
const PdfPrinter = require('pdfmake');
const fonts = {
    Roboto: {
        normal: 'src/common/assets/fonts/Roboto-Regular.ttf',
        bold: 'src/common/assets/fonts/Roboto-Medium.ttf',
        italics: 'src/common/assets/fonts/Roboto-Italic.ttf',
        bolditalics: 'src/common/assets/fonts/Roboto-MediumItalic.ttf',
    },
};
let PrinterService = class PrinterService {
    constructor() {
        this.printer = new PdfPrinter(fonts);
    }
    creatPdf(docDefinition, options = {}) {
        return this.printer.createPdfKitDocument(docDefinition, options);
    }
};
exports.PrinterService = PrinterService;
exports.PrinterService = PrinterService = __decorate([
    (0, common_1.Injectable)()
], PrinterService);
//# sourceMappingURL=printer.service.js.map