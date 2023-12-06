import { Request, Response } from "express";
import { UpdateProfileImageUseCase } from "../../application/updateProfileImageUseCase";
import { ValidationError } from "sequelize";

export class UpdateProfileImageController {
    constructor(readonly updateProfileImageUseCase: UpdateProfileImageUseCase) { }

    async run(req: Request, res: Response) {
        try {
            let {
                id
            } = req.params;

            let {
                profile_image
            } = req.body;

            let updatedArtist;
            
            try {
                console.log(id);

                const idartist = parseInt(id);

                updatedArtist = await this.updateProfileImageUseCase.run(idartist, profile_image);
                
                console.log(id);

                return res.status(201).json({
                    status: "success",
                    message: "Foto de perfil actualizada con éxito",
                    data: updatedArtist,
                });

            } catch (error) {
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
            console.error("Error al actualizar la foto de perfil:", error);
            return res.status(500).json({
                status: "error",
                message: "Error al actualizar foto de perfil",
            });
        }
    }
}