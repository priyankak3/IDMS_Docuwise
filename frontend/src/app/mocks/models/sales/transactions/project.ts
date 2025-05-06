export interface project {
    _id: string;
    projectNumber: string;
    projectName: string;
    projectCost: number;
    currency: string;
    customer: string;
    customerName: string;
    status: string;
    remarks: string;
    createdAt?: string;
    plannedStartDate: string;
    plannedEndDate: string;
    actualStartDate: string;
    actualEndDate: string;
    sowFileUrl?: string;
    nonDiscloserAgreementFileUrl?: string;
    budgetAllocation?: string;
    allocatedAmount?: number;
    mileStoneName?: string;
    mileStoneAmount?: number;
    mileStoneTriggerDate?: string;
    deliveryMilestone?: string;
    deliveryMilestoneDate?: string;
}
