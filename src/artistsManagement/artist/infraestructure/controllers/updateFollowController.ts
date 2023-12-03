import { Request, Response } from "express";
import { UpdateFollowUseCase } from "../../application/updateFollowUseCase";
import { ValidationError } from "sequelize";

export class UpdateFollowController {
    constructor(readonly updateFollowUseCase: UpdateFollowUseCase) { }

    async run(req: Request, res: Response) {
        try {
            let {
                id
                
            } = req.params;

            const nuevoFollow = req.body;

            let updatedFollowing;
            
            try {
                // Intenta ejecutar la validación y la actualización en la base de datos
                console.log(id);

                const id_artist = parseInt(id);

                updatedFollowing = await this.updateFollowUseCase.run(id_artist, nuevoFollow);
                
                console.log(id);

                return res.status(201).json({
                    status: "success",
                    message: "Estado modificado con éxito",
                    updatedFollowing,
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