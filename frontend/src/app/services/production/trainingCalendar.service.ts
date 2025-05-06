import {Injectable} from "@angular/core";
import {map} from "rxjs/operators";
import {ApiService} from "@core/services";

@Injectable({
    providedIn: "root"
})
export class TrainingCalendarService {
    routes: any = {
        createPath: "/production/trainingCalendar/create",
        getAllPath: "/production/trainingCalendar/getAll",
        getAllMasterDataPath: "/production/trainingCalendar/getAllMasterData",
        updatePath: (id: string) => `/production/trainingCalendar/update/${id}`,
        getByIdPath: (id: string) => `/production/trainingCalendar/getById/${id}`,
        deletePath: (id: string) => `/production/trainingCalendar/delete/${id}`,
        getAllReportPath: "/production/trainingCalendar/getAllReports"
    };
    constructor(private http: ApiService) {}

    create(payload: any) {
        return this.http.post(this.routes.createPath, payload).pipe(map((res: any) => res));
    }
    getAll(params: any) {
        return this.http.get(this.routes.getAllPath, params).pipe(map((res: any) => res));
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
    getAllReport(params: any) {
        return this.http.get(this.routes.getAllReportPath, params).pipe(map((res: any) => res));
    }
}
