import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-listado-actor-peliculas',
  templateUrl: './listado-actor-peliculas.component.html',
  styleUrls: ['./listado-actor-peliculas.component.css']
})
export class ListadoActorPeliculasComponent implements OnInit {
  @Input() listadoPeliculasRecibido?: any;
  constructor() { }

  ngOnInit(): void {
  }

}
