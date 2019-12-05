import { Module } from '@nestjs/common';
import { ProfessorService } from './professor.service';
import { ProfessorController } from './professor.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProfessorEntity } from '../entitys/professor.entity';

@Module({
    imports: [TypeOrmModule.forFeature([ProfessorEntity])],
    exports: [TypeOrmModule],
    providers: [ProfessorService],
    controllers: [ProfessorController]
})

export class ProfessorModule { }