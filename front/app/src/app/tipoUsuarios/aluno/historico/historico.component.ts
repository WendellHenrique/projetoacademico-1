import { Component, OnInit, Input } from '@angular/core';
import { HistoricoService } from './historico.service';
import { DisciplinasHistorico } from './historico.interface';
import { Login } from 'src/app/login/login.interface';
import { LoginService } from 'src/app/login/login.service';

@Component({
  selector: 'app-historico-aluno',
  templateUrl: './historico.component.html',
  styleUrls: ['../aluno.component.css']
})
export class HistoricoAlunoComponent implements OnInit {

  constructor(private requicicao: HistoricoService, private tramissaoUsuario: LoginService) { }

  usuario: Login
  listaDisciplinas: Array<DisciplinasHistorico>
  listaMediaNotas: Array<number>

  ngOnInit() {
    this.tramissaoUsuario.receberUsuario().subscribe(dado => this.usuario = dado)
    this.requicicao.postEnviarMatricula(this.usuario.matricula)
    setTimeout(() => {
      this.requicicao.getPegarHistorico()
                      .subscribe(dado => this.listaDisciplinas = dado)
    }, 500)
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
