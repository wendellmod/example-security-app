import { AuthResponse } from './../interfaces/authResponse';
import { AuthRequest } from './../interfaces/authRequest';
import { environment } from '../../environments/environment'
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  api: string = '/auth';

  constructor(private http: HttpClient) { }

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  authenticate(authRequest: AuthRequest): Observable<AuthResponse> {
    const url = `${environment.exampleSecurityApi}${this.api}/authenticate`;
    return this.http.post<AuthResponse>(url, authRequest, this.httpOptions)
  }

}
