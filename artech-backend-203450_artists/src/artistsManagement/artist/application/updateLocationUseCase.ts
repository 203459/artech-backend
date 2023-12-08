import { Artist } from '../domain/entities/artist';
import { ArtistRepository } from '../domain/repositories/artistRepository';

export class UpdateLocationUseCase {

    constructor(readonly ArtistRepository: ArtistRepository) { }

    async run(
        id: number,
        status: string

    ): Promise< Artist |boolean | null | Error> {
        try {
            if (!id || !status) {
                return null;
            }

            const validateArtist = await this.ArtistRepository.updateLocation(id, status);
            if (validateArtist === null) {
                return null;
            }

            return validateArtist;
        } catch (error) {
            return null;
        }
    }
}