import { Component, OnInit } from '@angular/core';
import { Actor } from 'src/app/clases/actor';
import { Pelicula } from 'src/app/clases/pelicula';
import { FirestoreService } from 'src/app/servicios/firestore.service';

@Component({
  selector: 'app-actor-pelicula',
  templateUrl: './actor-pelicula.component.html',
  styleUrls: ['./actor-pelicula.component.css']
})
export class ActorPeliculaComponent implements OnInit {

  actores: any;
  listadoFiltradoPeliculas: any;
  peliculas: any;
  actor: any;
  constructor(private firestoreService: FirestoreService) { 
    this.listadoFiltradoPeliculas = [];
    this.peliculas = [];
  }
  ngOnInit(): void {
    this.firestoreService.traerListaActores().subscribe((actores) => {
      if (actores != null) {
        this.actores = actores;
      }
    });
    this.firestoreService.traerListaPeliculas().subscribe((peliculas) => {
      if (peliculas != null) {
        this.peliculas = peliculas;
      }
    });
  }

  tomarActor(actor: Actor) {
    this.actor = actor;
  this.listadoFiltradoPeliculas=this.peliculas.filter((p:any) => {
    return (
      p.actor.nombre == actor.nombre && p.actor.apellido == actor.apellido
    );
  });
  }


}
