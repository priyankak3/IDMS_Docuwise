export interface InfraManagement {
    _id: string;
    infraType: string;
    customerName: string;
    projectName: string;
    description: string;
    serviceProvider: string;
    expiryDate: string;
    autoRenewal: string;
    plan: string;
    planCost: number;
    createdAt?: string;
    infraCode?: string;
    registrationDate?: string;
    additionalNotes?: string;
    status?: string;
}
