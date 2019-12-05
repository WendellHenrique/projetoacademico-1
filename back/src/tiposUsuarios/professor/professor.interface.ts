export interface GetDisciplinasProf {
    turma: number
    disciplina: string
    periodo: string
}

export interface GetEstudantesPorCurso {
    matricula: number
    nome: string
    notas: Array<number>
    //falta colocar a situacao
}

export interface PostNotaDoAluno {
    nota: number
    tipoNota: string
}

export interface GetHistoricoDoAluno {
    disciplina: string
    periodo: string
    situacao: string
    nota: number
}