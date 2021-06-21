import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ServicemainService {
  public servidor;

  constructor(public httpClient: HttpClient) {
    this.servidor = environment.backendUrl;
  }

  public registrarse(data): any {
    return this.registrarseService(data).toPromise();
  }
  public registrarseService(data): Observable<any> {
    const body = { data }
    const url = this.servidor + 'usuario';
    return this.httpClient.post<[]>(url, body);
  }
  public login(data): any{
    return this.loginService(data).toPromise();
  }
  loginService(data: any): Observable<any> {
    const body = { data }
    const url = this.servidor + 'login';
    return this.httpClient.post<[]>(url, body);
  }
}

