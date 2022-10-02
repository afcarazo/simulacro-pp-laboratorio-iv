import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Actor } from 'src/app/clases/actor';
import { FirestoreService } from 'src/app/servicios/firestore.service';
@Component({
  selector: 'app-actor-alta',
  templateUrl: './actor-alta.component.html',
  styleUrls: ['./actor-alta.component.css']
})
export class ActorAltaComponent implements OnInit {
  public forma: FormGroup;

  actor: Actor;
  actores: any;
  texto: string = "Mostrar listado";
  mostrarOk: boolean = false;
  public constructor(private fb: FormBuilder, private firestoreService:FirestoreService) {
    this.forma = this.fb.group({
      'nombre': ['', [Validators.required, this.spacesValidator]],
      'apellido': ['', Validators.required],
      'paisNombre': ['', Validators.required],
      'edad': ['', [Validators.required, Validators.min(18), Validators.max(99)]],
      'sexo': ['', Validators.required],
      'email': ['', [Validators.required, Validators.email]],
      'terminos': ['', Validators.required]
    });
    this.actor = new Actor(0, '', '', '', '', '', '','');
    this.actores = [];
  }

  ngOnInit(): void {
    this.firestoreService.traerListaActores().subscribe((actores) => {
      if (actores != null) {
        this.actores = actores;
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
    this.actor.pais = $event.name.common;
    this.actor.paisFoto = $event.flags.png;
    this.actor.paisNombre = $event.name.common;
  }
  registrarActor($event:any)
  {
    $event.preventDefault();
    if (this.validaciones()) {
      //this.actores.push(this.actor);
      this.firestoreService.guardarActor(this.actor);
      console.log(this.actores);
      this.actor = new Actor(0, '', '', '', '', '', '','');
     }
  }
  validaciones():boolean
  {
    let ok: boolean = true;
    if (this.actor.apellido === ''||
        this.actor.nombre === ''||
        this.actor.edad === ''||
        this.actor.pais === ''||
        this.actor.paisFoto === ''||
        this.actor.paisNombre === ''||
        this.actor.sexo === ''
    )
    { 
      ok = false;
      alert('ERROR, Complete todos los campos para registrar!');
    }
    console.log(this.actor);
    return ok;
  }
  MostrarListado()
  {
    if (this.mostrarOk) {
      this.texto = "Mostrar listado";
      this.mostrarOk = false;
    }
    else
    {
      
      this.texto = "Cerrar listado";
      this.mostrarOk = true;
     }
   }
}