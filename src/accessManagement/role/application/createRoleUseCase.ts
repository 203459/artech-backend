import { Role } from '../domain/entities/role';
import { RoleRepository } from '../domain/repositories/roleRepository';


export class CreateRoleUseCase {

    constructor(readonly roleRepository: RoleRepository) { }

    async run(
        type_role: string
    ): Promise<Role | null | number | Error> {

      
        try {
            if (!type_role) {
                return null;
            }

            const registerRole = await this.roleRepository.createRole(type_role);

            if (registerRole === null) {
                return null;
            }

            return registerRole;
        } catch (error) {
            return null;
        }
    }
}