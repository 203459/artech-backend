import { Artist } from '../domain/entities/artist';
import { ArtistRepository } from '../domain/repositories/artistRepository';

export class UpdateFollowersUseCase {

    constructor(readonly ArtistRepository: ArtistRepository) { }

    async run(
        id: number,
        followers: string [],
        total_followers: number,

    ): Promise< Artist | boolean | null | number | string | Error> {
        try {
            if (!id || !followers) {
                return null;
            }

            const updateArtist = await this.ArtistRepository.updateFollowers(id, followers, total_followers);
            if (updateArtist === null) {
                return null;
            }

            return updateArtist;
        } catch (error) {
            return null;
        }
    }
}