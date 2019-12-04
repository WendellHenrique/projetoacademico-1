import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";


@Entity()
export class ProfessorEntity {

    @PrimaryGeneratedColumn({type: "int"})
    id: number

    @Column({type: "varchar", length: 50})
    titulacao: string

    @Column({nullable: false, type: "varchar", length: 15})
    senha: string

    @Column({nullable: false, type: "varchar", length: 50})
    nome: string

    @Column({nullable: true, type: "bigint"})
    numero: string

    @Column({nullable: true, type: "varchar", length: 20})
    complemento: string

    @Column({nullable: true, type: "varchar", length: 20})
    cidade: string

    @Column({nullable: true, type: "varchar", length: 50})
    bairro: string

    @Column({nullable: true ,type: "varchar", length: 50})
    rua: string

    @Column({nullable: true, type: "varchar", length: 20})
    cep: string

    @Column({nullable: true, type: "varchar", length: 2})
    estado: string

    @Column({nullable: true, type: "varchar", length: 15})
    dataVinculo: string
}