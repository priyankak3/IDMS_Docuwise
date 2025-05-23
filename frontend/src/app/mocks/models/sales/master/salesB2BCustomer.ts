export interface salesB2BCustomer {
    _id: string;
    customerCode: string;
    customerName: string;
    customerNickName?: string;
    customerCategory: string;
    region?: string;
    customerPAN?: string;
    GSTIN: string;
    GSTClassification?: string;
    customerCurrency?: string;
    creditLimit?: string;
    customerPaymentTerms?: string;
    isCustomerActive?: string;
    country: string;
    state?: string;
    city?: string;
    pinCode?: number;
    line1?: string;
    line2?: string;
    line3?: string;
    line4?: string;
    contactPersonName?: string;
    contactPersonDesignation?: string;
    contactPersonDepartment?: string;
    contactPersonNumber?: number;
    contactPersonEmail?: string;
}
