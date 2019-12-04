import { Entity, PrimaryGeneratedColumn, Column, OneToMany, ManyToOne } from "typeorm";
import { TurmaEntity } from "./turma.entity";
import { ProfessorEntity } from "./professor.entity";



@Entity()
export class DisciplinaEntity {
    @PrimaryGeneratedColumn({type: "integer"})
    id: number    

    @Column({type: "varchar", length: 30})
    nome: string

    @Column({nullable: true, type: "varchar", length: 30})
    area: string

    @Column({nullable: true, type: "varchar", length: 20})
    periodo: string

    @ManyToOne(Type => ProfessorEntity, professor => professor.id)
    professor: ProfessorEntity

    @ManyToOne(Type => TurmaEntity, turma => turma.id)
    turma: TurmaEntity

}