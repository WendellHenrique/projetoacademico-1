import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import { Login } from './login.class';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private transmissaoTrocaTela = new BehaviorSubject<string>('')

  constructor(private http: HttpClient) { }


  loginPost(usuario: Login): Observable<Login> {
    return this.http.post<Login>('http://localhost:3000/login', usuario)
  }

  loginGet(): Observable<any> {
    return this.http.get<any>('http://localhost:3000/login')
  }

}

