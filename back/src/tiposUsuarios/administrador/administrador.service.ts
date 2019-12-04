import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { AdministradorEntity } from '../entitys/administrador.entity';
import { Repository } from 'typeorm';

@Injectable()
export class AdministradorService {

    constructor(
        @InjectRepository(AdministradorEntity)
        private readonly administradorRepository: Repository<AdministradorEntity>,
        
    ){}

    getAdministrador(): Promise<AdministradorEntity> {
        return this.administradorRepository
        .query('SELECT matricula, nome, senha FROM administrador')
    }

    salvarAdministrador(administrador: AdministradorEntity) {
        return this.administradorRepository.save(administrador)
    }


}
