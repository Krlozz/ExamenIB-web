import {Body, Controller, Get, Post, Req, Res} from "@nestjs/common";
import {AutorService} from "./autor.service";
import {AutorPipe} from "./autor.pipe";
import {AUTOR_SCHEMA} from "./autor.schema";


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
        return res.status(202).send(autores);
    }

}