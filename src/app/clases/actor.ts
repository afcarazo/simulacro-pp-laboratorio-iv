export class Actor {
    id: number;
    nombre: string;
    pais: string;
    apellido: string;
    sexo: string;
    paisFoto: string;
    paisNombre: string;
    edad: string;
    
    constructor(id:number, nombre:string, apellido:string, sexo:string,pais:string, paisNombre:string,paisFoto:string,edad:string)
    {
        this.id = id;
        this.nombre = nombre;
        this.apellido = apellido;
        this.sexo = sexo;
        this.pais = pais;
        this.paisFoto = paisFoto;
        this.paisNombre= paisNombre;
        this.edad = edad;
     }
}
