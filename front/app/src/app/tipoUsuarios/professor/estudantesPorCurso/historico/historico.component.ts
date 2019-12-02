import { Component, OnInit } from '@angular/core';
import { HistoricoAlunoService } from './historicoAluno.service';
import { LoginService } from 'src/app/login/login.service';
import { Login } from 'src/app/login/login.interface';
import { HistoricoAluno } from './historicoAluno.interface';

@Component({
  selector: 'app-historico-professor',
  templateUrl: './historico.component.html',
  styleUrls: ['../../professor.component.css']
})
export class HistoricoProfessorComponent implements OnInit {

  constructor(private requicicao: HistoricoAlunoService, private tramissaoUsuario: LoginService) { }

  usuario: Login
  listaDisciplinas: Array<HistoricoAluno>
  listaMedias: Array<number>

  ngOnInit() {

    this.tramissaoUsuario.receberUsuario().subscribe(dado => this.usuario = dado)
    this.requicicao.postEnviarMatricula(this.usuario.matricula)
    setTimeout(() => {
      this.requicicao.getHistorico()
        .subscribe(dado => this.listaDisciplinas = dado)
    }, 500)
    this.mediaDasNotas()
  }

  mediaDasNotas() {
    let mediaTemporaria = 0
    this.listaDisciplinas.forEach(estudantes => {
      estudantes.notas.forEach((nota) => {
        mediaTemporaria += nota
      })
      this.listaMedias.push(mediaTemporaria)
      mediaTemporaria = 0
    })
  }


}
