import { Artist } from '../domain/entities/artist';
import { ArtistRepository } from '../domain/repositories/artistRepository';
//import { encrypt } from "../../helpers/hash";

export class CreateArtistUseCase {

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
        followers: string[],
        following: string[],
        total_followers: number,
        total_following: number,
        
    ): Promise<Artist | string | number | null> {

        try {
            if (!nickname || !name || !lastname || !phone || !art_type || !location || !id_user || !followers || !following) {
                return null;
            }

            const registerArtist = await this.artistRepository.createArtist(nickname, name, lastname, phone, art_type, location, id_user, status, followers, following, total_followers, total_following);
            
            console.log(registerArtist);

            if (registerArtist === null) {
                return null;
            }

            return registerArtist;
        } catch (error) {
            console.error("Error in CreateArtistUseCase:", error);
            return null;
        }
    }
}