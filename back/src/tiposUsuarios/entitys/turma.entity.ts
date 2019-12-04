import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from "typeorm";
import { CursoEntity } from "./curso.entity";


@Entity()
export class TurmaEntity {

    @PrimaryGeneratedColumn({type: "integer"})
    id: number

    @Column({type: "integer"})
    ano: number

    @Column({type: "integer"})
    semestre: number

    @ManyToOne(type => CursoEntity, curso => curso.id)
    curso: CursoEntity
}