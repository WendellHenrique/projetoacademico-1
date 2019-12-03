import { Component, OnInit} from '@angular/core';
import { AdministradorService } from './administrador.service';
import { DadosAlunos, DadosProfessor, DadosCurso, DadosDisciplina } from './administrador.interface';
import { Login } from 'src/app/login/login.interface';
import { LoginService } from 'src/app/login/login.service';

@Component({
  selector: 'app-administrador',
  templateUrl: './administrador.component.html',
  styleUrls: ['./administrador.component.css']
})
export class AdministradorComponent implements OnInit {

  constructor(private administradorService: AdministradorService, private usuarioService: LoginService) { }

  usuario: Login

  listaAlunos: DadosAlunos
  listaProfessors: DadosProfessor
  listaCursos: DadosCurso
  listaDisciplinas: DadosDisciplina


  ngOnInit() {
    this.usuarioService.receberUsuario().subscribe(dado => this.usuario = dado)

    this.administradorService.getReceberListaAlunos()
                              .subscribe(dados => this.listaAlunos = dados)

    this.administradorService.getReceberListaProfessores()
                              .subscribe(dados => this.listaProfessors = dados)

    this.administradorService.getReceberListaCursos()
                              .subscribe(dados => this.listaCursos = dados)

    this.administradorService.getReceberListaDisciplinas()
                              .subscribe(dados => this.listaDisciplinas = dados)
  }

  alterarTravar(valor: string) {
    this.administradorService.alterarValorTravar(valor)
  }

}
