import { User } from '../domain/entities/user';
import { UserRepository } from '../domain/repositories/userRepository';

export class ValidateDeletUserUseCase {

    constructor(readonly UserRepository: UserRepository) { }

    async run(
        id: number,
        status_delete: string

    ): Promise< User |boolean | null | Error> {
        try {
            if (!id || !status_delete) {
                return null;
            }

            const validateUser = await this.UserRepository.validateDeletUser(id, status_delete);
            if (validateUser === null) {
                return null;
            }

            return validateUser;
        } catch (error) {
            return null;
        }
    }
}