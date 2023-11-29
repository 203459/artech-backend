import { Request, Response } from 'express';
import { UserCreateUseCase } from '../../application/userCreateUseCase';
import { User } from '../../domain/entities/user';

export class UserCreateController {
    constructor(readonly UserCreateUseCase: UserCreateUseCase) { }

    async run(req: Request, res: Response) {
        console.log('controller');

        try {
            const {
                email,
                password,
            } = req.body;

            const createUser = await this.UserCreateUseCase.run(
                email,
                password
            );
            
           // console.log(user)
            if (createUser instanceof Error) {
                return res.status(409).send({
                    status: "error",
                    message: createUser.message,
                });
            }

            if (createUser instanceof User) {
                return res.status(201).send({
                    status: "success",
                    data: {
                        email: createUser.email,
                        password : createUser.password
                    },
                });
            } else {
                return res.status(500).send({
                    status: "error",
                    message: "Se registró un error inesperado mientras se registraban los datos del usuario.",
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
