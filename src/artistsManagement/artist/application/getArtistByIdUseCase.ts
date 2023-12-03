import { Artist } from "../domain/entities/artist";
import { ArtistRepository } from "../domain/repositories/artistRepository";

export class GetArtistByIdUseCase {
    constructor(readonly artistRepository: ArtistRepository) { }

    async run(
        id: number,
        
    ): Promise<Artist | number | null | string> {
        try {
            const artist = await this.artistRepository.getArtistById(id);
            return artist;
            } catch (error) {
                return null;
            }
    }
}