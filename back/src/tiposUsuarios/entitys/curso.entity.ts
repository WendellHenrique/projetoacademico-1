import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm";
import { TurmaEntity } from "./turma.entity";



@Entity()
export class CursoEntity {
    @PrimaryGeneratedColumn({type: "integer"})
    idCurso: number    

    @Column({nullable: false, type: "varchar", length: 30})
    nome: string

}