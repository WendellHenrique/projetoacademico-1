import { Component, Input, Output } from '@angular/core';
import { LoginService } from './login.service';
import { Login } from './login.class';

@Component({
  selector: 'app-root',
  templateUrl: './app.components.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  listaItens = [
    'paraiba',
    'portugal',
    'ola'
  ]

  @Input() usuariodados: Login = {login: '', senha: '', disciplinas : {check: false, check2: false}, selectTest: null, dataVinculo: null }

  constructor(public loginServise: LoginService) {}

  entrar(): void {
    this.loginServise.loginPost(this.usuariodados).subscribe((result) => {
      console.log(result)
    })
  }

}
