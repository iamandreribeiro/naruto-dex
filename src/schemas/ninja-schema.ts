import joi from "joi";

export const ninjaSchema = joi.object({
    name: joi.string().required(),
    clan: joi.string().required(),
    jutsu: joi.string().required()
});