import { Actor } from "./actor";

export class Pelicula {
    id: number;
    nombre: string;
    tipo: string;
    fechaDeEstreno: string;
    cantidadDePublico: number;
    foto: string;
    actor:any

    constructor(id: number, nombre: string, tipo:string,fechaDeEstreno:string, cantidadDePublico:number, foto:string, actor:any)
    {
        this.id = id;
        this.nombre = nombre;
        this.tipo = tipo;
        this.fechaDeEstreno = fechaDeEstreno;
        this.cantidadDePublico = cantidadDePublico;
        this.foto = foto;
        this.actor = actor;
     }
}
