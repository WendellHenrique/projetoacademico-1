export interface AlunoPost {
    nome: string
    senha: string
    rua: string
    bairro: string
    complemento: string,
    numero: number
    cidade: string
    estado: string
    dataVinculo: string
    cep: string
    disciplinas: string[]
}

export interface ProfessorPost {
    nome: string
    senha: string
    rua: string,
    numero: number
    bairro: string
    complemento: string
    cidade: string
    estado: string
    cep: string
    dataVinculo: string
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
    cursos: string[]
}
