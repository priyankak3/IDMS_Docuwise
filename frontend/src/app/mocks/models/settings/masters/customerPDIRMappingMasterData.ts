export interface ICustomerPDIRMappingMasterData {
    autoIncrementNo: string;
    customersOptions: ICustomers[];
}

export interface ICustomers {
    _id: string;
    name: string;
    type: string;
    currency: string;
}
