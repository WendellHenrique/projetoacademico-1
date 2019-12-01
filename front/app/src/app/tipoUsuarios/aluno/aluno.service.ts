import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AlunoService {

constructor(private http: HttpClient) { }

  postUsuario(usuario) {
    this.http.post('localhost:3000/login', usuario)
  }

  getDisciplinasComReferentesNotas(): Observable<any> {
    return this.http.get<any>('localhost:3000/login')
  }

}
