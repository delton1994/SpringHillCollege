import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { enviroment } from 'src/enviroments/enviroments';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient) {}
   apiUrl = enviroment.apiAuthUrl;

  login(username: string, password: string): Observable<any> {
    return this.http.post(
      `${this.apiUrl}`,
      {
        username,
        password,
      }
    );
  }

  register(username: string, email: string, password: string): Observable<any> {
    return this.http.post(
      enviroment.apiBaseUrl,
      {
        username,
        email,
        password,
      },
      httpOptions
    );
  }

  logout(): Observable<any> {
    return this.http.post(enviroment.apiAuthUrl, { }, httpOptions);
  }
}