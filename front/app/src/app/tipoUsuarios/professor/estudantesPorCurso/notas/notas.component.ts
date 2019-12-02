import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/login/login.service';
import { InserirNotasService } from './notas.service';
import { Login } from 'src/app/login/login.interface';
import { InserirNotas } from './notas.interface';

@Component({
  selector: 'app-notas',
  templateUrl: './notas.component.html',
  styleUrls: ['../../professor.component.css']
})
export class NotasComponent implements OnInit {

  constructor(private inserirNotas: LoginService, private insercao: InserirNotasService) { }

  usuario: Login
  InsercaoNotas: InserirNotas = {
    nota: 0,
    tipoNota: ''
  }

  ngOnInit() {
    this.inserirNotas.receberUsuario().subscribe(dado => this.usuario = dado)

  }

  GuardarNota(valor: InserirNotas) {
    this.insercao.postNota(valor)
  }

}
