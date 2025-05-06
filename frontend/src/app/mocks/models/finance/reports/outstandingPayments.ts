export interface OutstandingPayments {
    _id: string;
    projectNumber: string;
    projectName: string;
    GSTIN: string;
    projectCost: number; 
    customerName: string;
    balanceAmount: number;
    totalPaid: number;
    balancePercent: number;
    paidPercent: number;
}

 