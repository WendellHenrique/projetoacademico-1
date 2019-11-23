import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Login } from './login.class';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) { }


  loginPost(usuario: Login): Observable<Login> {
    return this.http.post<Login>('http://localhost:3000/login', usuario)
  }



}

