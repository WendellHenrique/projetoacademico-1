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

@Module({
  imports: [TypeOrmModule.forRoot({
              type: 'mysql',
              host: 'localhost',
              port: 3306,
              username: 'root',
              password: '',
              database: 'mydb',
              entities: [AdministradorEntity,
                          AlunoEntity],
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
