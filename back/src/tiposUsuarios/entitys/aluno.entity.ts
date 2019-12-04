import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";


@Entity()
export class AlunoEntity {

    @PrimaryGeneratedColumn({type: "integer"})
    id: number

    @Column({nullable: false, type: "varchar", length: 15})
    senha: string

    @Column({nullable: false, type: "varchar", length: 30})
    nome: string

    @Column({type: "integer"})
    numero: string

    @Column({type: "varchar", length: 20})
    complemento: string

    @Column({type: "varchar", length: 20})
    cidade: string

    @Column({type: "varchar", length: 20})
    bairro: string

    @Column({type: "varchar", length: 50})
    rua: string

    @Column({type: "varchar", length: 15})
    cep: string

    @Column({type: "varchar", length: 2})
    estado: string

    @Column({type: "datetime"})
    dataVinculo: Date
}