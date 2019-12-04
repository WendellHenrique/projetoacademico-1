import { Controller, Put, Post, Body, Get, Res } from '@nestjs/common';
import { CursoPost, DisciplinaPost, AlunoPost, ProfessorPost } from './administrador.interface';
import { Response } from 'express';
import { AdministradorService } from './administrador.service';

@Controller('administrador')
export class AdministradorController {

    constructor(private serviceAdministrador: AdministradorService){}

    @Get('listaAlunos')
    enviarListaAlunos(@Res() res: Response){
        res.status(200).send([{matricula: 4564, alunoNome: 'leo',
                                periodo: '4 periodo'}])
    }

    @Get('listaProfessores')
    enviarListaProfessores() {
        console.log('listaprof')
        this.serviceAdministrador.salvarAdministrador({bairro:'asd',
    cep:'asd', cidade: 'asd', complemento: '', dataVinculo: null,
    estado: '', nome: 'leo', numero: '4564', rua: '1486', senha: 'asd',
    id: null})
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

    @Put('alterarCurso')
    alterarCurso(@Body() curso: CursoPost){
        console.log(curso)
    }

    @Put('alterarDisciplina')
    alterarDisciplina(@Body() curso: CursoPost){
        console.log(curso)
    }

    @Put('alterarProfessor')
    alterarProfessor(@Body() curso: CursoPost){
        console.log(curso)
    }

    @Put('alterarAluno')
    alterarAluno(@Body() curso: CursoPost){
        console.log(curso)
    }

    @Get('alterarCurso')
    pegarTodosOsCursosAlterar(@Res() res: Response){
        res.status(200).send([
            'ciencia da computacao',
            'medicina'
        ])
    }

    @Get('alterarDisciplina')
    pegarTodosAsDisciplinasAlterar(@Res() res: Response){
        res.status(200).send([
            'estrutura de dados'
        ])
    }

}
