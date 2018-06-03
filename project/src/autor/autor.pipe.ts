import {ArgumentMetadata, BadRequestException, Injectable, PipeTransform} from "@nestjs/common";
import * as Joi from 'joi';

@Injectable()
export class AutorPipe implements PipeTransform{

    constructor(private readonly _schema) {}

    transform(valorEnBrutoDelRequest: any, metadataDeLosDecoradoresDelNestjs: ArgumentMetadata) {

        const {error
        }= Joi.validate(valorEnBrutoDelRequest    // objeto a validar
            ,this._schema);                         // un esquema


        if (error) {
            throw new BadRequestException({
                statusCode: 400,
                error: error,
                mensaje: 'Solicitud incorrecta'
            })
        }
        return valorEnBrutoDelRequest;

    }
}