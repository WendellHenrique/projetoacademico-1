export interface DadosAlunos {
    matricula: number
    alunoNome: string
    periodo: string
}

export interface DadosProfessor {
    matricula: number
    professorNome: string
    titulacao: string
}

export interface DadosCurso {
    nomeCurso: string
    areaAtuacao: string
}

export interface DadosDisciplina {
    nomeDisciplina: string
    quantidadeDeAlunosPorTurma: number
}
