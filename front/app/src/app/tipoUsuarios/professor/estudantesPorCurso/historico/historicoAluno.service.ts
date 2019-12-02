import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class HistoricoAlunoService {

    constructor(private http: HttpClient) { }


    postEnviarMatricula(matricula) {
        this.http.post<number>('localhost:3000/aluno/estudantesPorCurso/historico', matricula)
    }

    getHistorico(): Observable<any> {
        return this.http.get<any>('localhost:3000/professor/estudantesPorCurso/historico')
    }

}
