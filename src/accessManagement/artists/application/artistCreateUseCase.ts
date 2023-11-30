import { Artist } from '../domain/entities/artist';
import { ArtistRepository } from '../domain/repositories/artistRepository';
//import { encrypt } from "../../helpers/hash";

export class ArtistCreateUseCase {

    constructor(readonly artistRepository: ArtistRepository) { }

    async run(
        nickname: string,
        name: string,
        lastname: string,
        phone: string,
        art_type: string[],
        location: string,
        status: string,
        id_user: number,
        
    ): Promise<Artist | string | number | null> {

        //aqui por que si va vacio se hashea antes evitando asi la validacion

        try {
            if (!nickname || !name || !lastname || !phone || !art_type || !location || !id_user) {
                return null;
            }

            const registerArtist = await this.artistRepository.createArtist(nickname, name, lastname, phone, art_type, location, id_user, status);

            if (registerArtist === null) {
                return null;
            }

            return registerArtist;
        } catch (error) {
            return null;
        }
    }
}