import {ArgumentMetadata, BadRequestException, Injectable, NotFoundException, PipeTransform} from "@nestjs/common";
import * as Joi from 'joi';

@Injectable()
export class LibroPipe implements PipeTransform{

    constructor(private readonly _schema) {}

    transform(valorEnBrutoDelRequest: any, metadataDeLosDecoradoresDelNestjs: ArgumentMetadata) {

        const {error
        }= Joi.validate(valorEnBrutoDelRequest    // objeto a validar
            ,this._schema);                         // un esquema


        if (error) {
            throw new NotFoundException({
                statusCode: 404,
                error: error,
                mensaje: 'No se encontró ICBN'
            })
        }
        return valorEnBrutoDelRequest;

    }
}