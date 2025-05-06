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
    return this.http.get(`${environment.apiEndpoint}/admin/tenants`, { headers });
  }

  // Example POST request
  createTenant(formData: any): Observable<any> {
    const headers = this.getHeaders();
    return this.http.post(`${environment.apiEndpoint}/admin/tenants`, formData, { headers });
  }

  getUsers(): Observable<any> {
    const headers = this.getHeaders();
    console.log('API Base:', `${environment.apiEndpoint}/admin/users`);
    return this.http.get(`${environment.apiEndpoint}/admin/users`, { headers });
  }

  createUser(userData: any, token: string): Observable<any> {
    const headers = this.getHeaders();
    return this.http.post(`${environment.apiEndpoint}/admin/users`, userData, { headers });
  }
}
