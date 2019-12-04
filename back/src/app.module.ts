import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { LoginModule } from './login/login.module';
import { Connection } from 'typeorm';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AdministradorEntity } from './tiposUsuarios/entitys/administrador.entity';
import { AdministradorModule } from './tiposUsuarios/administrador/administrador.module';
import { AlunoModule } from './tiposUsuarios/Aluno/aluno.module';
import { AlunoEntity } from './tiposUsuarios/entitys/aluno.entity';
import { CursoEntity } from './tiposUsuarios/entitys/curso.entity';
import { TurmaEntity } from './tiposUsuarios/entitys/turma.entity';
import { NotaEntity } from './tiposUsuarios/entitys/nota.entity';
import { ProfessorEntity } from './tiposUsuarios/entitys/professor.entity';
import { DisciplinaEntity } from './tiposUsuarios/entitys/disciplina.entity';

@Module({
  imports: [TypeOrmModule.forRoot({
              type: 'mysql',
              host: 'localhost',
              port: 3306,
              username: 'root',
              password: '',
              database: 'projetofujioka',
              entities: [AdministradorEntity,
                          AlunoEntity,
                          CursoEntity,
                          TurmaEntity,
                          NotaEntity,
                          ProfessorEntity,
                          DisciplinaEntity],
              synchronize: true,
              }),
              LoginModule,
              AdministradorModule,
              AlunoModule
              ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
  constructor(private readonly conectarBanco: Connection){}
}
