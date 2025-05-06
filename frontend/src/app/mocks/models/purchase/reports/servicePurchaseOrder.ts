export interface ServicePurchaseOrder {
    _id: string;
    company?: string;
    purchaseCategory: string;
    SPONumber: string;
    SPOStatus: string;
    createdAt?: string;
    netSPOValue: string;
    GSTAmount: string;
    totalAmountWithTax: string;
    SPODateS: string;
    supplierName: string;
    currency: string;
}
