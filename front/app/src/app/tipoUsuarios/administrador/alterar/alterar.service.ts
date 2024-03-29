import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AlunoPut, ProfessorPut, CursoPut, DisciplinaPut } from './alterar.interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AlterarService {

constructor(private http: HttpClient) { }

  putAluno(dado: AlunoPut): Observable<AlunoPut> {
   return  this.http.put<AlunoPut>('http://localhost:3000/administrador/alterarAluno', dado)
  }

  putProfessor(dado: ProfessorPut): Observable<ProfessorPut> {
    return  this.http.put<ProfessorPut>('http://localhost:3000/administrador/alterarProfessor', dado)
  }

  putCurso(dado: CursoPut): Observable<CursoPut> {
    return  this.http.put<CursoPut>('http://localhost:3000/administrador/alterarCurso', dado)
  }

  putDisciplina(dado: DisciplinaPut): Observable<DisciplinaPut> {
    return  this.http.put<DisciplinaPut>('http://localhost:3000/administrador/alterarDisciplina', dado)
  }

  getListaCursos(): Observable<any> {
    return this.http.get('http://localhost:3000/administrador/alterarCurso')
  }

  getListaDisciplina(): Observable<any> {
    return this.http.get('http://localhost:3000/administrador/alterarDisciplina')
  }

}
