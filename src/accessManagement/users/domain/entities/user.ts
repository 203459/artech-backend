import { Role } from "../../../role/domain/entities/role";

export class User {
  constructor(
    id: number,
    email: string,
    password: string,
    status_delete: string,
    type_role: number,
    /* role?: Role */
  ) {}
}