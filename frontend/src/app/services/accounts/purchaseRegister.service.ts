import {Injectable} from "@angular/core";
import {map} from "rxjs/operators";
import {ApiService} from "@core/services";

@Injectable({
    providedIn: "root"
})
export class PurchaseRegisterService {
    routes: any = {
        createPath: "/accounts/purchaseRegisterEntry/create",
        getAllPath: "/accounts/purchaseRegisterEntry/getAll",
        getAllMasterDataPath: "/accounts/purchaseRegisterEntry/getAllMasterData",
        updatePath: (id: string) => `/accounts/purchaseRegisterEntry/update/${id}`,
        getByIdPath: (id: string) => `/accounts/purchaseRegisterEntry/getById/${id}`,
        deletePath: (id: string) => `/accounts/purchaseRegisterEntry/delete/${id}`,
        getAllReportsPath: "/accounts/purchaseRegisterEntry/getAllReports",
        getAllMRNBySupplierIdPath: (id: string) => `/accounts/purchaseRegisterEntry/getAllMRNBySupplierId/${id}`
    };
    constructor(private http: ApiService) {}

    create(payload: any) {
        return this.http.post(this.routes.createPath, payload);
    }
    getAll(params: any) {
        return this.http.get(this.routes.getAllPath, params);
    }
    getAllMasterData(params: any) {
        return this.http.get(this.routes.getAllMasterDataPath, params);
    }
    update(id: string, payload: any) {
        return this.http.put(this.routes.updatePath(id), payload);
    }
    getById(id: string) {
        return this.http.get(this.routes.getByIdPath(id));
    }
    delete(id: string) {
        return this.http.delete(this.routes.deletePath(id));
    }
    getAllReports(params: any) {
        return this.http.get(this.routes.getAllReportsPath, params);
    }
    getAllMRNBySupplierId(id: string) {
        return this.http.get(this.routes.getAllMRNBySupplierIdPath(id));
    }
}
