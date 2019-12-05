import { Controller, Put, Post, Body, Get, Res } from '@nestjs/common';
import { CursoPost, DisciplinaPost, AlunoPost, ProfessorPost } from './administrador.interface';
import { Response } from 'express';
import { AdministradorService } from './administrador.service';
import { CursoEntity } from '../entitys/curso.entity';
import { TurmaEntity } from '../entitys/turma.entity';
import { DisciplinaEntity } from '../entitys/disciplina.entity';
import { AlunoEntity } from '../entitys/aluno.entity';
import { ProfessorEntity } from '../entitys/professor.entity';

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

        const cursoSalvar = new CursoEntity()
        cursoSalvar.nome = curso.nome

        const turmaSalvar = new TurmaEntity()
        turmaSalvar.ano = curso.turmaAno
        turmaSalvar.semestre = curso.turmaSemestre
        turmaSalvar.curso = cursoSalvar

        this.serviceAdministrador.salvarCurso(cursoSalvar)
        this.serviceAdministrador.salvarTurma(turmaSalvar)
    }

    @Post('cadastrarDisciplina')
    receberDisciplina(@Body() disciplina: DisciplinaPost){

        const disciplinaSalvar = new DisciplinaEntity()
        disciplinaSalvar.nome = disciplina.nome
        disciplinaSalvar.area = disciplina.areaDeAtuacao
        disciplinaSalvar.periodo = disciplina.periodo
        disciplinaSalvar.professor = null
        disciplinaSalvar.turma = null

        this.serviceAdministrador.salvarDisciplina(disciplinaSalvar)
    }

    @Post('cadastrarAluno')
    receberAluno(@Body() aluno: AlunoPost){
        
        const alunoSalvar = new AlunoEntity()
        alunoSalvar.nome = aluno.nome
        alunoSalvar.bairro = aluno.bairro
        alunoSalvar.cep = aluno.cep
        alunoSalvar.cidade = aluno.cidade
        alunoSalvar.complemento = aluno.complemento
        alunoSalvar.dataVinculo = aluno.dataVinculo
        alunoSalvar.estado = aluno.estado
        alunoSalvar.numero = aluno.numero
        alunoSalvar.rua = aluno.rua
        alunoSalvar.senha = aluno.senha
        alunoSalvar.turma = null

        this.serviceAdministrador.salvarAluno(alunoSalvar)
    }

    @Post('cadastrarProfessor')
    recebeProfessor(@Body() professor: ProfessorPost){
        
        const professorSalvar = new ProfessorEntity()
        professorSalvar.nome = professor.nome
        professorSalvar.bairro = professor.bairro
        professorSalvar.cep = professor.cep
        professorSalvar.cidade = professor.cidade
        professorSalvar.complemento = professor.complemento
        professorSalvar.dataVinculo = professor.dataVinculo
        professorSalvar.estado = professor.estado
        professorSalvar.numero = professor.numero
        professorSalvar.rua = professor.rua
        professorSalvar.senha = professor.senha
        professorSalvar.titulacao = professor.titulacao

        this.serviceAdministrador.salvarProfessor(professorSalvar)
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
