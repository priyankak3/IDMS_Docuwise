export interface InvoicePayment {
    _id: string;
    customerName: string;
    projectName: string;
    serviceInvoiceNumber: string;
    totalAmountWithTax: number;
    invoiceAge: any;
    serviceInvoiceDate: string;
    receivedAmount: number;
    TDSAmount: number;
    balanceAmount: number;
    invoiceFlag?: string;
    receivedDate?: string;
}
