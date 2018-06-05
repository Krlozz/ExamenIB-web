import {Body, Controller, Get, Param, Post, Req, Res} from "@nestjs/common";
import {LibroService} from "./libro.service";
import {LIBRO_SCHEMA} from "./libro.schema";
import {LibroPipe} from "./libro.pipe";
import {NotFoundException} from "../exception/notFound.exception";

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
        return res.status(200).send(libros);
    }

    @Get(':id')
    obtenerUno(@Param() id,
               @Req() req,
               @Res() res) {
        const libro = this._libroService.obtenerUno(id.id);
        if (libro) {
            return res.status(200).send(libro);
        }
        else {
            throw  new NotFoundException(
                'Libro no encontrado',
                'No se encuentra en esta lista',
                10
            )
        }
    }








}