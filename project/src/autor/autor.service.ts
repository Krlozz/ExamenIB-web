import {AutorClass} from "./autor.class";
import {Component} from "@nestjs/common/utils/decorators/component.decorator";

@Component()
export class AutorService {
    arregloAutores: AutorClass [] =[];

    crearAutor(autor:AutorClass): AutorClass[]{
        this.arregloAutores.push(autor);
        return this.arregloAutores;
    }

    listarTodos(): AutorClass[]{
        return this.arregloAutores;
    }

    /**obtenerUno(apellidoAutor:string){
        return this.arregloAutores.filter((Autor:AutorClass)=>{
                return (Autor.apellidos === apellidoAutor)
            }
        );
    }*/

    obtenerUno(apellidoAutor:string){
        const autor = this.arregloAutores.find(function (element:AutorClass) {
            return element.apellidos === apellidoAutor;
        });

        return autor;
    }



}