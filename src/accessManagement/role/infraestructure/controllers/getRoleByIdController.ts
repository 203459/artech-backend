import { Request, Response } from "express";
import { GetRoleByIdUseCase } from "../../application/getRoleByIdUseCase";

export class GetRoleByIdController {
    constructor(
        readonly getRoleByIdUseCase: GetRoleByIdUseCase,
    ) { }

    async run(req: Request, res: Response) {
        try {

            const { id } = req.params;

            const role = await this.getRoleByIdUseCase.run(parseInt(id));
            
            console.log(role)

            if (role) {
                return res.status(200).send({
                    status: 'success',
                    data: role,
                    message: 'Rol obtenido exitosamente',
                });
            }
            return res.status(404).send({
                status: 'error',
                message: 'No se encontró el rol',
            });
        } catch (error) {
            console.error("Error al recuperar el rol", error);
            return res.status(500).send({
                status: "error",
                data: [],
                message: "Error al recuperar el rol",
            });

        }
    }
}