import { Component } from '@angular/core';
import { LoginService } from './login.service';
import { Login } from './login.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.components.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  usuariotest: Login

  constructor(public loginServise: LoginService) {}

  entrar(login: string, senha: string): void {
    this.usuariotest.login = login
    this.usuariotest.senha = senha
    console.log(this.usuariotest)
    this.loginServise.loginPost(this.usuariotest)
  }

}
