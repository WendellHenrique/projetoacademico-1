import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/login/login.service';
import { ProfessorService } from './professor.service';
import { Login } from 'src/app/login/login.interface';
import { DisciplinasLecionadas } from './professor.interface';

@Component({
  selector: 'app-professor',
  templateUrl: './professor.component.html',
  styleUrls: ['./professor.component.css']
})
export class ProfessorComponent implements OnInit {

  constructor(private tramissaoUsuario: LoginService, private requisicao: ProfessorService) { }

  usuario: Login
  ListaCamposProfessor: Array<DisciplinasLecionadas>

  ngOnInit() {

    this.tramissaoUsuario.receberUsuario().subscribe(dado => this.usuario = dado)
    //this.requisicao.postUsuario(this.usuario)
    setTimeout(() =>
      this.requisicao.getDisciplinasLecionadas()
        .subscribe(dados => this.ListaCamposProfessor = dados), 500)
  }

}
