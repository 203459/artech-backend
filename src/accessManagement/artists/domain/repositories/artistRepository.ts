import { Artist } from "../entities/artist";

export interface ArtistRepository {

    createArtist(nickname:string, name:string, lastname:string, phone:string, art_type:string[], location:string, id_user:number, status:string): Promise<Artist | string | number | null>;

    listAllArtists(): Promise<Artist[] | null>;

    updateArtist( id:number,nickname: string, name: string, lastname: string, phone: string, art_type: string[]) : Promise<Artist | string | null>;
    
    validateArtist( id: number , status: string): Promise< Artist | boolean | null | Error >;

    getArtistById(id: number): Promise<Artist| number | null>;
    
    /* deleteArtist(id: number): Promise<boolean>;
    updatePassword(idArtist: number, newPassword: string): Promise<boolean>; */
}