import {Injectable} from "@angular/core";
import {map} from "rxjs/operators";
import {ApiService} from "@core/services";

@Injectable({
    providedIn: "root"
})
export class DemoScheduleService {
    routes: any = {
        createPath: "/businessLeads/demoSchedule/create",
        getAllPath: "/businessLeads/demoSchedule/getAll",
        getAllMasterDataPath: "/businessLeads/demoSchedule/getAllMasterData",
        getAllReportPath: "/businessLeads/demoSchedule/getAllReports",
        getProspectListByCategoryPath: (category: string) =>
            `/businessLeads/demoSchedule/getProspectListByCategory/${category}`,
        updatePath: (id: string) => `/businessLeads/demoSchedule/update/${id}`,
        updateAndCreateDemoPath: (id: string) => `/businessLeads/demoSchedule/updateAndCreateDemo/${id}`,
        getByIdPath: (id: string) => `/businessLeads/demoSchedule/getById/${id}`,
        deletePath: (id: string) => `/businessLeads/demoSchedule/delete/${id}`
    };

    constructor(private http: ApiService) {}
    create(payload: any) {
        return this.http.post(this.routes.createPath, payload).pipe(map((res: any) => res));
    }
    getAll(params: any) {
        return this.http.get(this.routes.getAllPath, params).pipe(map((res: any) => res));
    }
    getAllReports(params: any) {
        return this.http.get(this.routes.getAllReportPath, params).pipe(map((res: any) => res));
    }
    getAllMasterData(params: any) {
        return this.http.get(this.routes.getAllMasterDataPath, params).pipe(map((res: any) => res));
    }
    getProspectListByCategory(category: string, payload: any) {
        return this.http.get(this.routes.getProspectListByCategoryPath(category), payload).pipe(map((res: any) => res));
    }
    update(id: string, payload: any) {
        return this.http.put(this.routes.updatePath(id), payload).pipe(map((res: any) => res));
    }
    updateAndCreateDemo(id: string, payload: any) {
        return this.http.put(this.routes.updateAndCreateDemoPath(id), payload).pipe(map((res: any) => res));
    }
    getById(id: string) {
        return this.http.get(this.routes.getByIdPath(id)).pipe(map((res: any) => res));
    }
    delete(id: string) {
        return this.http.delete(this.routes.deletePath(id)).pipe(map((res: any) => res));
    }
}
