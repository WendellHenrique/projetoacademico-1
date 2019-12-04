import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm";
import { TurmaEntity } from "./turma.entity";



@Entity()
export class CursoEntity {
    @PrimaryGeneratedColumn({type: "integer"})
    id: number    

    @Column({type: "varchar", length: 30})
    nome: string

}