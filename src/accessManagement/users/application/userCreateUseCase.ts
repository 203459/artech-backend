import { User } from '../domain/entities/user'; // Asegúrate de importar la entidad User
import { UserRepository } from '../domain/repositories/userRepository';

export class UserCreateUseCase {

    constructor(readonly userRepository: UserRepository) { }

    async run(
        email: string,
        password: string,
        
    ): Promise<User | null | number | Error> {
        try {
            if (!email || !password) {
                return null;
            }

            const registerUser = await this.userRepository.createUser(email, password);

            if (registerUser === null) {
                return null;
            }

            return registerUser;
        } catch (error) {
            return null;
        }
    }
}