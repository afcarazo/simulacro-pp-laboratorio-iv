import { Component, Input, OnInit } from '@angular/core';
import { Actor } from 'src/app/clases/actor';

@Component({
  selector: 'app-actor-listado',
  templateUrl: './actor-listado.component.html',
  styleUrls: ['./actor-listado.component.css']
})
export class ActorListadoComponent implements OnInit {
  @Input() listadoActoresRecibido?: Actor[];
  constructor() { }

  ngOnInit(): void {
  }

}
