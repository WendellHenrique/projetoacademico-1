import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";


@Entity()
export class ProfessorEntity {

    @PrimaryGeneratedColumn({type: "integer"})
    id: number

    @Column({type: "varchar", length: 15})
    senha: string

    @Column({type: "varchar", length: 30})
    nome: string

    @Column({type: "varchar", length: 50})
    titulacao: string

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
}