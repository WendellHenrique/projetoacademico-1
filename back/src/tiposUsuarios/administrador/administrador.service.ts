import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { AdministradorEntity } from '../entitys/administrador.entity';
import { Repository } from 'typeorm';
import { TurmaEntity } from '../entitys/turma.entity';
import { AlunoEntity } from '../entitys/aluno.entity';
import { CursoEntity } from '../entitys/curso.entity';
import { ProfessorEntity } from '../entitys/professor.entity';
import { DisciplinaEntity } from '../entitys/disciplina.entity';

@Injectable()
export class AdministradorService {

    constructor(
        @InjectRepository(TurmaEntity)
        private readonly turmaRepository: Repository<TurmaEntity>,
        @InjectRepository(AlunoEntity)
        private readonly alunoRepository: Repository<AlunoEntity>,
        @InjectRepository(CursoEntity)
        private readonly cursoRepository: Repository<CursoEntity>,
        @InjectRepository(ProfessorEntity)
        private readonly professorRepository: Repository<ProfessorEntity>,
        @InjectRepository(DisciplinaEntity)
        private readonly disciplinaRepository: Repository<DisciplinaEntity>,
    ){}

    salvarProfessor(professor: ProfessorEntity) {
        return this.professorRepository.save(professor)
        
    }

    salvarAluno(aluno: AlunoEntity) {
        return this.alunoRepository.save(aluno)
    }

    salvarDisciplina(disciplina: DisciplinaEntity) {
        return this.disciplinaRepository.save(disciplina)
    }

    salvarCurso(curso: CursoEntity) {
        return this.cursoRepository.save(curso)
    }

    salvarTurma(turma: TurmaEntity) {
        return this.turmaRepository.save(turma)
    }


}
