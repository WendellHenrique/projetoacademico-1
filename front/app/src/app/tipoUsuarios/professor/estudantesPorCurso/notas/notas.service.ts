import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { InserirNotas } from './notas.interface';

@Injectable({
    providedIn: 'root'
})
export class InserirNotasService {

    constructor(private http: HttpClient) { }

    postNota(nota: InserirNotas) {
        this.http.post<number>('localhost:3000/professor/estudantesPorCurso/notas', nota)
    }


}
