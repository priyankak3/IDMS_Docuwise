
export interface SalesOrderSummary {
    _id: string
    totalOrders: number
    currency: string
    totalAmount: number
    avgOrderValue: number
    salesCategory: string
    customerName: string
    dateRange: string
  }