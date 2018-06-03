import * as Joi from 'joi';

export const AUTOR_SCHEMA = Joi
    .object()
    .keys({
        nombres: Joi
            .string()
            .required()
            .regex(/^[a-zA-Z]{3,30}$/)
            .min(3)
            .max(30),
        apellidos: Joi
            .string()
            .required()
            .regex(/^[a-zA-Z]{3,30}$/)
            .min(3)
            .max(30),
        fechaNacimiento: Joi
            .string()
            .required()
            .regex(/^[a-zA-Z]{3,30}$/)
            .min(3)
            .max(30),
        numeroLibros: Joi
            .number()
            .required()
            .integer()
            .greater(18)
            .less(40),
        ecuatoriano: Joi
            .boolean()
            .required(),

    })
