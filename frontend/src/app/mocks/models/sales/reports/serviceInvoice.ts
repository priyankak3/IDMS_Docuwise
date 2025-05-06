export interface serviceInvoice {
    _id: string
    customerName: string
    PONo: string
    currency: string
    totalAmountWithTax: number
    status: string
    createdAt: string
    serviceInvoiceNumber: string
    serviceInvoiceDate: string
    invoiceAmount: number
    totalTaxAmount?: number
  }