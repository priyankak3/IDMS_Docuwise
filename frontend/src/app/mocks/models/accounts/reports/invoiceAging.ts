export interface InvoiceAging {
    _id: string;
    customerName: string;
    projectName: string;
    totalValue: number;
    serviceInvoiceDate: string;
    GSTAmount: string;
    totalAmountWithTax: string;
    invoiceAge: string;
    invoiceFlag: string;
}
