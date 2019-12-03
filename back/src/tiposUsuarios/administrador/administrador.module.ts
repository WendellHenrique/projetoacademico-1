import { Module } from '@nestjs/common';
import { AdministradorService } from './administrador.service';
import { AdministradorController } from './administrador.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AdministradorEntity } from './administrador.entity';

@Module({
    imports: [TypeOrmModule.forFeature([AdministradorEntity])],
    exports: [TypeOrmModule],
    providers: [AdministradorService],
    controllers: [AdministradorController]
})
export class AdministradorModule {}
