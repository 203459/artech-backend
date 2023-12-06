
import { RoleRepositoryImpl } from "./repositories/postgreSqlRoleRepository";
const roleRepositoryImpl= new RoleRepositoryImpl();

import { CreateRoleController } from "./controllers/createRoleController";
import { CreateRoleUseCase } from "../application/createRoleUseCase";

const createRoleUseCase = new  CreateRoleUseCase(roleRepositoryImpl);
const createRoleController = new CreateRoleController(createRoleUseCase);

import { GetRoleByIdController} from "./controllers/getRoleByIdController";
import { GetRoleByIdUseCase} from "../application/getRoleByIdUseCase";

const getRoleByIdUseCase = new GetRoleByIdUseCase(roleRepositoryImpl)
const getRoleByIdController = new GetRoleByIdController(getRoleByIdUseCase)

export {
    createRoleController,
    getRoleByIdController,
};