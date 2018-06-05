import {Body, Controller, Get, Param, Post, Put, Req, Res} from "@nestjs/common";
import {AutorService} from "./autor.service";
import {AutorPipe} from "./autor.pipe";
import {AUTOR_SCHEMA} from "./autor.schema";
import {error} from "util";
import {NotFoundException} from "../exception/notFound.exception";


@Controller('Autor')
export class AutorController {

    constructor(private _autorService:AutorService) {

    }

    @Post()
    crearAutor(@Body(new AutorPipe(AUTOR_SCHEMA)) creaAutor,
                 @Req() req,
                 @Res() res){
        const nuevo = this._autorService.crearAutor(creaAutor);
        return creaAutor;

    }

    @Get()
    mostrarAutores(@Res() res) {
        const autores = this._autorService.listarTodos();
        return res.status(200).send(autores);
    }

    @Get(':id')
    obtenerUno(@Param() id,
               @Req() req,
               @Res() res) {
        const autor = this._autorService.obtenerUno(id.id);
        if (autor) {
            return res.status(200).send(autor);
        }
        else {
            throw  new NotFoundException(
                'Apellido no encontrado',
                'No se encuentra en esta lista',
                10
            )
        }
    }

    @Put('/:id')
    editarUno(@Param(AUTOR_SCHEMA.apellidos) apellido,
              @Body(new AutorPipe(AUTOR_SCHEMA)) editar,
              @Req() req,
              @Res() res) {
        return res.send(editar);
    }

}