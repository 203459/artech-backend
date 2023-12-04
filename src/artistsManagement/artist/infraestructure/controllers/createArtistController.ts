import { Request, Response } from 'express';
import { CreateArtistUseCase } from '../../application/createArtistUseCase';

export class CreateArtistController {
    constructor(readonly CreateArtistUseCase: CreateArtistUseCase) { }

    async run(req: Request, res: Response) {
        console.log('controller');
        const {
            nickname,
            name,
            lastname,
            phone,
            id_user,
        } = req.body;

        try {
            
            const status = 'en proceso';
            const location = '';
            const art_type: string[] = [];
            const followers: string[] = [];
            const following: string[] = [];
            const total_followers = 0;
            const total_following = 0;
            

            const createArtist = await this.CreateArtistUseCase.run(
                nickname,
                name,
                lastname,
                phone,
                art_type,
                location,
                status,
                id_user,
                followers,
                following,
                total_followers,
                total_following,
            );
            
            console.log(createArtist)

            /* if (createArtist instanceof Error) {
                return res.status(409).send({
                    status: "error",
                    message: createArtist.message,
                });
            } */

            if (createArtist) {
                return res.status(201).send({
                    status: "success",
                    data: createArtist,
                    message: "Artista creado correctamente"
                });
            } else {
                return res.status(400).send({
                    status: "error",
                    data: [],
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