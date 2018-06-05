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

    editarUno(icbnLibro, icbn, nombre, numeroPaginas, edicion, fechaPublicacion, nombreEditorial, autorID) {
        const editar = this.obtenerUno(icbnLibro);
        editar.icbn = icbn;
        editar.nombre = nombre;
        editar.numeroPaginas = numeroPaginas;
        editar.edicion = edicion;
        editar.fechaPublicacion = fechaPublicacion;
        editar.nombreEditorial = nombreEditorial;
        editar.autorID = autorID;
        return editar;
    };


}