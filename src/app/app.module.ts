import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';

import { EspecialidadComponent } from './especialidad/especialidad.component';

import { DashboardComponent } from './dashboard/dashboard.component';
import { AgregaPersonaComponent } from './personas/agrega-persona/agrega-persona.component';
import { ListarPersonasComponent } from './personas/listar-personas/listar-personas.component';
import { EditarPersonasComponent } from './personas/editar-personas/editar-personas.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,

    EspecialidadComponent

    DashboardComponent,
    AgregaPersonaComponent,
    ListarPersonasComponent,
    EditarPersonasComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
