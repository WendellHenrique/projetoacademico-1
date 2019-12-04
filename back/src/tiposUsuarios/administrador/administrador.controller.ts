import { Controller, Put, Post, Body, Get, Res } from '@nestjs/common';
import { CursoPost, DisciplinaPost, AlunoPost, ProfessorPost } from './administrador.interface';
import { Response } from 'express';

@Controller('administrador')
export class AdministradorController {

    @Get('listaAlunos')
    enviarListaAlunos(@Res() res: Response){
        res.status(200).send([{matricula: 4564, alunoNome: 'leo',
                                periodo: '4 periodo'}])
    }

    @Get('listaProfessores')
    enviarListaProfessores() {
        console.log('lista')
    }

    @Get('listaCursos')
    enviarListaCursos() {
        console.log('lista')
    }

    @Get('listaDisciplinas')
    enviarListaDisciplinas() {
        console.log('lista')
    }

    @Post('cadastrarCurso')
    receberCurso(@Body() curso: CursoPost){
        console.log(curso)
    }

    @Post('cadastrarDisciplina')
    receberDisciplina(@Body() disciplina: DisciplinaPost){
        console.log(disciplina)
    }

    @Post('cadastrarAluno')
    receberAluno(@Body() aluno: AlunoPost){
        console.log(aluno)
    }

    @Post('cadastrarProfessor')
    recebeProfessor(@Body() professor: ProfessorPost){
        console.log(professor)
    }

    @Get('cadastramentoCurso')
    pegarTodosOsCursos(@Res() res: Response){
        res.status(200).send([
            'ciencia da computacao',
            'medicina'
        ])
    }

    @Get('cadastramentoDisciplina')
    pegarTodosAsDisciplinas(@Res() res: Response){
        res.status(200).send([
            'estrutura de dados'
        ])
    }

}
