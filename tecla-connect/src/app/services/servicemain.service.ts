import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
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
    const tokenBack = "Bearer" + sessionStorage.getItem('token')
    const httpParams = new HttpParams().set("access_token", tokenBack)
    const body = { data }
    const url = this.servidor + 'usuario';
    return this.httpClient.post<[]>(url, body, {params: httpParams});
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

