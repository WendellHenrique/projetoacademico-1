import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AlunoPut, ProfessorPut, CursoPut, DisciplinaPut } from './alterar.interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AlterarService {

constructor(private http: HttpClient) { }

  putAluno(dado: AlunoPut) {
    this.http.put('localhost:3000/administrador/alterarAluno', dado)
  }

  putProfessor(dado: ProfessorPut) {
    this.http.put('localhost:3000/administrador/alterarProfessor', dado)
  }

  putCurso(dado: CursoPut) {
    this.http.put('localhost:3000/administrador/alterarCurso', dado)
  }

  putDisciplina(dado: DisciplinaPut) {
    this.http.put('localhost:3000/administrador/alterarDisciplina', dado)
  }

  getListaCursos(): Observable<any> {
    return this.http.get('localhost:3000/administrador/alterarCurso')
  }

  getListaDisciplina(): Observable<any> {
    return this.http.get('localhost:3000/administrador/alterarDisciplina')
  }

}
