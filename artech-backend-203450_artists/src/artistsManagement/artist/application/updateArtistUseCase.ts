import { Artist } from '../domain/entities/artist';
import { ArtistRepository } from '../domain/repositories/artistRepository';

export class UpdateArtistUseCase {
    constructor(readonly ArtistRepository: ArtistRepository) { }

    async run(
        id: number,
        nickname: string,
        name: string,
        lastname: string,
        phone: string,
        art_type: string[],
        
    ): Promise<Artist | null | string> {
        try {
            const update = await this.ArtistRepository.updateArtist(id, nickname, name, lastname, phone, art_type);

            return update;
        } catch (error) {
            return null;
        }
    }
}