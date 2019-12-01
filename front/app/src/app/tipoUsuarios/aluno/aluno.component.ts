import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/login/login.service';
import { AlunoService } from './aluno.service';
import { DisciplinasAluno } from './aluno.interface';
import { timeout } from 'q';
import { Login } from 'src/app/login/login.interface';

@Component({
  selector: 'app-aluno',
  templateUrl: './aluno.component.html',
  styleUrls: ['./aluno.component.css']
})
export class AlunoComponent implements OnInit {

  constructor(private tramissaoUsuario: LoginService, private requisicao: AlunoService) { }

  usuario: Login
  listaDisciplinas: Array<DisciplinasAluno>
  listaMediaNotas: Array<number>

  ngOnInit() {
    this.tramissaoUsuario.receberUsuario().subscribe(dado => this.usuario = dado)
    this.requisicao.postUsuario(this.usuario)
    setTimeout(() =>
              this.requisicao.getDisciplinasComReferentesNotas()
              .subscribe( dados => this.listaDisciplinas = dados), 500)

    this.mediaDasNotas()
  }

  mediaDasNotas() {
    let mediaTemporaria = 0
    this.listaDisciplinas.forEach( disciplina => {
      disciplina.notas.forEach( (nota) => {
        mediaTemporaria += nota
        })
      this.listaMediaNotas.push(mediaTemporaria)
    })
  }

}
