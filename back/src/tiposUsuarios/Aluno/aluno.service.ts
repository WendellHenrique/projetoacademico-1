import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { AlunoEntity } from '../entitys/aluno.entity';
import { Repository } from 'typeorm';

@Injectable()
export class AlunoService {

    constructor(
        @InjectRepository(AlunoEntity)
        private readonly alunoRepository: Repository<AlunoEntity>,
    ){}

    getAluno(): Promise<AlunoEntity> {
        return this.alunoRepository
        .query('SELECT matricula, nome, senha FROM aluno')
    }


}
