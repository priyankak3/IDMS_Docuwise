import {Injectable} from "@angular/core";
import {map} from "rxjs/operators";
import {ApiService} from "@core/services";
import {HttpClient} from "@angular/common/http";

@Injectable({
    providedIn: "root"
})
export class ServiceInvoiceService {
    routes: any = {
        createPath: "/sales/serviceInvoice/create",
        getAllPath: "/sales/serviceInvoice/getAll",
        getAllReports: "/sales/serviceInvoice/getAllReports",
        getAllPpvReports: "/sales/serviceInvoice/getAllPPVReports",
        getAllMasterDataPath: "/sales/serviceInvoice/getAllMasterData",
        getAllCNSummaryReportsPath: "/sales/serviceInvoice/getAllCNSummaryReports",
        getAllCNDetailsReportsPath: "/sales/serviceInvoice/getAllCNDetailsReports",
        updatePath: (id: string) => `/sales/serviceInvoice/update/${id}`,
        getSIDetailsByIdPath: (id: string) => `/sales/serviceInvoice/getSIDetailsById/${id}`,
        getByIdPath: (id: string) => `/sales/serviceInvoice/getById/${id}`,
        getCNDetailsByIdPath: (id: string) => `/sales/serviceInvoice/getCNDetailsById/${id}`,
        deletePath: (id: string) => `/sales/serviceInvoice/delete/${id}`,
        getAllSalesRegisterReportsPath: "/sales/serviceInvoice/getAllSalesRegisterReports",

        getAllSalesAnalyticsReports: "/sales/serviceInvoice/getAllSalesAnalyticsReports",
        getSalesInsightData: "/sales/serviceInvoice/getSalesInsightData"
    };

    constructor(private http: ApiService, private https: HttpClient) {}

    create(payload: any) {
        return this.http.post(this.routes.createPath, payload).pipe(map((res: any) => res));
    }
    getAll(params: any) {
        return this.http.get(this.routes.getAllPath, params).pipe(map((res: any) => res));
    }

    getAllReports(params: any) {
        return this.http.get(this.routes.getAllReports, params).pipe(map((res: any) => res));
    }
    getAllPpvReports(params: any) {
        return this.http.get(this.routes.getAllPpvReports, params).pipe(map((res: any) => res));
    }
    getAllMasterData(params: any) {
        return this.http.get(this.routes.getAllMasterDataPath, params).pipe(map((res: any) => res));
    }
    getAllCNSummaryReports(params: any) {
        return this.http.get(this.routes.getAllCNSummaryReportsPath, params).pipe(map((res: any) => res));
    }
    getAllCNDetailsReports(params: any) {
        return this.http.get(this.routes.getAllCNDetailsReportsPath, params).pipe(map((res: any) => res));
    }
    getAllSalesRegisterReports(params: any) {
        return this.http.get(this.routes.getAllSalesRegisterReportsPath, params).pipe(map((res: any) => res));
    }
    update(id: string, payload: any) {
        return this.http.put(this.routes.updatePath(id), payload).pipe(map((res: any) => res));
    }
    getById(id: string) {
        return this.http.get(this.routes.getByIdPath(id)).pipe(map((res: any) => res));
    }
    getCNDetailsById(id: string) {
        return this.http.get(this.routes.getCNDetailsByIdPath(id)).pipe(map((res: any) => res));
    }
    getSIDetailsById(id: string) {
        return this.http.get(this.routes.getSIDetailsByIdPath(id)).pipe(map((res: any) => res));
    }
    delete(id: string) {
        return this.http.delete(this.routes.deletePath(id)).pipe(map((res: any) => res));
    }

    getAllSalesAnalyticsReports(params: any) {
        return this.http.get(this.routes.getAllSalesAnalyticsReports, params).pipe(map((res: any) => res));
    }
    getSalesInsightData(userQuery: string) {
        return this.https.post(this.routes.getSalesInsightData, {query: userQuery}).pipe(map((res: any) => res));
    }
}
