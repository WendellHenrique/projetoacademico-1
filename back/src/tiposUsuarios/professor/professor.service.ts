import { InjectRepository } from '@nestjs/typeorm';
import { ProfessorEntity } from '../entitys/professor.entity';
import { Repository } from 'typeorm';
import { Injectable } from '@nestjs/common';

@Injectable()
export class ProfessorService {

    constructor(
        @InjectRepository(ProfessorEntity)
        private readonly professorRepository: Repository<ProfessorEntity>
    ) { }


}

