export interface PurchaseCategory {
    _id: string;
    category: string;
    prefix: string;
    nextAutoIncrement: number;
    digit: number;
    categoryStatus: string;
    createdAt?: string;
}
