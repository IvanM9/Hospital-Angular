import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { AgregaPersonaComponent } from './personas/agrega-persona/agrega-persona.component';
import { ListarPersonasComponent } from './personas/listar-personas/listar-personas.component';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'agregar-personas', component: AgregaPersonaComponent },
  { path: 'listar-personas', component: ListarPersonasComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
