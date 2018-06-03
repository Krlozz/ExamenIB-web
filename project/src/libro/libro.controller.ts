import {Body, Controller, Get, Post, Req, Res} from "@nestjs/common";
import {LibroService} from "./libro.service";
import {LIBRO_SCHEMA} from "./libro.schema";
import {LibroPipe} from "./libro.pipe";

@Controller('Libro')
export class LibroController {

    constructor(private _libroService:LibroService) {

    }

    @Post()
    crearLibro(@Body(new LibroPipe(LIBRO_SCHEMA)) creaLibro,
               @Req() req,
               @Res() res){
        const nuevo = this._libroService.crearAutor(creaLibro);
        return creaLibro;

    }

    @Get()
    mostrarAutores(@Res() res) {
        const libros = this._libroService.listarTodos();
        return res.status(202).send(libros);
    }

}