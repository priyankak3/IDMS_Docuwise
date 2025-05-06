export interface salesPerformaInvoice {
    _id: string;
    customerName: string;
    PONo: string;
    currency: string;
    totalAmountWithTax?: number;
    status: string;
    createdAt?: string;
    performaInvoiceNumber: string;
    serviceInvoiceDate: string;
    invoiceAmount: number;
    customerCategory?: string;
    billFromLocation?: string;
    totalValue?: number;
    remarks?: string;
    PODate?: string;
}
