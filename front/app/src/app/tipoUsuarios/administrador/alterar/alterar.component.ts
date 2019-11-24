import { Component, OnInit } from '@angular/core';
import { TransmissaoService } from '../transmissao.service';

@Component({
  selector: 'app-alterar',
  templateUrl: './alterar.component.html',
  styleUrls: ['../administrador.component.css']
})
export class AlterarComponent implements OnInit {

  private travarValor: string

  constructor(private transmissao: TransmissaoService) { }

  ngOnInit() {
    this.transmissao.obterValorTravar().subscribe( valor => this.travarValor = valor)
  }

}
