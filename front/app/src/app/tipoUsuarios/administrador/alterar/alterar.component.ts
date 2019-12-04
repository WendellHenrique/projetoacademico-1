import { Component, OnInit } from '@angular/core';
import { AdministradorService } from '../administrador.service';
import { AlunoPut, ProfessorPut, CursoPut, DisciplinaPut } from './alterar.interface';
import { AlterarService } from './alterar.service';
import * as _ from 'lodash';
import { LoginService } from 'src/app/login/login.service';
import { Login } from 'src/app/login/login.interface';

@Component({
  selector: 'app-alterar',
  templateUrl: './alterar.component.html',
  styleUrls: ['../administrador.component.css']
})
export class AlterarComponent implements OnInit {

  travarValor: string

  usuario: Login

  aluno: AlunoPut = {bairro: '', cep: '', cidade: '', complemento: '', dataVinculo: '',
                    disciplinas: [], estado: '', nome: '', rua: '', senha: '' }
  professor: ProfessorPut = {nome: '', bairro: '', cep: '', cidade: '', complemento: '',
                              dataVinculo: '', estado: '', rua: '', senha: '', titulacao: '', disciplinas: []}
  curso: CursoPut = {nome: '', turmaAno: 0, turmaSemestre: 0}
  disciplina: DisciplinaPut = {nome: '', areaDeAtuacao: '', periodo: '', cursos: []}

  listaCursos = []
  listaDisciplina = []

  constructor(private transmissao: AdministradorService ,
              private alterarRequisicao: AlterarService, private usuarioService: LoginService) { }

  ngOnInit() {
    this.transmissao.obterValorTravar().subscribe( valor => this.travarValor = valor)
    this.usuarioService.receberUsuario().subscribe(dado => this.usuario = dado)

    this.alterarRequisicao.getListaCursos()
                              .subscribe(dados => this.listaCursos = dados)
    this.alterarRequisicao.getListaDisciplina()
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
    this.alterarRequisicao.putDisciplina(this.disciplina).subscribe()
  }

  enviarCurso(): void {
    this.alterarRequisicao.putCurso(this.curso).subscribe()
  }

  enviarProfessor(): void {
    this.alterarRequisicao.putProfessor(this.professor).subscribe()
  }

  enviarAluno(): void {
    this.alterarRequisicao.putAluno(this.aluno).subscribe()
  }

}
