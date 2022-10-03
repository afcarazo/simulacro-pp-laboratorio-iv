import { Component, OnInit , Input} from '@angular/core';

@Component({
  selector: 'app-detalle-pais-actor-listado',
  templateUrl: './detalle-pais-actor-listado.component.html',
  styleUrls: ['./detalle-pais-actor-listado.component.css']
})
export class DetallePaisActorListadoComponent implements OnInit {
  @Input() actorRecibido?: any;
  constructor() { }

  ngOnInit(): void {
  }

}
