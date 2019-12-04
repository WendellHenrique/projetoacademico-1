import { Component, OnInit, Input } from '@angular/core';
import { CadastramentoService } from './cadastramento.service';
import { AlunoPost, ProfessorPost, CursoPost, DisciplinaPost } from './cadastrarmento.interface';
import * as _ from 'lodash';
import { Login } from 'src/app/login/login.interface';
import { LoginService } from 'src/app/login/login.service';

@Component({
  selector: 'app-cadastramento',
  templateUrl: './cadastramento.component.html',
  styleUrls: ['../administrador.component.css']
})
export class CadastramentoComponent implements OnInit {

  constructor(private cadastraRequisicao: CadastramentoService, private usuarioService: LoginService) { }

  usuario: Login

  aluno: AlunoPost = {bairro: '', cep: '', cidade: '', complemento: '', dataVinculo: '',
                    disciplinas: [], estado: '', nome: '', rua: '', senha: '' }
  professor: ProfessorPost = {nome: '', bairro: '', cep: '', cidade: '', complemento: '',
                              dataVinculo: '', estado: '', rua: '', senha: '', titulacao: '', disciplinas: []}
  @Input() curso: CursoPost = {nome: '', turmaAno: 2019, turmaSemestre: 1}
  disciplina: DisciplinaPost = {nome: '', areaDeAtuacao: '', periodo: '', cursos: []}

  listaCursos = []
  listaDisciplina = []

  ngOnInit() {
    this.usuarioService.receberUsuario().subscribe(dado => this.usuario = dado)

    this.cadastraRequisicao.getListaCursos()
                              .subscribe(dados => this.listaCursos = dados)
    this.cadastraRequisicao.getListaDisciplina()
                            .subscribe(dados =>  this.listaDisciplina = dados )
  }

  checkGroupCursosDeDisciplinas(dado) {
    if (this.disciplina.cursos.includes(dado)) {
      this.disciplina.cursos = _.remove(this.disciplina.cursos, dado)
    } else {
      this.disciplina.cursos.push(dado)
    }
  }

  checkGroupDisciplinasDeProfessor(dado) {
    if (this.professor.disciplinas.includes(dado)) {
      this.professor.disciplinas = _.remove(this.professor.disciplinas, dado)
    } else {
      this.professor.disciplinas.push(dado)
    }
  }

  checkGroupDisciplinasDeAluno(dado) {
    if (this.aluno.disciplinas.includes(dado)) {
      this.aluno.disciplinas = _.remove(this.aluno.disciplinas, dado)
    } else {
      this.aluno.disciplinas.push(dado)
    }
  }

  enviarDisciplina(): void {
    this.cadastraRequisicao.postDisciplina(this.disciplina).subscribe()
  }

  enviarCurso(): void {
    this.cadastraRequisicao.postCurso(this.curso).subscribe()
  }

  enviarProfessor(dado: ProfessorPost): void {
    this.cadastraRequisicao.postProfessor(this.professor).subscribe()
  }

  enviarAluno(dado: AlunoPost): void {
    this.cadastraRequisicao.postAluno(this.aluno).subscribe()
  }

}
