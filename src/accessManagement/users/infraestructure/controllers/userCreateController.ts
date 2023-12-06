import { Request, Response } from 'express';
import { UserCreateUseCase } from '../../application/userCreateUseCase';
import { CreateRoleUseCase } from '../../../role/application/createRoleUseCase';
import { RoleModel } from '../../../role/infraestructure/models/roleModel';

export class UserCreateController {
    constructor(readonly userCreateUseCase: UserCreateUseCase) { }

    async run(req: Request, res: Response) {
        console.log('controller');

        try {
            const {
                email,
                password,
            } = req.body;

            const status_delete = 'Activo';

            const roles:RoleModel[] = await RoleModel.findAll();

            const type_role = roles[0].id

            const createUser = await this.userCreateUseCase.run(
                email,
                password,
                status_delete,
                type_role
            );
            
            console.log(createUser)
            if (createUser instanceof Error) {
                return res.status(409).send({
                    status: "error",
                    message: createUser.message
                });
            }

            if (createUser) {
                return res.status(201).send({
                    status: "success",
                    data: {
                        createUser
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
