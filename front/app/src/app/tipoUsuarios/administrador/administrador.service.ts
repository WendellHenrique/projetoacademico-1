import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AdministradorService {

  private transmissaoTravar = new BehaviorSubject<string>('')

  private transmissaoMatricula = new BehaviorSubject<number>(0)

  constructor(private http: HttpClient) { }

  alterarValorTravar(valor: string) {
    this.transmissaoTravar.next(valor)
  }

  obterValorTravar() {
    return this.transmissaoTravar
  }

  mandarValorMatricula(valor: number) {
    this.transmissaoMatricula.next(valor)
  }

  getReceberListaAlunos(): Observable<any> {
    return this.http.get<any>('localhost:3000/administrador/listaAlunos')
  }

  getReceberListaProfessores(): Observable<any> {
    return this.http.get<any>('localhost:3000/administrador/listaProfessores')
  }

  getReceberListaCursos(): Observable<any> {
    return this.http.get<any>('localhost:3000/administrador/listaCursos')
  }

  getReceberListaDisciplinas(): Observable<any> {
    return this.http.get<any>('localhost:3000/administrador/listaDisciplinas')
  }

}
