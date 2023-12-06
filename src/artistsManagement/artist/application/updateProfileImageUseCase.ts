import { Artist } from '../domain/entities/artist';
import { ArtistRepository } from '../domain/repositories/artistRepository';

export class UpdateProfileImageUseCase {

    constructor(readonly ArtistRepository: ArtistRepository) { }

    async run(
        id: number,
        profile_image: string,

    ): Promise< Artist |boolean | string | null | Error> {
        try {
            if (!id) {
                return null;
            }

            const validateArtist = await this.ArtistRepository.updateProfileImage(id, profile_image);
            if (validateArtist === null) {
                return null;
            }

            return validateArtist;
        } catch (error) {
            return null;
        }
    }
}