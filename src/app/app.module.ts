import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BienvenidoComponent } from './pages/bienvenido/bienvenido.component';
import { BusquedaComponent } from './pages/busqueda/busqueda.component';
import { PeliculaAltaComponent } from './pages/pelicula-alta/pelicula-alta.component';
import { ActorListadoComponent } from './pages/actor-listado/actor-listado.component';
import { PeliculaListadoComponent } from './pages/pelicula-listado/pelicula-listado.component';
import { TablaPeliculaComponent } from './pages/tabla-pelicula/tabla-pelicula.component';
import { ActorAltaComponent } from './pages/actor-alta/actor-alta.component';
import { DetallePeliculaComponent } from './pages/detalle-pelicula/detalle-pelicula.component';
import { TablaPaisesComponent } from './componentes/tabla-paises/tabla-paises.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NavBarComponent } from './pages/nav-bar/nav-bar.component';
@NgModule({
  declarations: [
    AppComponent,
    BienvenidoComponent,
    BusquedaComponent,
    PeliculaAltaComponent,
    ActorListadoComponent,
    PeliculaListadoComponent,
    TablaPeliculaComponent,
    ActorAltaComponent,
    DetallePeliculaComponent,
    TablaPaisesComponent,
    NavBarComponent,
    
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
