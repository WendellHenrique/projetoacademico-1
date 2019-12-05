import { Entity, PrimaryGeneratedColumn, Column, OneToMany, ManyToOne } from "typeorm";
import { TurmaEntity } from "./turma.entity";
import { DisciplinaEntity } from "./disciplina.entity";



@Entity()
export class NotaEntity {
    @PrimaryGeneratedColumn({ type: "int" })
    id: number

    @Column({ type: "int" })
    valor: number

    @Column({ nullable: true, type: "varchar", length: 10 })
    tipo: string

    @ManyToOne(type => DisciplinaEntity, disciplina => disciplina.id)
    disciplina: DisciplinaEntity

}