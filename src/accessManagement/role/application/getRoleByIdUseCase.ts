import { Role } from "../domain/entities/role";
import { RoleRepository } from "../domain/repositories/roleRepository";

export class GetRoleByIdUseCase {
    constructor(readonly roleRepository: RoleRepository) { }

    async run(
        id: number,
        
    ): Promise<Role | number | null | string> {
        try {
            const role = await this.roleRepository.getRoleById(id);
            return role;
            } catch (error) {
                return null;
            }
    }
}