import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import { Login } from './login.interface';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) { }

  private transmissao = new BehaviorSubject<Login>({matricula: 0, senha: ''})


  loginPost(usuario: Login): Observable<Login> {
    return this.http.post<Login>('http://localhost:3000/login', usuario)
  }

  loginGet(): Observable<any> {
    return this.http.get<any>('http://localhost:3000/login')
  }

  enviarUsuario(usuario: Login): void {
    this.transmissao.next(usuario)
  }

  receberUsuario() {
    return this.transmissao
  }

}

