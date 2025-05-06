import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { ApiService } from '@core/services';

@Injectable({
  providedIn: 'root',
})
export class SalesInvoiceService {
  routes: any = {
    createPath: '/dispatch/salesInvoice/create',
    createDirectTaxInvoicePath: '/dispatch/salesInvoice/createDirectTaxInvoice',
    getAllPath: '/dispatch/salesInvoice/getAll',
    getAllEwayBillListPath: '/dispatch/salesInvoice/getAllEwayBillList',
    eWayBillGeneratePath: '/dispatch/salesInvoice/eWayBillGenerate',
    eInvoiceGeneratePath: '/dispatch/salesInvoice/eInvoiceGenerate',
    getAllReportsPath: '/dispatch/salesInvoice/getAllReports',
    getAllSILineDetailsPath: '/dispatch/salesInvoice/getAllSILineDetails',
    getAllMasterDataPath: '/dispatch/salesInvoice/getAllMasterData',
    getAllSalesByCustomerReportsPath:
      '/dispatch/salesInvoice/getAllSalesByCustomerReports',
    getAllSalesBySKUReportsPath:
      '/dispatch/salesInvoice/getAllSalesBySKUReports',
    getAllTaxInvoiceTrendAnalysisReportsPath:
      '/dispatch/salesInvoice/getAllTaxInvoiceTrendAnalysisReports',
    excelDownloadPath: '/dispatch/salesInvoice/excelDownload',
    updateDirectTaxInvoicePath: (id: string) =>
      `/dispatch/salesInvoice/updateDirectTaxInvoice/${id}`,
    getByIdPath: (id: string) => `/dispatch/salesInvoice/getById/${id}`,
    getAllSIDetailsByIdPath: (id: string) =>
      `/dispatch/salesInvoice/getAllSIDetailsById/${id}`,
    getSalesInvoiceByIdForPDFPath: (id: string) =>
      `/dispatch/salesInvoice/getSalesInvoiceByIdForPDF/${id}`,
    deletePath: (id: string) => `/dispatch/salesInvoice/delete/${id}`,
    previewTaxInvPath: `/dispatch/salesInvoice/previewTaxInv`,
  };
  constructor(private http: ApiService) {}

  create(payload: any) {
    return this.http
      .post(this.routes.createPath, payload)
      .pipe(map((res: any) => res));
  }
  eWayBillGenerate(payload: any) {
    return this.http
      .post(this.routes.eWayBillGeneratePath, payload)
      .pipe(map((res: any) => res));
  }
  eInvoiceGenerate(payload: any) {
    return this.http
      .post(this.routes.eInvoiceGeneratePath, payload)
      .pipe(map((res: any) => res));
  }
  createDirectTaxInvoice(payload: any) {
    return this.http
      .post(this.routes.createDirectTaxInvoicePath, payload)
      .pipe(map((res: any) => res));
  }
  getAll(params: any) {
    return this.http
      .get(this.routes.getAllPath, params)
      .pipe(map((res: any) => res));
  }
  getAllEwayBillList(params: any) {
    return this.http
      .get(this.routes.getAllEwayBillListPath, params)
      .pipe(map((res: any) => res));
  }
  getAllSalesByCustomerReports(params: any) {
    return this.http
      .get(this.routes.getAllSalesByCustomerReportsPath, params)
      .pipe(map((res: any) => res));
  }
  getAllTaxInvoiceTrendAnalysisReports(params: any) {
    return this.http
      .get(this.routes.getAllTaxInvoiceTrendAnalysisReportsPath, params)
      .pipe(map((res: any) => res));
  }
  getAllSalesBySKUReports(params: any) {
    return this.http
      .get(this.routes.getAllSalesBySKUReportsPath, params)
      .pipe(map((res: any) => res));
  }
  getAllReports(params: any) {
    return this.http
      .get(this.routes.getAllReportsPath, params)
      .pipe(map((res: any) => res));
  }
  getAllSILineDetails(params: any) {
    return this.http
      .get(this.routes.getAllSILineDetailsPath, params)
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
  updateDirectTaxInvoice(id: string, payload: any) {
    return this.http
      .put(this.routes.updateDirectTaxInvoicePath(id), payload)
      .pipe(map((res: any) => res));
  }
  getById(id: string) {
    return this.http
      .get(this.routes.getByIdPath(id))
      .pipe(map((res: any) => res));
  }
  getAllSIDetailsById(id: string) {
    return this.http
      .get(this.routes.getAllSIDetailsByIdPath(id))
      .pipe(map((res: any) => res));
  }
  getSalesInvoiceByIdForPDF(id: string) {
    return this.http
      .get(this.routes.getSalesInvoiceByIdForPDFPath(id))
      .pipe(map((res: any) => res));
  }
  delete(id: string) {
    return this.http
      .delete(this.routes.deletePath(id))
      .pipe(map((res: any) => res));
  }
  previewTaxInv(payload: any) {
    return this.http
      .post(this.routes.previewTaxInvPath, payload)
      .pipe(map((res: any) => res));
  }
}
