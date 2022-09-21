export class Pelicula {
    id: number;
    nombre: string;
    tipo: string;
    fechaDeEstreno: string;
    cantidadDePublico: number;
    foto: string;

    constructor(id: number, nombre: string, tipo:string,fechaDeEstreno:string, cantidadDePublico:number, foto:string)
    {
        this.id = id;
        this.nombre = nombre;
        this.tipo = tipo;
        this.fechaDeEstreno = fechaDeEstreno;
        this.cantidadDePublico = cantidadDePublico;
        this.foto = foto;
     }
}
