import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Actor } from 'src/app/clases/actor';

@Component({
  selector: 'app-actor-listado',
  templateUrl: './actor-listado.component.html',
  styleUrls: ['./actor-listado.component.css']
})
export class ActorListadoComponent implements OnInit {
  @Input() listadoActoresRecibido?: Actor[];
  @Output() actorEnviado: EventEmitter<Actor> = new EventEmitter<Actor>;
  constructor() { }

  ngOnInit(): void {
  }

  enviarActor(actor:any) { 
    this.actorEnviado.emit(actor);
  }

}
