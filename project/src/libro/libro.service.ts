import {Component} from "@nestjs/common/utils/decorators/component.decorator";
import {LibroClass} from "./libro.class";

@Component()
export class LibroService {
    arregloLibros: LibroClass [] =[];

    crearAutor(autor:LibroClass){
        this.arregloLibros.push(autor);
        return this.arregloLibros;
    }

    listarTodos(){
        return this.arregloLibros;
    }

    obtenerUno(icbn:number){
        return this.arregloLibros.filter((Libro:LibroClass)=>{
                return (Libro.icbn === icbn)
            }
        );
    }


}