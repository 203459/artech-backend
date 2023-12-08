import { Request, Response } from "express";
import { UpdateLocationUseCase } from "../../application/updateLocationUseCase";
import { ValidationError } from "sequelize";

export class UpdateLocationController {
    constructor(readonly updateLocationUseCase: UpdateLocationUseCase) { }

    async run(req: Request, res: Response) {
        try {
            let {
                id
            } = req.params;

            let {
                location
            } = req.body;

            let updatedArtist;
            
            try {
                // Intenta ejecutar la validación y la actualización en la base de datos
                console.log(id);

                const idartist = parseInt(id);

                updatedArtist = await this.updateLocationUseCase.run(idartist, location);
                
                console.log(id);

                return res.status(201).json({
                    status: "success",
                    message: "Ubicación actualizada con éxito",
                    data: updatedArtist,
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
                        message: "Error de actualización",
                        errors,
                    });
                } else {
                    throw error;
                }
            }
        } catch (error) {
            console.error("Error al actualizar la ubicación:", error);
            return res.status(500).json({
                status: "error",
                message: "Error al actualizar la ubicación",
            });
        }
    }
}