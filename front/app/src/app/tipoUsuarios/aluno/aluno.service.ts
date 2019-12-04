import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Login } from 'src/app/login/login.interface';

@Injectable({
  providedIn: 'root'
})
export class AlunoService {

constructor(private http: HttpClient) { }

  postUsuario(usuario): Observable<number> {
    return  this.http.post<number>('http://localhost:3000/aluno/disciplinaAluno', usuario)
  }

  getDisciplinasComReferentesNotas(): Observable<any> {
    return this.http.get<any>('http://localhost:3000/aluno/historicoAluno')
  }

}
