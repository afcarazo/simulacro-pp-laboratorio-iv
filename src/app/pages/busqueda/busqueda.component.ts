import { Component, OnInit } from '@angular/core';
import { Pelicula } from 'src/app/clases/pelicula';

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
  styleUrls: ['./busqueda.component.css']
})
export class BusquedaComponent implements OnInit {

  pelicula: Pelicula;
  listadoPeliculas: Pelicula[] = [
    new Pelicula(1, 'El padrino', 'Crimen', '29/07/2018', 6000000, '../../../assets/elpadrino.jpg', {}),
    new Pelicula(2, 'El Rey León', 'Infantil', '07/07/1994', 5000000, '../../../assets/elreyleon.jpg', {}),
    new Pelicula(3, 'Forrest Gump', 'Comedia', '06/10/1994', 4000000, '../../../assets/forrestgump.jpg', {}),
    new Pelicula(4, 'Vengadores: Infinity War', 'Acción', '26/04/2018', 3000000, '../../../assets/infinitywar.jpg', {}),
    new Pelicula(5, 'Intocable', 'Drama', '02/08/2012', 2000000, '../../../assets/intocable.jpeg', {}),
  ]
  constructor() { 
    this.pelicula = new Pelicula(0, '', '', '', 0, '', {});
  }
  ngOnInit(): void {
  }
  peliculaSeleccionada($event:Pelicula)
  {
    this.pelicula = $event;
   }

}
