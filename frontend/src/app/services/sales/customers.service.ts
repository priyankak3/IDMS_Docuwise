import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { ApiService } from '@core/services';

@Injectable({
  providedIn: 'root',
})
export class CustomersService {
  routes: any = {
    createPath: '/sales/customerMaster/create',
    getAllPath: '/sales/customerMaster/getAll',
    getAllReportsPath: '/sales/customerMaster/getAllReports',
    getAllMasterDataPath: '/sales/customerMaster/getAllMasterData',
    getAllCustomersWithAddressPath: '/sales/customerMaster/getAllCustomersWithAddress',
    excelDownloadPath: '/sales/customerMaster/excelDownload',
    updatePath: (id: string) => `/sales/customerMaster/update/${id}`,
    getByIdPath: (id: string) => `/sales/customerMaster/getById/${id}`,
    deletePath: (id: string) => `/sales/customerMaster/delete/${id}`,
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
  getAllCustomersWithAddress(params: any) {
    return this.http
      .get(this.routes.getAllCustomersWithAddressPath, params)
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
  getAllReports(params: any) {
    return this.http
      .get(this.routes.getAllReportsPath, params)
      .pipe(map((res: any) => res));
  }
}
