import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";


@Entity()
export class TurmaEntity {

    @PrimaryGeneratedColumn({type: "integer"})
    idTurma: number

    @Column({nullable: false, type: "varchar", length: 15})
    ano: string

    @Column({nullable: false, type: "varchar", length: 30})
    semestre: string

    @Column({type: "integer", nullable: false})
    idCurso: string
}