import { Role } from "../entities/role";

export interface RoleRepository {

    createRole(type_role: string): Promise<Role | boolean | null | Error>;

    getRoleById(id: number): Promise<Role | null | string>;

}
