export interface NPDRequest {
    _id: string;
    NPDNo: string;
    referenceModel: string;
    projectCategory: string;
    projectName: string;
    status: string;
    createdAt: string;
    NPDDate: string;
    name: string;
    expectedDeliveryDate: string;
    expectedStartDate: string;
    projectBrief?: string;
    buildStage?: string;
    orderType?: string;
    developmentCharges?: string;
    teamSize?: number;
    validationRequired?: string;
    NPDRequestedBy?: string;
    remarks?: string;
}
