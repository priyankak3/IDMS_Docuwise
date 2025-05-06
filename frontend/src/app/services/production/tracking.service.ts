import {Injectable} from "@angular/core";
import {map} from "rxjs/operators";
import {ApiService} from "@core/services";

@Injectable({
    providedIn: "root"
})
export class TrackingService {
    routes: any = {
        createPath: "/production/developmentTracking/create",
        getAllPath: "/production/developmentTracking/getAll",
        getAllMasterDataPath: "/production/developmentTracking/getAllMasterData",
        getAllReportPath: "/production/developmentTracking/getAllReports",
        updatePath: (id: string) => `/production/developmentTracking/update/${id}`,
        getByIdPath: (id: string) => `/production/developmentTracking/getById/${id}`,
        deletePath: (id: string) => `/production/developmentTracking/delete/${id}`,
        getByFeatureIdPath: (id: string) => `/production/developmentTracking/getByFeatureId/${id}`
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
    getByFeatureId(id: string) {
        return this.http.get(this.routes.getByFeatureIdPath(id)).pipe(map((res: any) => res));
    }
}
