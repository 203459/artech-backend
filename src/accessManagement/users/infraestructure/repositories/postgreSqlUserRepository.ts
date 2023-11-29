import { User } from "../../domain/entities/user";
import { UserRepository } from "../../domain/repositories/userRepository";
import { compare, encrypt } from '../../../helpers/hash';
import { tokenSigIn } from "../../../helpers/token";



export class UserRepositoryImpl implements UserRepository{
    listAllUsers(): Promise<User[] | null> {
        return User.findAll();
    }

    createUser(email: String, password: String): Promise<User | null> {
        return User.create({
         email,
         password 
        });
    }

    async loginUser(email: string, password: string): Promise<string | null> {
        try {
            const user = await User.findOne({
                where: {
                    email: email
                }
            });

            if (!user) {
                return null; // Usuario no encontrado
            }

            // Verificar si la contraseña proporcionada coincide con la almacenada en la base de datos.
            const passwordMatches = await compare(password, user.password);

            if (!passwordMatches) {
                return 'Unauthorized'; // Contraseña incorrecta
            }

            // Aquí podrías generar y devolver un token JWT si estás usando autenticación basada en tokens.
            // Por ahora, simplemente devolvemos un mensaje de éxito.
            const token: string = tokenSigIn(user.id, user.email);
            return token;

        } catch (error) {
            console.error('Error durante el inicio de sesión:', error);
            throw error;
        }
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