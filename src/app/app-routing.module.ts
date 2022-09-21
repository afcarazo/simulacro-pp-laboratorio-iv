import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ActorAltaComponent } from './pages/actor-alta/actor-alta.component';
import { ActorListadoComponent } from './pages/actor-listado/actor-listado.component';
import { BienvenidoComponent } from './pages/bienvenido/bienvenido.component';
import { BusquedaComponent } from './pages/busqueda/busqueda.component';
import { PeliculaAltaComponent } from './pages/pelicula-alta/pelicula-alta.component';
import { PeliculaListadoComponent } from './pages/pelicula-listado/pelicula-listado.component';

const routes: Routes = [
  { path: '', component: BusquedaComponent },
  { path: 'bienvenido', component: BienvenidoComponent },
  { path: 'peliculas/alta', component: PeliculaAltaComponent },
  { path: 'actor/alta', component: ActorAltaComponent },
  { path: 'actor/listado', component: ActorListadoComponent },
  { path: 'peliculas/listado', component: PeliculaListadoComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
