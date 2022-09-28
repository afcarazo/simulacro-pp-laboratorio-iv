import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { PaisesService } from 'src/app/servicios/paises.service';

@Component({
  selector: 'app-tabla-paises',
  templateUrl: './tabla-paises.component.html',
  styleUrls: ['./tabla-paises.component.css']
})
export class TablaPaisesComponent implements OnInit {
  @Output() PasarPais: EventEmitter<any> = new EventEmitter<any>();
  paises: any;
  constructor(private paisesService: PaisesService) { 
    this.paises = [];
  }

  ngOnInit(): void {
    this.paisesService.obtenerPaises().subscribe((val: any) => { 
      for(let item of val)
      {
        this.paises.push(item);
      }
    })
    console.log(this.paises);
  }

  enviarPais(pais: any)
  { 
    this.PasarPais.emit(pais); 
  }
}
