import { Controller, Put, Post, Body, Get, Res } from '@nestjs/common';
import { Response } from 'express';
import { GetDisciplinasProf } from './professor.interface'

@Controller('professor')

export class ProfessorController {

    @Get('ListaCamposProfessor')
    enviarListaCamposProfessor(@Res() res: Response) {
        res.status(200).send([{
            turma: 2019.2,
            disciplina: 'Banco de dados',
            periodo: '6 Periodo'
        }])
    }

    @Get('listaCamposEstudantes')
    enviarListaCamposEstudantes(@Res() res: Response) {
        res.status(200).send([{
            matricula: 2133,
            nome: 'wendell',
            notas: [9, 10, 10, 10]
        }])
    }

    @Post('')


}