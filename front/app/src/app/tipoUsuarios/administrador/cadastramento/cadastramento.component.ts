import { Component, OnInit } from '@angular/core';
import { CadastramentoService } from './cadastramento.service';
import { AlunoPost, ProfessorPost, CursoPost, DisciplinaPost } from './cadastrarmento.interface';

@Component({
  selector: 'app-cadastramento',
  templateUrl: './cadastramento.component.html',
  styleUrls: ['../administrador.component.css']
})
export class CadastramentoComponent implements OnInit {

  constructor(private cadastraRequisicao: CadastramentoService) { }

  aluno: AlunoPost
  professor: ProfessorPost
  curso: CursoPost
  disciplina: DisciplinaPost = {nome: '', areaDeAtuacao: '', periodo: ''}

  listaCursos: []

  ngOnInit() {
    this.cadastraRequisicao.getListaCursos()
                              .subscribe(dados => this.listaCursos = dados)
  }

  enviarDisciplina(dado: DisciplinaPost): void {
    this.cadastraRequisicao.postDisciplina(dado)
  }

  enviarCurso(dado: CursoPost): void {
    this.cadastraRequisicao.postCurso(dado)
  }

}
