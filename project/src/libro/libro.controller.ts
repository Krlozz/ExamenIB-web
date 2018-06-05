import {Body, Controller, Get, Param, Post, Req, Res, UsePipes} from "@nestjs/common";
import {LibroService} from "./libro.service";
import {LIBRO_SCHEMA} from "./libro.schema";
import {LibroPipe} from "./libro.pipe";
import {NotFoundException} from "../exception/notFound.exception";
import {BadRequestException} from "../exception/badRequest.exception";

@Controller('Libro')
export class LibroController {

    constructor(private _libroService:LibroService) {}


    @UsePipes(new LibroPipe(LIBRO_SCHEMA))
    @Post()
    crearLibro(@Body(new LibroPipe(LIBRO_SCHEMA)) creaLibro,
               @Req() req,
               @Res() res){
        const nuevo = this._libroService.crearAutor(creaLibro);
        if (nuevo) {
            return creaLibro;
        } else {
            throw new BadRequestException(
                'Petición Inválida',
                'Ingreso de datos incorrectos o datos insuficientes',
                10
            )
        }
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