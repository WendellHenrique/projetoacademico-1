import { Component, OnInit} from '@angular/core';
import { TransmissaoService } from './transmissao.service';

@Component({
  selector: 'app-administrador',
  templateUrl: './administrador.component.html',
  styleUrls: ['./administrador.component.css']
})
export class AdministradorComponent implements OnInit {

  constructor(private tramissao: TransmissaoService) { }

  ngOnInit() {
  }

  alterarTravar(valor: string) {
    this.tramissao.alterarValorTravar(valor)
  }

}
