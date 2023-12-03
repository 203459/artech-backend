import { Artist } from '../domain/entities/artist';
import { ArtistRepository } from '../domain/repositories/artistRepository';

export class UpdateFollowUseCase {

    constructor(readonly ArtistRepository: ArtistRepository) { }

    async run(
        id: number,
        followers: Artist []

    ): Promise< Artist | boolean | null | number | string | Error> {
        try {
            if (!id || !followers) {
                return null;
            }

            const updateFollow = await this.ArtistRepository.updateFollow(id, followers);
            if (updateFollow === null) {
                return null;
            }

            return updateFollow;
        } catch (error) {
            return null;
        }
    }
}