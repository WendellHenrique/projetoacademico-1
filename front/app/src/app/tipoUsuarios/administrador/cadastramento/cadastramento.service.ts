import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AlunoPost, ProfessorPost, CursoPost, DisciplinaPost } from './cadastrarmento.interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CadastramentoService {

constructor(private http: HttpClient) { }

  postAluno(dado: AlunoPost): Observable<AlunoPost> {
    return  this.http.post<AlunoPost>('http://localhost:3000/administrador/cadastrarAluno', dado)
  }

  postProfessor(dado: ProfessorPost) {
    return  this.http.post<ProfessorPost>('http://localhost:3000/administrador/cadastrarProfessor', dado)
  }

  postCurso(dado: CursoPost) {
    return  this.http.post<CursoPost>('http://localhost:3000/administrador/cadastrarCurso', dado)
  }

  postDisciplina(dado: DisciplinaPost) {
    return  this.http.post<DisciplinaPost>('http://localhost:3000/administrador/cadastrarDisciplina', dado)
  }

  getListaCursos(): Observable<any> {
    return this.http.get('http://localhost:3000/administrador/cadastramentoCurso')
  }

  getListaDisciplina(): Observable<any> {
    return this.http.get('http://localhost:3000/administrador/cadastramentoDisciplina')
  }

}
