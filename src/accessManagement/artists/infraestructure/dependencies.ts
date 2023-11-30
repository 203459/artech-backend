import { ArtistRepositoryImpl } from "./repositories/postgreSqlArtistRepository";
const artistRepositoryImpl= new ArtistRepositoryImpl();

import { ArtistCreateController } from "./controllers/artistCreateController";
import { ArtistCreateUseCase } from "../application/artistCreateUseCase";

const addArtistUseCase = new  ArtistCreateUseCase(artistRepositoryImpl);
const artistCreateController = new ArtistCreateController(addArtistUseCase);

import { ListAllArtistsController} from "./controllers/listAllArtistsController";
import { ListAllArtistsUseCase} from "../application/listAllArtistsUseCase";

const listAllArtistsUseCase = new ListAllArtistsUseCase(artistRepositoryImpl)
const listAllArtistsController = new ListAllArtistsController(listAllArtistsUseCase)

export {
    artistCreateController,
    listAllArtistsController,
};