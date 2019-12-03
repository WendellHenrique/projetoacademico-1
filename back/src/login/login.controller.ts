import { Controller, Get, Post, Body, Res, HttpStatus } from '@nestjs/common';
import { Login } from './login.interface';
import { Response } from 'express';

@Controller('login')
export class LoginController {

    //Validacoes login
    validacaoLogin: string

    @Post()
    pegarUsuario(@Body() usuario: Login) : any{
        console.log(usuario)

        let requicicaoLogin = usuario

    let professorTem = requicicaoLogin.matricula.match(/^00/)
    let administradorTem = requicicaoLogin.matricula.match(/^11/)

    if(professorTem != null){        
        this.validacaoLogin = 'professor'
    }

    if(administradorTem != null){
        this.validacaoLogin = 'administrador'
    }

    if(administradorTem == null && professorTem == null){
        this.validacaoLogin = 'aluno'
    }
    }

    @Get()
    enviarTipoUsuario(@Res() res: Response) {
        res.status(HttpStatus.OK).json({ validarLogin : this.validacaoLogin})
    }


}
