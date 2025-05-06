import {Injectable} from "@angular/core";
import {map} from "rxjs/operators";
import {ApiService} from "@core/services";

@Injectable({
    providedIn: "root"
})
export class ProjectService {
    routes: any = {
        createPath: "/sales/project/create",
        getAllPath: "/sales/project/getAll",
        getAllMasterDataPath: "/sales/project/getAllMasterData",
        getAllSKUReportsPath: "/sales/project/getAllReports",
        getAllReportPath: "/sales/project/getAllReports",
        getAllProjectReportsPath: "/sales/project/getAllReports",
        getAllOutstandingPaymentReportsPath: "/sales/project/getAllOutstandingPaymentReports",
        updatePath: (id: string) => `/sales/project/update/${id}`,
        getByIdPath: (id: string) => `/sales/project/getById/${id}`,
        deletePath: (id: string) => `/sales/project/delete/${id}`
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
    getAllProjectReports(params: any) {
        return this.http.get(this.routes.getAllProjectReportsPath, params).pipe(map((res: any) => res));
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
