
import { User } from "../entities/user";

export interface UserRepository {

    listAllUsers(): Promise<User[] | null>;
    
    createUser(email: String, password: String): Promise<User|null>;

    loginUser(email:string, password:string):Promise<User | string | null>  

    getUserById(idUser: number): Promise<User|null>;
    updateUser(id: number, updatedUser: User): Promise<User | null>;
    deleteUser(id: number): Promise<boolean>;
    updatePassword(idUser: number, newPassword: string): Promise<boolean>;
}