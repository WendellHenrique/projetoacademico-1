import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from "typeorm";
import { CursoEntity } from "./curso.entity";


@Entity()
export class TurmaEntity {

    @PrimaryGeneratedColumn({type: "int"})
    id: number

    @Column({type: "smallint"})
    ano: number

    @Column({type: "smallint"})
    semestre: number

    @ManyToOne(type => CursoEntity, curso => curso.id)
    curso: CursoEntity
}