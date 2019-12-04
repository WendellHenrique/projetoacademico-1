import { Entity, PrimaryGeneratedColumn, Column, OneToMany, ManyToOne } from "typeorm";
import { TurmaEntity } from "./turma.entity";



@Entity()
export class NotaEntity {
    @PrimaryGeneratedColumn({type: "integer"})
    id: number    

    @Column({type: "varchar", length: 30})
    nome: string

    @Column({nullable: true, type: "varchar", length: 30})
    area: string

    @Column({nullable: true, type: "varchar", length: 20})
    periodo: string

    @ManyToOne(type => NotaEntity, nota => nota.id)
    nota: NotaEntity

}