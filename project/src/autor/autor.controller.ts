import {Body, Controller, Post, Req, Res} from "@nestjs/common";
import {AutorService} from "./autor.service";
import {AutorPipe} from "./autor.pipe";
import {AUTOR_SCHEMA} from "./autor.schema";


@Controller('Autor')
export class AutorController {

    constructor(private _autorService:AutorService) {

    }

    @Post()
    crearUsuario(@Body(new AutorPipe(AUTOR_SCHEMA)) creaUsuario,
                 @Req() req,
                 @Res() res){
        const nuevo = this._autorService.crearAutor(creaUsuario);
        return creaUsuario;

    }


}