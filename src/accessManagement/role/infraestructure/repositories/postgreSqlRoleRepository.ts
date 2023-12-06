import { Role } from "../../domain/entities/role";
import { RoleRepository } from "../../domain/repositories/roleRepository";
import { RoleModel } from "../models/roleModel"


export class RoleRepositoryImpl implements RoleRepository{
    
    createRole(type_role: String,): Promise<Role | null> {
        return RoleModel.create({
         type_role
        });
    }

    getRoleById(id:number): Promise<Role[] | null> {
        return RoleModel.findAll({ where: { id } });
    }
}