import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { ApiService } from '@core/services';

@Injectable({
  providedIn: 'root',
})
export class InspectionParameterService {
  routes: any = {
    createPath: '/quality/inspectionParameter/create',
    getAllPath: '/quality/inspectionParameter/getAll',
    getAllMasterDataPath: '/quality/inspectionParameter/getAllMasterData',
    excelDownloadPath: '/quality/inspectionParameter/excelDownload',
    updatePath: (id: string) => `/quality/inspectionParameter/update/${id}`,
    getByIdPath: (id: string) => `/quality/inspectionParameter/getById/${id}`,
    deletePath: (id: string) => `/quality/inspectionParameter/delete/${id}`,
  };
  constructor(private http: ApiService) {}

  create(payload: any) {
    return this.http
      .post(this.routes.createPath, payload)
      .pipe(map((res: any) => res));
  }
  getAll(params: any) {
    return this.http
      .get(this.routes.getAllPath, params)
      .pipe(map((res: any) => res));
  }
  getAllMasterData(params: any) {
    return this.http
      .get(this.routes.getAllMasterDataPath, params)
      .pipe(map((res: any) => res));
  }
  excelDownload(params: any) {
    return this.http
      .getFile(this.routes.excelDownloadPath, params)
      .pipe(map((res: any) => res));
  }
  update(id: string, payload: any) {
    return this.http
      .put(this.routes.updatePath(id), payload)
      .pipe(map((res: any) => res));
  }
  getById(id: string) {
    return this.http
      .get(this.routes.getByIdPath(id))
      .pipe(map((res: any) => res));
  }
  delete(id: string) {
    return this.http
      .delete(this.routes.deletePath(id))
      .pipe(map((res: any) => res));
  }
}
