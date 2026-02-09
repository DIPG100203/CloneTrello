import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { enviroment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  apiUrl = enviroment.apiURL;

  constructor(
    private http: HttpClient
  ) { }

  login(email: string, password: string) {

    return this.http.post(`${this.apiUrl}/api/v1/auth/login`, {
      email,
      password
    });
  }
}
