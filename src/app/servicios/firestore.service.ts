import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Actor } from '../clases/actor';

@Injectable({
  providedIn: 'root'
})
export class FirestoreService {

  constructor(private angularFirestore: AngularFirestore) { }

  guardarActor(actorGuardar: any) { 
    
    let actor = {
      id: actorGuardar.id,
      nombre: actorGuardar.nombre,
      apellido: actorGuardar.apellido,
      edad: actorGuardar.edad,
      sexo: actorGuardar.sexo,
      pais: actorGuardar.pais,
      paisNombre: actorGuardar.paisNombre,
      paisFoto: actorGuardar.paisFoto,
    };
    this.angularFirestore.collection<any>('actores').add(actor);
  }

  guardarPelicula(peliculaGuardar: any) {
    let pelicula = {
      id: peliculaGuardar.id,
      nombre: peliculaGuardar.nombre,
      tipo: peliculaGuardar.tipo,
      fechaDeEstreno: peliculaGuardar.fechaDeEstreno,
      cantidadDePublico: peliculaGuardar.cantidadDePublico,
      foto: peliculaGuardar.foto,
      actor: peliculaGuardar.actor,
    };

    this.angularFirestore.collection<any>('peliculas').add(pelicula);
  }

  traerListaActores() {
    let collection = this.angularFirestore.collection<any>('actores');
    return collection.valueChanges();
  }
  traerListaPeliculas() {
    let collection = this.angularFirestore.collection<any>('peliculas');
    return collection.valueChanges();
  }


}
