// export interface salesRegisterWoTax {
//     _id: string;
//     company: string;
//     salesInvoiceNumber: string;
//     salesInvoiceDate: string;
//     salesInvoiceTotalAmount: number;
//     salesInvoiceTotalCGSTAmount: number;
//     salesInvoiceTotalSGSTAmount: number;
//     salesInvoiceTotalIGSTAmount: number;
//     salesInvoiceTotalUGSTAmount: number;
//     salesInvoiceTotalTaxAmount: number;
//     createdAt: string;
//     salesInvoiceDateS: string;
//     salesInvoiceTotalAmountWithTax: number;
//     customerName: string;
//     GSTIN: string;
//     customer: string;
//     EWayBillPdfUrl?: string;
//     ewayBillNo?: string;
//     InvoicePdfUrl?: string;
//     AckNo?: string;
// }
export interface salesRegisterWoTax {
    _id: string
    serviceInvoiceNumber: string
    serviceInvoiceDate: string
    customerName: string
    GSTIN: string
    taxableValue: number
    igstAmount: number
    cgstAmount: number
    sgstAmount: number
    totalValueWithTax: number
  }