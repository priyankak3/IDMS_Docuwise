import {Injectable} from "@angular/core";
import {map} from "rxjs/operators";
import {ApiService} from "@core/services";

@Injectable({
    providedIn: "root"
})
export class InvestmentDeclarationService {
    getSIDetailsById(id: any) {
      throw new Error("Method not implemented.");
    }
    routes: any = {
        createPath: "/accounts/investmentDeclaration/create",
        getAllPath: "/accounts/investmentDeclaration/getAll",
        getAllReportsPath: "/accounts/investmentDeclaration/getAllReports",
        getAllMasterDataPath: "/accounts/investmentDeclaration/getAllMasterData",
        updatePath: (id: string) => `/accounts/investmentDeclaration/update/${id}`,
        getByIdPath: (id: string) => `/accounts/investmentDeclaration/getById/${id}`,
        getByEmployeeIdPath: (id: string) => `/accounts/investmentDeclaration/getByEmployeeId/${id}`,
        deletePath: (id: string) => `/accounts/investmentDeclaration/delete/${id}`
    };
    constructor(private http: ApiService) {}

    create(payload: any) {
        return this.http.post(this.routes.createPath, payload).pipe(map((res: any) => res));
    }
    getAll(params: any) {
        return this.http.get(this.routes.getAllPath, params).pipe(map((res: any) => res));
    }
    getAllReports(params: any) {
        return this.http.get(this.routes.getAllReportsPath, params).pipe(map((res: any) => res));
    }
    getAllMasterData(params: any) {
        return this.http.get(this.routes.getAllMasterDataPath, params).pipe(map((res: any) => res));
    }
    getByEmployeeId(id: string) {
        return this.http.get(this.routes.getByEmployeeIdPath(id)).pipe(map((res: any) => res));
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
