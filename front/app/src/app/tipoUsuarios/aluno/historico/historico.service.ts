import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HistoricoService {

constructor(private http: HttpClient) { }

  postEnviarMatricula(matricula) {
    this.http.post<number>('localhost:3000/aluno/historico', matricula)
  }

  getPegarHistorico(): Observable<any> {
    return this.http.get<any>('localhost:3000/aluno/historico')
  }

}
