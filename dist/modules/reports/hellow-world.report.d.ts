import type { TDocumentDefinitions } from 'pdfmake/interfaces';
interface ReportOptions {
    name: string;
}
export declare const getHelloWorldReport: (options: ReportOptions) => TDocumentDefinitions;
export {};
