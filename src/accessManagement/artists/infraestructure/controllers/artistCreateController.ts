import { Request, Response } from 'express';
import { ArtistCreateUseCase } from '../../application/artistCreateUseCase';
import { Artist } from '../../domain/entities/artist';

export class ArtistCreateController {
    constructor(readonly ArtistCreateUseCase: ArtistCreateUseCase) { }

    async run(req: Request, res: Response) {
        console.log('controller');

        try {
            const {
                nickname,
                name,
                lastname,
                phone,
                art_type,
                location,
                id_user
            } = req.body;
            
            const status = 'en proceso';

            const createArtist = await this.ArtistCreateUseCase.run(
                nickname,
                name,
                lastname,
                phone,
                art_type,
                location,
                status,
                id_user
            );
            
            console.log(createArtist)

            if (createArtist instanceof Error) {
                return res.status(409).send({
                    status: "error",
                    message: createArtist.message,
                });
            }

            console.log(createArtist)

            if (createArtist instanceof Artist) {
                return res.status(201).send({
                    status: "success",
                    data: {
                        nickname: createArtist.nickname,
                        name : createArtist.name,
                        lastname : createArtist.lastname,
                        phone : createArtist.phone,
                        status : createArtist.status,
                    },
                });
            } else {
                return res.status(500).send({
                    status: "error",
                    message: "Se registró un error inesperado mientras se registraban los datos del artista.",
                });
            }
        } catch (error) {
            return res.status(500).send({
                status: "error",
                message: "Ocurrió un error inesperado. Por favor, inténtalo de nuevo más tarde.",
            });
        }
    }
}