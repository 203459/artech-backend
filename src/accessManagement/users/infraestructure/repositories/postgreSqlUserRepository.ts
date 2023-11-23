import { User } from "../../domain/entities/user";
import { UserRepository } from "../../domain/repositories/userRepository";

export class UserRepositoryImpl implements UserRepository{
    getAllUser(): Promise<User[] | null> {
        return User.findAll();
        
    }
    createUser(email: String, password: String): Promise<User | null> {
        return User.create({
         email,
         password 
        });
    }
    
    getUserById(idUser: number): Promise<User | null> {
        throw new Error("Method not implemented.");
    }
    updateUser(idUser: number, updatedUser: User): Promise<User | null> {
        throw new Error("Method not implemented.");
    }
    deleteUser(idUser: number): Promise<boolean> {
        throw new Error("Method not implemented.");
    }
    updatePassword(idUser: number, newPassword: string): Promise<boolean> {
        throw new Error("Method not implemented.");
    }


}