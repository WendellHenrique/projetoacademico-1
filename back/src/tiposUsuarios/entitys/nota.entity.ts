import { Entity, PrimaryGeneratedColumn, Column, OneToMany, ManyToOne } from "typeorm";
import { TurmaEntity } from "./turma.entity";



@Entity()
export class NotaEntity {
    @PrimaryGeneratedColumn({type: "int"})
    id: number    

    @Column({type: "float"})
    valor: string

    @Column({nullable: true, type: "varchar", length: 10})
    tipo: string

    @ManyToOne(type => NotaEntity, nota => nota.id)
    nota: NotaEntity

}