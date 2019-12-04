import { Controller, Put, Post, Body, Get, Res } from '@nestjs/common';
import { CursoPost, DisciplinaPost, AlunoPost, ProfessorPost } from './aluno.interface';
import { Response } from 'express';

@Controller('aluno')
export class alunoController {

    @Post('disciplinaAluno')
    receberMatricula(@Body() matricula: number) {
        console.log('asdasd')
    }


    @Get('historicoAluno')
    pegarHistoricoAluno(@Res() res: Response){
        res.status(200).send([
            'Banco de dados',
            '10',
            '10',
            '10',
            '10'
        ])
    }

    @Get('disciplinaAluno')
    pegarTodosAsDisciplinas(@Res() res: Response){
        res.status(200).send({
            nome: 'algebra',
            notas: [5,5,5]
    })
    }
    
}
