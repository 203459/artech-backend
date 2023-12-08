import { Artist } from "../domain/entities/artist";
import { ArtistRepository } from "../domain/repositories/artistRepository";

export class FilterFollowingByIdUseCase {
    constructor(readonly  artistRepository:  ArtistRepository) { }

    async run(
        id: number,
        
    ): Promise<Artist | number | null | string> {
        try {
            const artist = await this.artistRepository.filterFollowingById(id);
            return artist;
            } catch (error) {
                return null;
            }
    }
}