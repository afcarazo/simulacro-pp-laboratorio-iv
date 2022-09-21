import { Component, OnInit ,Input, Output, EventEmitter} from '@angular/core';
import { Pelicula } from 'src/app/clases/pelicula';

@Component({
  selector: 'app-tabla-pelicula',
  templateUrl: './tabla-pelicula.component.html',
  styleUrls: ['./tabla-pelicula.component.css']
})
export class TablaPeliculaComponent implements OnInit {

  @Input() listadoPeliculas?: Pelicula[];
  @Output() seleccionarPelicula: EventEmitter<Pelicula> = new EventEmitter<Pelicula>;
  constructor() { }

  ngOnInit(): void {
  }
  enviar(pelicula: Pelicula)
  {
    this.seleccionarPelicula.emit(pelicula);
   }
}
