import { Artist } from '../domain/entities/artist';
import { ArtistRepository } from '../domain/repositories/artistRepository';

export class UpdateFollowingUseCase {

    constructor(readonly ArtistRepository: ArtistRepository) { }

    async run(
        id: number,
        following: string [],
        total_following: number,

    ): Promise< Artist | boolean | null | number | string | Error> {
        try {
            if (!id || !following) {
                return null;
            }

            const updateArtist = await this.ArtistRepository.updateFollowing(id, following, total_following);
            if (updateArtist === null) {
                return null;
            }

            return updateArtist;
        } catch (error) {
            return null;
        }
    }
}