import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from "typeorm";
import { TurmaEntity } from "./turma.entity";


@Entity()
export class AlunoEntity {

    @PrimaryGeneratedColumn({type: "integer"})
    id: number

    @Column({nullable: false, type: "varchar", length: 15})
    senha: string

    @Column({nullable: false, type: "varchar", length: 30})
    nome: string

    @Column({nullable: true, type: "integer"})
    numero: string

    @Column({nullable: true, type: "varchar", length: 20})
    complemento: string

    @Column({nullable: true, type: "varchar", length: 20})
    cidade: string

    @Column({nullable: true, type: "varchar", length: 20})
    bairro: string

    @Column({nullable: true ,type: "varchar", length: 50})
    rua: string

    @Column({nullable: true, type: "varchar", length: 15})
    cep: string

    @Column({nullable: true, type: "varchar", length: 2})
    estado: string

    @Column({nullable: true, type: "datetime"})
    dataVinculo: Date

    @ManyToOne(Type => TurmaEntity, turma => turma.id)
    turma: TurmaEntity
}