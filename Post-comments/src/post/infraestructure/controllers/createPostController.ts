import { Request, Response } from 'express';
import { CreatePostUseCase } from '../../application/use-cases/createPostUseCase'; 

export class CreatePostController {
    constructor(readonly createPostUseCase: CreatePostUseCase) { }

    async run(req: Request, res: Response) {
        try {
            const {
                creatorUid, 
                username, 
                description,  
                likes, 
                totalLikes, 
                totalComments, 
                createAt, 
                userProfileUrl
            } = req.body;

            let postImageUrl: string;

            if (req.file) {
                postImageUrl = req.file.path;
            } else {
                // Aquí puedes manejar el caso cuando no hay archivo, por ejemplo, asignando un valor predeterminado o lanzando un error.
                // postImageUrl = 'valorPorDefecto'; // Asignar un valor predeterminado
                return res.status(400).json({
                    status: "error",
                    message: "No se proporcionó ningún archivo.",
                });
            }

            const createPost = await this.createPostUseCase.run(
                creatorUid, 
                username, 
                description, 
                postImageUrl, 
                likes, 
                totalLikes, 
                totalComments, 
                createAt, 
                userProfileUrl
            );
            
            if (createPost instanceof Error) {
                return res.status(409).json({
                    status: "error",
                    message: createPost.message,
                });
            }

            if (createPost) {
                return res.status(201).json({
                    status: "success",
                    data: {
                        createPost
                    },
                });
            } else {
                return res.status(500).json({
                    status: "error",
                    message: "Se registró un error inesperado mientras se registraban los datos del post.",
                });
            }
        } catch (error) {
            return res.status(500).json({
                status: "error",
                message: "Ocurrió un error inesperado. Por favor, inténtalo de nuevo más tarde.",
            });
        }
    }
}