import { Component, OnInit } from '@angular/core';
import { AdministradorService } from '../administrador.service';

@Component({
  selector: 'app-alterar',
  templateUrl: './alterar.component.html',
  styleUrls: ['../administrador.component.css']
})
export class AlterarComponent implements OnInit {

  private travarValor: string

  constructor(private transmissao: AdministradorService) { }

  ngOnInit() {
    this.transmissao.obterValorTravar().subscribe( valor => this.travarValor = valor)
  }

}
