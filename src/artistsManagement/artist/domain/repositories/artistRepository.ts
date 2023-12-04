import { Artist } from "../entities/artist";

export interface ArtistRepository {

    createArtist(
        nickname: string, 
        name: string, 
        lastname: string, 
        phone: string, 
        art_type: string[], 
        location: string, 
        id_user: number, 
        status: string,
        followers: string[], 
        following: string[],
        total_followers: number, 
        total_following: number, 
    ): Promise<Artist | string | number | null>;

    listAllArtists(): Promise<Artist[] | null>;

    updateArtist(
        id: number, 
        nickname: string, 
        name: string, 
        lastname: string, 
        phone: string, 
        art_type: string[]
    ): Promise<Artist | string | null>;

    updateLocation(
        id: number, 
        location: string
    ): Promise<Artist | boolean | null | Error>;

    validateArtist(
        id: number, 
        status: string
    ): Promise<Artist | boolean | null | Error>;

    getArtistById(
        id: number
    ): Promise<Artist | number | null>;

    updateFollowing(
        id: number, 
        following: string [],
        total_following: number,
    ): Promise<Artist | boolean | null | string | number | Error>;

    updateFollowers(
        id: number, 
        followers: string [],
        total_followers: number,
    ): Promise<Artist | boolean | null | string | number | Error>;

    filterFollowersById(
        id: number,
    ): Promise<Artist | boolean | null | string | number | Error>;

    filterFollowingById(
        id: number,
    ): Promise<Artist | boolean | null | string | number | Error>;

    /* deleteArtist(
        id: number
    ): Promise<boolean>;

    updatePassword(
        idArtist: number, 
        newPassword: string
    ): Promise<boolean>; */
}