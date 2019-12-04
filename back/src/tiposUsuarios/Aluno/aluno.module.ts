import { Module } from '@nestjs/common';
import { AlunoService } from './aluno.service';
import { alunoController } from './aluno.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AlunoEntity } from '../entitys/aluno.entity';

@Module({
    imports: [TypeOrmModule.forFeature([AlunoEntity])],
    exports: [TypeOrmModule],
    providers: [AlunoService],
    controllers: [alunoController]
})
export class AlunoModule {}
