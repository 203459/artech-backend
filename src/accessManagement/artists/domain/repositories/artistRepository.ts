import { Artist } from "../entities/artist";

export interface ArtistRepository {

    createArtist(nickname:string, name:string, lastname:string, phone:string, art_type:string[], location:string, id_user:number, status:string): Promise<Artist | string | number | null>;

    listAllArtists(): Promise<Artist[] | null>;
    
    /* getArtistById(idArtist: number): Promise<Artist|null>;
    updateArtist(id: number, updatedArtist: Artist): Promise<Artist | null>;
    deleteArtist(id: number): Promise<boolean>;
    updatePassword(idArtist: number, newPassword: string): Promise<boolean>; */
}