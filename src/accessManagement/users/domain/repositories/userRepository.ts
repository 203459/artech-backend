//import { User } from "./domain/entities/user"; // Asegúrate de importar el modelo correctamente

import { User } from "../entities/user";

export interface UserRepository {

    getAllUser(): Promise<User[] | null>;
    
    createUser(email: String, password: String): Promise<User|null>;

    getUserById(idUser: number): Promise<User|null>;
    updateUser(id: number, updatedUser: User): Promise<User | null>;
    deleteUser(id: number): Promise<boolean>;
    updatePassword(idUser: number, newPassword: string): Promise<boolean>;
}