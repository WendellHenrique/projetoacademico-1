import { Component, Input, Output, OnInit } from '@angular/core';
import { LoginService } from './login.service';
import { Login } from './login.class';
import * as $ from 'jquery';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(public loginServise: LoginService, private router: Router) { }

  @Input() usuariodados: Login = { matricula: 0, senha: ''}



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
    setTimeout(() =>  this.verificarLogin(), 500)
  }

  verificarLogin(): void {
    this.loginServise.loginGet().subscribe(tipo => {
      this.router.navigate([tipo.validarLogin])
    })
  }

}

