import { Artist } from "../../domain/entities/artist";
import { ArtistRepository } from "../../domain/repositories/artistRepository";
/* import { compare, encrypt } from '../../../helpers/hash';
import { tokenSigIn } from "../../../helpers/token"; */



export class ArtistRepositoryImpl implements ArtistRepository{

    createArtist(nickname:string, name:string, lastname:string, phone:string, art_type:string[], location:string, id_user:number, status:string): Promise<Artist | string | number | null> {
        return Artist.create({
            nickname,
            name,
            lastname,
            phone,
            art_type,
            location,
            status,
            id_user,
        });
    }
    
    listAllArtists(): Promise<Artist[] | null> {
        return Artist.findAll();
    }
    
    /*getArtistById(idArtist: number): Promise<Artist | null> {
        throw new Error("Method not implemented.");
    }
    updateArtist(idArtist: number, updatedArtist: Artist): Promise<Artist | null> {
        throw new Error("Method not implemented.");
    }
    deleteArtist(idArtist: number): Promise<boolean> {
        throw new Error("Method not implemented.");
    }
    updatePassword(idArtist: number, newPassword: string): Promise<boolean> {
        throw new Error("Method not implemented.");
    }*/

}