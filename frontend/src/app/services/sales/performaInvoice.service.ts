import {Injectable} from "@angular/core";
import {map} from "rxjs/operators";
import {ApiService} from "@core/services";

@Injectable({
    providedIn: "root"
})
export class PerformaInvoiceService {
    routes: any = {
        createPath: "/sales/performaInvoice/create",
        getAllPath: "/sales/performaInvoice/getAll",
        getAllReports: "/sales/performaInvoice/getAllReports",
        getAllPpvReports: "/sales/performaInvoice/getAllPPVReports",
        getAllMasterDataPath: "/sales/performaInvoice/getAllMasterData",
        getAllCNSummaryReportsPath: "/sales/performaInvoice/getAllCNSummaryReports",
        getAllCNDetailsReportsPath: "/sales/performaInvoice/getAllCNDetailsReports",
        updatePath: (id: string) => `/sales/performaInvoice/update/${id}`,
        getPIDetailsByIdPath: (id: string) => `/sales/performaInvoice/getPIDetailsById/${id}`,
        getByIdPath: (id: string) => `/sales/performaInvoice/getById/${id}`,
        getCNDetailsByIdPath: (id: string) => `/sales/performaInvoice/getCNDetailsById/${id}`,
        deletePath: (id: string) => `/sales/performaInvoice/delete/${id}`,
        getAllSalesRegisterReportsPath: "/sales/performaInvoice/getAllSalesRegisterReports"
    };

    constructor(private http: ApiService) {}

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
    getPIDetailsById(id: string) {
        return this.http.get(this.routes.getPIDetailsByIdPath(id)).pipe(map((res: any) => res));
    }
    delete(id: string) {
        return this.http.delete(this.routes.deletePath(id)).pipe(map((res: any) => res));
    }
}
