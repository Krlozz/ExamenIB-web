import {ArgumentMetadata, Injectable, PipeTransform} from "@nestjs/common";
import * as Joi from 'joi';
import {BadRequestException} from "../exception/badRequest.exception";
import {NotFoundException} from "../exception/notFound.exception";

@Injectable()
export class AutorPipe implements PipeTransform{

    constructor(private readonly _schema) {}

    transform(jsonAValidar: any, metadata: ArgumentMetadata) {
        const {error}
            = Joi.validate(jsonAValidar, this._schema);
        const {errorNotFound}
            = Joi.validate(jsonAValidar, this._schema);

        if (error) {
            throw new BadRequestException(
                'Petición Inválida',
                error,
                10
            )
        }
        if (errorNotFound) {
            throw  new NotFoundException(
                'No encontrado',
                errorNotFound,
                10
            )
        }
        else {
            return jsonAValidar;
        }
    }
}