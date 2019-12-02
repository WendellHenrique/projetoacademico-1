import { Component, OnInit } from '@angular/core';
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
  curso: CursoPost = {nome: '', turmaAno: 0, turmaSemestre: 0}
  disciplina: DisciplinaPost = {nome: '', areaDeAtuacao: '', periodo: '', cursos: []}

  listaCursos: []
  listaCheckGroupDeDisciplinas: string[]
  listaCheckGroupDeProfessor: string[]
  listaDisciplina: []

  ngOnInit() {
    this.usuarioService.receberUsuario().subscribe(dado => this.usuario = dado)

    this.cadastraRequisicao.getListaCursos()
                              .subscribe(dados => this.listaCursos = dados)
    this.cadastraRequisicao.getListaDisciplina()
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

  enviarDisciplina(dado: DisciplinaPost): void {
    this.cadastraRequisicao.postDisciplina(dado)
  }

  enviarCurso(dado: CursoPost): void {
    this.cadastraRequisicao.postCurso(dado)
  }

  enviarProfessor(dado: ProfessorPost): void {
    this.cadastraRequisicao.postProfessor(dado)
  }

  enviarAluno(dado: AlunoPost): void {
    this.cadastraRequisicao.postAluno(dado)
  }

}
