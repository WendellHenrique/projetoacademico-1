import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AlunoComponent } from './tipoUsuarios/aluno/aluno.component';
import { LoginComponent } from './login/login.component';
import { HistoricoAlunoComponent } from './tipoUsuarios/aluno/historico/historico.component';
import { ProfessorComponent } from './tipoUsuarios/professor/professor.component';
import { EstudantesPorCursoComponent } from './tipoUsuarios/professor/estudantesPorCurso/estudantesPorCurso.component';
import { NotasComponent } from './tipoUsuarios/professor/estudantesPorCurso/notas/notas.component';
import { HistoricoProfessorComponent } from './tipoUsuarios/professor/estudantesPorCurso/historico/historico.component';
import { AdministradorComponent } from './tipoUsuarios/administrador/administrador.component';
import { CadastramentoComponent } from './tipoUsuarios/administrador/cadastramento/cadastramento.component';
import { AlterarComponent } from './tipoUsuarios/administrador/alterar/alterar.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AlunoComponent,
    HistoricoAlunoComponent,
    ProfessorComponent,
    EstudantesPorCursoComponent,
    NotasComponent,
    HistoricoProfessorComponent,
    AdministradorComponent,
    CadastramentoComponent,
    AlterarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
