import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { ApiService } from '@core/services';

@Injectable({
  providedIn: 'root',
})
export class SACService {
  routes: any = {
    createPath: '/purchase/SAC/create',
    getAllPath: '/purchase/SAC/getAll',
    getAllMasterDataPath: '/purchase/SAC/getAllMasterData',
    excelDownloadPath: '/purchase/SAC/excelDownload',
    updatePath: (id: string) => `/purchase/SAC/update/${id}`,
    getByIdPath: (id: string) => `/purchase/SAC/getById/${id}`,
    deletePath: (id: string) => `/purchase/SAC/delete/${id}`,
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
