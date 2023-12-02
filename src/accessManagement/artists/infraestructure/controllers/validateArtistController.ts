import { Request, Response } from "express";
import { ValidateArtistUseCase } from "../../application/validateArtistUseCase";
import { ValidationError } from "sequelize";

export class ValidateArtistController {
    constructor(readonly validateArtistUseCase: ValidateArtistUseCase) { }

    async run(req: Request, res: Response) {
        try {
            let {
                id
            } = req.params;

            let {
                status
            } = req.body;

            let updatedArtist;
            
            try {
                // Intenta ejecutar la validación y la actualización en la base de datos
                console.log(id);

                const idartist = parseInt(id);

                updatedArtist = await this.validateArtistUseCase.run(idartist, status);
                
                console.log(id);

                return res.status(201).json({
                    status: "success",
                    message: "Estado modificado con éxito",
                    updatedArtist,
                });

            } catch (error) {
                // Manejar el error de validación de Sequelize
                if (error instanceof ValidationError) {
                    const errors = error.errors.map((error) => ({
                        message: error.message,
                        type: error.type,
                        path: error.path,
                        value: error.value,
                    }));

                    return res.status(400).json({
                        status: "error",
                        message: "Error de validación",
                        errors,
                    });
                } else {
                    throw error;
                }
            }
        } catch (error) {
            console.error("Error update status:", error);
            return res.status(500).json({
                status: "error",
                message: "Error al modificar el estado",
            });
        }
    }
}