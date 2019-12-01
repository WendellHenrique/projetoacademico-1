import { Component, OnInit} from '@angular/core';
import { AdministradorService } from './administrador.service';
import { DadosAlunos, DadosProfessor, DadosCurso, DadosDisciplina } from './administrador.interface';

@Component({
  selector: 'app-administrador',
  templateUrl: './administrador.component.html',
  styleUrls: ['./administrador.component.css']
})
export class AdministradorComponent implements OnInit {

  constructor(private administradorService: AdministradorService) { }

  listaAlunos: DadosAlunos
  listaProfessors: DadosProfessor
  listaCursos: DadosCurso
  listaDisciplinas: DadosDisciplina


  ngOnInit() {
    this.administradorService.getReceberListaAlunos()
                              .subscribe(dados => this.listaAlunos)

    this.administradorService.getReceberListaProfessores()
                              .subscribe(dados => this.listaProfessors)

    this.administradorService.getReceberListaCursos()
                              .subscribe(dados => this.listaCursos)

    this.administradorService.getReceberListaDisciplinas()
                              .subscribe(dados => this.listaDisciplinas)
  }

  alterarTravar(valor: string) {
    this.administradorService.alterarValorTravar(valor)
  }

}
