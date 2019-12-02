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

  listaCursos: []
  listaCheckGroupDeDisciplinas: string[]
  listaCheckGroupDeProfessor: string[]
  listaDisciplina: []

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
    if (!this.listaCheckGroupDeDisciplinas.includes(dado)) {
      this.listaCheckGroupDeDisciplinas.push(dado)
    } else {
      _.remove(this.listaCheckGroupDeDisciplinas, dado)
    }
  }

  checkGroupDisciplinasDeProfessor(dado) {
    if (!this.listaCheckGroupDeProfessor.includes(dado)) {
      this.listaCheckGroupDeProfessor.push(dado)
    } else {
      _.remove(this.listaCheckGroupDeProfessor, dado)
    }
  }

  enviarDisciplina(dado: DisciplinaPut): void {
    this.alterarRequisicao.putDisciplina(dado)
  }

  enviarCurso(dado: CursoPut): void {
    this.alterarRequisicao.putCurso(dado)
  }

  enviarProfessor(dado: ProfessorPut): void {
    this.alterarRequisicao.putProfessor(dado)
  }

  enviarAluno(dado: AlunoPut): void {
    this.alterarRequisicao.putAluno(dado)
  }

}
