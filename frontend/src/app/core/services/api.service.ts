import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';  // Use the environment API URL

@Injectable({
  providedIn: 'root',
})

export class AdminApiService {
  constructor(private http: HttpClient) {}

  private getHeaders() {
    const token = localStorage.getItem('docuwise_token');
    console.log('API Base:', environment.apiEndpoint);
    return new HttpHeaders().set('Authorization', `Bearer ${token}`);
  }

  // Example GET request
  getTenants(): Observable<any> {
    const headers = this.getHeaders();
    return this.http.get(`/admin/tenants`, { headers });
  }

  // Example POST request
  createTenant(formData: any): Observable<any> {
    const headers = this.getHeaders();
    return this.http.post(`/admin/tenants`, formData, { headers });
  }

  getUsers(): Observable<any> {
    const headers = this.getHeaders();
    return this.http.get(`/admin/users`, { headers });
  }

  createUser(userData: any, token: string): Observable<any> {
    const headers = this.getHeaders();
    return this.http.post(`/admin/users`, userData, { headers });
  }

  getUploads(tenantId: string): Observable<any> {
    const headers = this.getHeaders();
    return this.http.get(`${environment.apiEndpoint}/uploads`, { 
      headers,
      params: { tenantId }
    });
  }

  // Upload a new document
  uploadDocument(formData: FormData): Observable<any> {
    const headers = this.getHeaders();
    return this.http.post(`${environment.apiEndpoint}/uploads`, formData, { headers });
  }

  // Get extracted results for a specific upload
  getExtractedResults(uploadId: string): Observable<any> {
    const headers = this.getHeaders();
    return this.http.get(`${environment.apiEndpoint}/extracted-results/${uploadId}`, { headers });
  }
}
