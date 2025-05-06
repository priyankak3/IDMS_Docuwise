import {Injectable} from "@angular/core";
import {map} from "rxjs/operators";
import {ApiService} from "@core/services";

@Injectable({
    providedIn: "root"
})
export class FeatureQATrackerService {
    routes: any = {
        createPath: "/production/featureQATracker/create",
        getAllPath: "/production/featureQATracker/getAll",
        getAllFeatureQATrackerSummaryPath: "/production/featureQATracker/getAllFeatureQATrackerSummary",
        getAllFeatureQATrackerReportsPath: "/production/featureQATracker/getAllFeatureQATrackerReports",
        getAllReports: "/production/featureQATracker/getAllReports",
        getAllMasterDataPath: "/production/featureQATracker/getAllMasterData",
        updatePath: (id: string) => `/production/featureQATracker/update/${id}`,
        getByIdPath: (id: string) => `/production/featureQATracker/getById/${id}`,
        getByFeatureIdPath: (id: string) => `/production/featureQATracker/getByFeatureId/${id}`,
        getByFeatureSummaryIdPath: (id: string) => `/production/featureQATracker/getByFeatureSummaryId/${id}`,
        deletePath: (id: string) => `/production/featureQATracker/delete/${id}`
    };
    constructor(private http: ApiService) {}

    create(payload: any) {
        return this.http.post(this.routes.createPath, payload).pipe(map((res: any) => res));
    }
    getAll(params: any) {
        return this.http.get(this.routes.getAllPath, params).pipe(map((res: any) => res));
    }
    getAllFeatureQATrackerSummary(params: any) {
        return this.http.get(this.routes.getAllFeatureQATrackerSummaryPath, params).pipe(map((res: any) => res));
    }
    getAllFeatureQATrackerReports(params: any) {
        return this.http.get(this.routes.getAllFeatureQATrackerReportsPath, params).pipe(map((res: any) => res));
    }

    getAllReports(params: any) {
        return this.http.get(this.routes.getAllReports, params).pipe(map((res: any) => res));
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
    getByFeatureId(id: string) {
        return this.http.get(this.routes.getByFeatureIdPath(id)).pipe(map((res: any) => res));
    }
    getByFeatureSummaryId(id: string) {
        return this.http.get(this.routes.getByFeatureSummaryIdPath(id)).pipe(map((res: any) => res));
    }
    delete(id: string) {
        return this.http.delete(this.routes.deletePath(id)).pipe(map((res: any) => res));
    }
}
