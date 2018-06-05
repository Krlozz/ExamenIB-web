import {Body, Controller, Post, Req, Res} from "@nestjs/common";
import {error} from "util";
import {BadRequestException} from "../exception/badRequest.exception";

@Controller('Autorizacion')
export class AutorizacionController{

    usuario = {
        usuario: 'adrianeguez',
        password: 12345678910,
    };

    @Post('iniciarSesion')
    iniciarSesion(@Req() req,
                  @Res() res,
                  @Body("usuario") usuario:string,
                  @Body("password") password:number){
        if(usuario==this.usuario.usuario&&password==this.usuario.password){
            return res.cookie("token",usuario).send({mensaje: 'ok', status: 200});

        } else {
            throw new BadRequestException(
                'Usuario Incorrecto',
                error,
                10)
        }
    }

    @Post('cerrarSesion')
    cerrarSesion(@Req() req,
                 @Res() res){
        const parametros = {
            nombreCookie: 'token',
            valorCookie: undefined,
        };
        const existeCookie = req.cookies[parametros.nombreCookie];
        if (existeCookie) {
            res.cookie(parametros.nombreCookie, parametros.valorCookie)
            return res.send({
                mensaje: 'Usted salio del sistema'
            })
        } else {
            return res
                .status(404)
                .send({
                    mensaje: 'No encontramos cookie'
                })
        }
    }
}