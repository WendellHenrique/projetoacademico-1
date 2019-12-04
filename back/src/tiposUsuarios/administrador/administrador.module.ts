import { Module } from '@nestjs/common';
import { AdministradorService } from './administrador.service';
import { AdministradorController } from './administrador.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AlunoEntity } from '../entitys/aluno.entity';
import { CursoEntity } from '../entitys/curso.entity';
import { DisciplinaEntity } from '../entitys/disciplina.entity';
import { NotaEntity } from '../entitys/nota.entity';
import { TurmaEntity } from '../entitys/turma.entity';
import { ProfessorEntity } from '../entitys/professor.entity';

@Module({
    imports: [TypeOrmModule.forFeature([
        AlunoEntity,
        CursoEntity,
        DisciplinaEntity,
        NotaEntity,
        TurmaEntity,
        ProfessorEntity
    ])],
    exports: [TypeOrmModule],
    providers: [AdministradorService],
    controllers: [AdministradorController]
})
export class AdministradorModule {}
