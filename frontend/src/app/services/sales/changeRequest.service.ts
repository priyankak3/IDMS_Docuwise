import {Injectable} from "@angular/core";
import {map} from "rxjs/operators";
import {ApiService} from "@core/services";

@Injectable({
    providedIn: "root"
})
export class ChangeRequestService {
    routes: any = {
        createPath: "/sales/changeRequest/create",
        getAllPath: "/sales/changeRequest/getAll",
        getAllMasterDataPath: "/sales/changeRequest/getAllMasterData",
        getAllSKUReportsPath: "/sales/changeRequest/getAllReports",
        getAllReportPath: "/sales/changeRequest/getAllReports",
        getAllOutstandingPaymentReportsPath: "/sales/changeRequest/getAllOutstandingPaymentReports",
        updatePath: (id: string) => `/sales/changeRequest/update/${id}`,
        getByIdPath: (id: string) => `/sales/changeRequest/getById/${id}`,
        deletePath: (id: string) => `/sales/changeRequest/delete/${id}`
    };
    constructor(private http: ApiService) {}

    create(payload: any) {
        return this.http.post(this.routes.createPath, payload).pipe(map((res: any) => res));
    }
    getAll(params: any) {
        return this.http.get(this.routes.getAllPath, params).pipe(map((res: any) => res));
    }
    getAllReport(params: any) {
        return this.http.get(this.routes.getAllReportPath, params).pipe(map((res: any) => res));
    }
    getAllOutstandingPaymentReports(params: any) {
        return this.http.get(this.routes.getAllOutstandingPaymentReportsPath, params).pipe(map((res: any) => res));
    }
    getAllSKUReports(params: any) {
        return this.http.get(this.routes.getAllSKUReportsPath, params).pipe(map((res: any) => res));
    }
    getAllMasterData(params: any) {
        return this.http.get(this.routes.getAllMasterDataPath, params).pipe(map((res: any) => res));
    }
    update(id: string, payload: any) {
        return this.http.put(this.routes.updatePath(id), payload).pipe(map((res: any) => res));
    }
    getById(id: string) {
        return this.http.get(this.routes.getByIdPath(id)).pipe(map((res: any) => res));
    }
    delete(id: string) {
        return this.http.delete(this.routes.deletePath(id)).pipe(map((res: any) => res));
    }
}
