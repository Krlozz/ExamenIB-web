import {Component} from "@nestjs/common/utils/decorators/component.decorator";
import {LibroClass} from "./libro.class";
import {AutorClass} from "../autor/autor.class";

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
        const libro = this.arregloLibros.find(function (element:LibroClass) {
            return element.icbn === icbn;
        });

        return libro;
    }




}