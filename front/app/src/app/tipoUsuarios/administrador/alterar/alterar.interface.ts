export interface AlunoPut {
    nome: string
    senha: string
    rua: string
    bairro: string
    complemento: string
    cidade: string
    estado: string
    dataVinculo: string
    cep: string
    disciplinas: []
}

export interface ProfessorPut {
    nome: string
    senha: string
    rua: string
    bairro: string
    complemento: string
    cidade: string
    estado: string
    cep: string
    dataVinculo: string
    titulacao: string
    disciplinas: []
}

export interface CursoPut {
    nome: string
    turmaAno: number
    turmaSemestre: number
}

export interface DisciplinaPut {
    nome: string
    areaDeAtuacao: string
    periodo: string
    cursos: []
}
