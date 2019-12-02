import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class EstudantesPorCursoService {

    constructor(private http: HttpClient) { }

    postUsuario(matricula) {
        this.http.post<number>('localhost:3000/professor/estudantesPorCurso', matricula)
    }

    getEstudantesPorCurso(): Observable<any> {
        return this.http.get<any>('localhost:3000/professor/estudantesPorCurso')
    }

}
