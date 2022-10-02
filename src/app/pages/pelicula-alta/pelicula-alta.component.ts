import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Actor } from 'src/app/clases/actor';
import { Pelicula } from 'src/app/clases/pelicula';
import { FirestoreService } from 'src/app/servicios/firestore.service';
import { PaisesService } from 'src/app/servicios/paises.service';

@Component({
  selector: 'app-pelicula-alta',
  templateUrl: './pelicula-alta.component.html',
  styleUrls: ['./pelicula-alta.component.css']
})
export class PeliculaAltaComponent implements OnInit {

  public forma: FormGroup;
  imagenesPeliculas: any;
  pelicula: Pelicula;
  actores: any;
  texto: string = "Mostrar listado";
  mostrarOk: boolean = false;
  peliculas: any;
  public constructor(private fb: FormBuilder,private paisesService:PaisesService, private firestoreService:FirestoreService) {
    this.forma = this.fb.group({
      'nombre': ['', [Validators.required, this.spacesValidator]],
      'tipo': ['', Validators.required],
      'cantidadPublico': ['', [Validators.required, Validators.min(18), Validators.max(99)]],
      'fechaEstreno': ['', Validators.required],
      'actorNombre': ['', Validators.required],
      'portada': ['', Validators.required]
    });
    this.pelicula = new Pelicula(0, '', '', '', 0,'',{});
    this.actores = [];
    this.imagenesPeliculas = [];
    this.peliculas = [];
  }

  ngOnInit(): void {
    this.imagenesPeliculas = [
      '../../assets/peliculas/1.jpeg',
      '../../assets/peliculas/2.jpg',
      '../../assets/peliculas/3.jpg',
      '../../assets/peliculas/4.jpg',
      '../../assets/peliculas/5.jpg',
      '../../assets/peliculas/6.jpg',
      '../../assets/peliculas/7.jpg',
      '../../assets/peliculas/8.jpg',
      '../../assets/peliculas/9.jpg',
      '../../assets/peliculas/10.jpg',
      '../../assets/peliculas/11.jpg',
      '../../assets/peliculas/12.jpg'];
    console.log(this.imagenesPeliculas);
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

  public aceptar(): void {
    if(this.forma)
    console.log(this.forma.getRawValue());
  }

  // CUSTOM VALIDATOR
  private spacesValidator(control: AbstractControl): null | object {
    const nombre = <string>control.value;
    const spaces = nombre.includes(' ');

    return spaces
      ? { containsSpaces: true }
      : null; 
  }

  agarrarPaisSeleccionado($event:any)
  {
    /*this.actor.pais = $event.name.common;
    this.actor.paisFoto = $event.flags.png;*/
  }
 
  validaciones():boolean
  {
    let ok: boolean = true;
    if (this.pelicula.nombre === ''||
        this.pelicula.cantidadDePublico === 0||
        this.pelicula.fechaDeEstreno === ''||
        this.pelicula.tipo === ''
    )
    { 
      ok = false;
      alert('ERROR, Complete todos los campos para registrar!');
    }
    console.log(this.pelicula);
    return ok;
  }
  MostrarListado()
  {
    if (this.mostrarOk) {
      this.texto = "Mostrar listado peliculas";
      this.mostrarOk = false;
    }
    else
    {
      
      this.texto = "Cerrar listado";
      this.mostrarOk = true;
     }
  }
  seleccionarImagen(pelicula:any) {
    this.pelicula.foto = pelicula;
  }
  
  agarrarActor(actor:any)
  {
    this.pelicula.actor = actor;
  }

  registrarPelicula() {
    if (this.validaciones()) {
      //this.peliclas.push(this.pelicula);
      this.firestoreService.guardarPelicula(this.pelicula);
      this.pelicula = new Pelicula(0, '', '', '', 0,'',{});
     }
  }
  
  tomarActor($actor: any) {
    this.pelicula.actor = $actor;
  }
}
