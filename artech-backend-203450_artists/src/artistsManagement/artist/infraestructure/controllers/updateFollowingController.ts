import { Request, Response } from "express";
import { UpdateFollowingUseCase } from "../../application/updateFollowingUseCase";
import { UpdateFollowersUseCase } from "../../application/updateFollowersUseCase";
import { ValidationError } from "sequelize";
import { ArtistModel } from "../models/artistModel";

export class UpdateFollowingController {
    constructor(readonly updateFollowingUseCase: UpdateFollowingUseCase, readonly updateFollowersUseCase: UpdateFollowersUseCase) { }

    
    async run(req: Request, res: Response) {

        try {
            let {
                id
                
            } = req.params;

            const nuevoFollow = req.body.following;

            let updatedFollowing;
            let updatedFollowers;
            
            try {
                // Intenta ejecutar la validación y la actualización en la base de datos
                console.log(id);

                const id_artist = parseInt(id);
                const artist = await ArtistModel.findByPk(id);

                const id_artistaux = parseInt(nuevoFollow[0]);

                const artistaux = await ArtistModel.findByPk(id_artistaux);

                if(artist && artistaux) {

                    artist.following.push(nuevoFollow[0]);

                    updatedFollowing = await this.updateFollowingUseCase.run(id_artist, artist.following, artist.following.length);

                    //--------------------------------------------------------------------------

                    artistaux.followers.push(id);
                    
                    ArtistModel.update(
                        { followers: artistaux.followers,
                        total_followers: artistaux.followers.length
                        },
                        { where: { id: id_artistaux } }
                      )
                    //updatedFollowers = await this.updateFollowersUseCase.run(id_artistaux, artist.followers, artist.followers.length);
                }

                return res.status(201).json({
                    status: "success",
                    message: "Seguimiento con éxito",
                    data: updatedFollowing,
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
                        message: "Error de seguimiento",
                        errors,
                    });
                } else {
                    throw error;
                }
            }
        } catch (error) {
            console.error("Error actualizando seguimiento:", error);
            return res.status(500).json({
                status: "error",
                message: "Error al actualizar el seguimiento",
            });
        }
    }
}


