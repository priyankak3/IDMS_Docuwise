export interface performaInvoice {
    _id: string
    customerName: string
    PONo: string
    currency: string
    totalAmountWithTax: number
    status: string
    createdAt: string
    performaInvoiceNumber: string
    serviceInvoiceDate: string
    invoiceAmount: number
    totalTaxAmount?: number
  }