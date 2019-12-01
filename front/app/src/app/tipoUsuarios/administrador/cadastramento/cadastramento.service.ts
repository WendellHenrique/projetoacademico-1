import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AlunoPost, ProfessorPost, CursoPost, DisciplinaPost } from './cadastrarmento.interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CadastramentoService {

constructor(private http: HttpClient) { }

  postAluno(dado: AlunoPost) {
    this.http.post('localhost:3000/administrador/cadastrarAluno', dado)
  }

  postProfessor(dado: ProfessorPost) {
    this.http.post('localhost:3000/administrador/cadastrarProfessor', dado)
  }

  postCurso(dado: CursoPost) {
    this.http.post('localhost:3000/administrador/cadastrarCurso', dado)
  }

  postDisciplina(dado: DisciplinaPost) {
    this.http.post('localhost:3000/administrador/cadastrarDisciplina', dado)
  }

  getListaCursos(): Observable<any> {
    return this.http.get('localhost:3000/administrador/cadastramentoCurso')
  }

}
