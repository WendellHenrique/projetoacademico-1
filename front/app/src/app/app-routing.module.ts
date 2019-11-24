import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AlunoComponent } from './tipoUsuarios/aluno/aluno.component';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HistoricoAlunoComponent } from './tipoUsuarios/aluno/historico/historico.component';
import { ProfessorComponent } from './tipoUsuarios/professor/professor.component';
import { EstudantesPorCursoComponent } from './tipoUsuarios/professor/estudantesPorCurso/estudantesPorCurso.component';
import { HistoricoProfessorComponent } from './tipoUsuarios/professor/estudantesPorCurso/historico/historico.component';
import { NotasComponent } from './tipoUsuarios/professor/estudantesPorCurso/notas/notas.component';
import { AdministradorComponent } from './tipoUsuarios/administrador/administrador.component';
import { CadastramentoComponent } from './tipoUsuarios/administrador/cadastramento/cadastramento.component';
import { AlterarComponent } from './tipoUsuarios/administrador/alterar/alterar.component';


const routes: Routes = [
  { path: 'login', component: LoginComponent},
  { path: 'aluno', component: AlunoComponent},
  { path: 'aluno/historico', component: HistoricoAlunoComponent},
  { path: 'professor', component: ProfessorComponent},
  { path: 'professor/estudantesPorCurso', component: EstudantesPorCursoComponent},
  { path: 'professor/estudantesPorCurso/historico', component: HistoricoProfessorComponent},
  { path: 'professor/estudantesPorCurso/notas', component: NotasComponent},
  { path: 'administrador', component: AdministradorComponent},
  { path: 'administrador/cadastramento', component: CadastramentoComponent},
  { path: 'administrador/alterar', component: AlterarComponent},
  { path: '**', redirectTo: 'login', pathMatch: 'full'}
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
