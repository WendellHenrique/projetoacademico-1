import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TransmissaoService {

  private transmissao = new BehaviorSubject<string>('')

  constructor() { }

  alterarValorTravar(valor: string) {
    this.transmissao.next(valor)
  }

  obterValorTravar() {
    return this.transmissao
  }

}
