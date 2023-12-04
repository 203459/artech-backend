import { ArtistRepositoryImpl } from "./repositories/postgreSqlArtistRepository";
const artistRepositoryImpl= new ArtistRepositoryImpl();

import { CreateArtistController } from "./controllers/createNotificationsController";
import { CreateArtistUseCase } from "../application/createArtistUseCase";

const addArtistUseCase = new  CreateArtistUseCase(artistRepositoryImpl);
const createArtistController = new CreateArtistController(addArtistUseCase);

import { ListAllArtistsController} from "./controllers/listAllNotificationsController";
import { ListAllArtistsUseCase} from "../application/listAllArtistsUseCase";

const listAllArtistsUseCase = new ListAllArtistsUseCase(artistRepositoryImpl);
const listAllArtistsController = new ListAllArtistsController(listAllArtistsUseCase);


export {
    createArtistController,
    listAllArtistsController,
};