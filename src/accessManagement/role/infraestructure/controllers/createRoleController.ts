import { Request, Response } from 'express';
import { CreateRoleUseCase } from '../../application/createRoleUseCase';

export class CreateRoleController {
    constructor(readonly createRoleUseCase: CreateRoleUseCase) { }

    async run(req: Request, res: Response) {
        console.log('controller');
        const {
            type_role,
        } = req.body;

        try {
            
            const createRole = await this.createRoleUseCase.run(
                type_role, 
            );
            
            console.log(createRole)

            if (createRole) {
                return res.status(201).send({
                    status: "success",
                    data: createRole,
                    message: "Rol creado correctamente"
                });
            } else {
                return res.status(400).send({
                    status: "error",
                    data: [],
                    message: "Se registró un error inesperado mientras se registraban los datos del rol.",
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