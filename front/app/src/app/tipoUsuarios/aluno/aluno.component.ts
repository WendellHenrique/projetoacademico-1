import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/login/login.service';
import { AlunoService } from './aluno.service';
import { Aluno } from './aluno.class';
import { timeout } from 'q';
import { Login } from 'src/app/login/login.class';

@Component({
  selector: 'app-aluno',
  templateUrl: './aluno.component.html',
  styleUrls: ['./aluno.component.css']
})
export class AlunoComponent implements OnInit {

  constructor(private tramissaoUsuario: LoginService, private requisicao: AlunoService) { }

  usuario: Login
  aluno: Aluno
  mediaNotas: number

  ngOnInit() {
    this.tramissaoUsuario.receberUsuario().subscribe(dado => this.usuario = dado)
    this.requisicao.postUsuario(this.usuario)
    setTimeout(() =>
              this.requisicao.getDisciplinasComReferentesNotas()
              .subscribe( dados => this.aluno = dados), 500)

    this.mediaDasNotas()
  }

  mediaDasNotas() {
    this.aluno.notas.reduce( (_, valor) => this.mediaNotas = valor + this.mediaNotas)
  }

}
