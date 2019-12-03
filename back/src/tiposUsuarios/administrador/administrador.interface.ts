export interface AlunoPost {
    nome: string
    senha: string
    rua: string
    bairro: string
    complemento: string
    cidade: string
    estado: string
    dataVinculo: Date
    cep: string
    disciplinas: string[]
}

export interface ProfessorPost {
    nome: string
    senha: string
    rua: string
    bairro: string
    complemento: string
    cidade: string
    estado: string
    cep: string
    dataVinculo: Date
    titulacao: string
    disciplinas: string[]
}

export interface CursoPost {
    nome: string
    turmaAno: number
    turmaSemestre: number
}

export interface DisciplinaPost {
    nome: string
    areaDeAtuacao: string
    periodo: string
    cursos: []
}
