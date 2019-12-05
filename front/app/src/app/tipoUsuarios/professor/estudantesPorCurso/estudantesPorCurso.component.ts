import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/login/login.service';
import { EstudantesPorCursoService } from './estudantes.service';
import { EstudantesPorCurso } from './estudantesPorCurso.interface';
import { Login } from 'src/app/login/login.interface';

@Component({
  selector: 'app-estudantes-por-curso',
  templateUrl: './estudantesPorCurso.component.html',
  styleUrls: ['../professor.component.css']
})
export class EstudantesPorCursoComponent implements OnInit {

  constructor(private tramissaoUsuario: LoginService, private requisicao: EstudantesPorCursoService) { }

  usuario: Login
  listaCamposEstudantes: Array<EstudantesPorCurso>
  listaMedias: Array<number>

  ngOnInit() {

    this.tramissaoUsuario.receberUsuario().subscribe(dado => this.usuario = dado)
    //this.requisicao.postUsuario(this.usuario)
    setTimeout(() =>
      this.requisicao.getEstudantesPorCurso()
        .subscribe(dados => this.listaCamposEstudantes = dados), 500)
    this.mediaDasNotas()
  }

  mediaDasNotas() {
    let mediaTemporaria = 0
    this.listaCamposEstudantes.forEach(estudantes => {
      estudantes.notas.forEach((nota) => {
        mediaTemporaria += nota
      })
      this.listaMedias.push(mediaTemporaria)
      mediaTemporaria = 0
    })
  }

}
