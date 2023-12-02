import { Artist } from "../domain/entities/artist";
import { ArtistRepository } from "../domain/repositories/artistRepository";

export class ListAllArtistsUseCase {
    constructor(readonly artistRepository: ArtistRepository){}

    async run(): Promise<Artist[]|null> {
        try {
        const artist = await this.artistRepository.listAllArtists();
        return artist;
        } catch (error) {
            return null;
        }
    }
}