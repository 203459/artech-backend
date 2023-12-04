import { Artist } from "../../domain/entities/artist";
import { ArtistRepository } from "../../domain/repositories/artistRepository";
import { ArtistModel } from "../../infraestructure/models/artistModel"
/* import { compare, encrypt } from '../../../helpers/hash';
import { tokenSigIn } from "../../../helpers/token"; */

export class ArtistRepositoryImpl implements ArtistRepository {
    static getArtistById: any;

    createArtist(nickname: string, name: string, lastname: string, phone: string, art_type: string[], location: string, id_user: number, status: string, followers: string[], following: string[], total_followers: number, total_following: number): Promise<Artist | string | number | null> {
        return ArtistModel.create({
            nickname,
            name,
            lastname,
            phone,
            art_type,
            location,
            status,
            id_user,
            followers,
            following,
            total_followers,
            total_following,
        });
    }

    listAllArtists(): Promise<Artist[] | null> {
        return ArtistModel.findAll();
    }

    getArtistById(id: number): Promise<Artist | null> {
        return ArtistModel.findOne({ where: { id } });
    }

    async updateArtist(id: number, nickname: string, name: string, lastname: string, phone: string, art_type: string[]): Promise<Artist | string | null> {
        return ArtistModel.update(
            { nickname, name, lastname, phone, art_type },
            { where: { id } }
        )
            .then(([updatedRows]) => {
                if (updatedRows > 0) {

                    return ArtistModel.findOne({ where: { id } });
                } else {
                    return null;
                }
            })
            .catch((error) => {

                console.error('Error actualizando al artista:', error);
                return 'Error actualizando al artista';
            });
    }

    async updateLocation(id: number, location: string): Promise<Artist | boolean | null | Error> {
        return ArtistModel.update(
            { location },
            { where: { id } }
        )
            .then(([updatedRows]) => {
                if (updatedRows > 0) {
                    return ArtistModel.findOne({ where: { id } });
                } else {
                    return null;
                }
            })
            .catch((error) => {
                console.error('Error actualizando al artista:', error);
                return error;
            });
    }

    async validateArtist(id: number, status: string): Promise<Artist | boolean | null | Error> {
        return ArtistModel.update(
            { status },
            { where: { id } }
        )
            .then(([updatedRows]) => {
                if (updatedRows > 0) {
                    return ArtistModel.findOne({ where: { id } });
                } else {
                    return null;
                }
            })
            .catch((error) => {
                console.error('Error actualizando al artista:', error);
                return error;
            });
    }

    async updateFollowing(id: number, following: string [], total_following: number): Promise<Artist | boolean | number | null | Error> {
        return ArtistModel.update(
            { following, total_following},
            { where: { id } }
        )
            .then(([updatedRows]) => {
                if (updatedRows > 0) {
                    return ArtistModel.findOne({ where: { id } });
                } else {
                    return null;
                }
            })
            .catch((error) => {
                console.error('Error actualizando el seguimiento:', error);
                return error;
            });
    }

    async updateFollowers(id: number, followers: string [], total_followers: number): Promise<Artist | boolean | number | null | Error> {
        return ArtistModel.update(
            { followers, total_followers},
            { where: { id } }
        )
            .then(([updatedRows]) => {
                if (updatedRows > 0) {
                    return ArtistModel.findOne({ where: { id } });
                } else {
                    return null;
                }
            })
            .catch((error) => {
                console.error('Error actualizando los seguidores:', error);
                return error;
            });
    }

    filterFollowersById(id: number): Promise<Artist | null> {
        return ArtistModel.findOne({
            attributes: ['followers', 'total_followers'],
            where: { id },
        });
    }

    filterFollowingById(id: number): Promise<Artist | null> {
        return ArtistModel.findOne({
            attributes: ['following', 'total_following'],
            where: { id },
        });
    }

    /* deleteArtist(idArtist: number): Promise<boolean> {
        throw new Error("Method not implemented.");
    } */

}