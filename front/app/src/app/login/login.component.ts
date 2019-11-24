import { Component, Input, Output, OnInit } from '@angular/core';
import { LoginService } from './login.service';
import { Login } from './login.class';
import * as $ from 'jquery';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(public loginServise: LoginService) { }

  @Input() usuariodados: Login = { login: '', senha: ''}



  ngOnInit() {
    $('.txtb input').on('focus', function() {
      $(this).addClass('focus');
    })

    $('.txtb input').on('blur', function() {
      if ($(this).val() === '') {
        $(this).removeClass('focus');
      }})
  }

  entrar(): void {
    this.loginServise.loginPost(this.usuariodados).subscribe()
    this.verificarLogin()
  }

  verificarLogin(): void {
    this.loginServise.loginGet().subscribe(test => {
      console.log(test)
    })
  }

}

