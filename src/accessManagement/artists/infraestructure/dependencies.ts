import { ArtistRepositoryImpl } from "./repositories/postgreSqlArtistRepository";
const artistRepositoryImpl= new ArtistRepositoryImpl();

import { CreateArtistController } from "./controllers/createArtistController";
import { CreateArtistUseCase } from "../application/createArtistUseCase";

const addArtistUseCase = new  CreateArtistUseCase(artistRepositoryImpl);
const createArtistController = new CreateArtistController(addArtistUseCase);

import { ListAllArtistsController} from "./controllers/listAllArtistsController";
import { ListAllArtistsUseCase} from "../application/listAllArtistsUseCase";

const listAllArtistsUseCase = new ListAllArtistsUseCase(artistRepositoryImpl)
const listAllArtistsController = new ListAllArtistsController(listAllArtistsUseCase)

import { GetArtistByIdController} from "./controllers/getArtistByIdController";
import { GetArtistByIdUseCase} from "../application/getArtistByIdUseCase";

const getArtistByIdUseCase = new GetArtistByIdUseCase(artistRepositoryImpl)
const getArtistByIdController = new GetArtistByIdController(getArtistByIdUseCase)

import { UpdateArtistController } from "./controllers/updateArtistController";
import { UpdateArtistUseCase } from "../application/updateArtistUseCase";

const updateArtistUseCase = new UpdateArtistUseCase(artistRepositoryImpl);
const updateArtistController = new UpdateArtistController(updateArtistUseCase);

import { ValidateArtistController } from "./controllers/validateArtistController";
import { ValidateArtistUseCase } from "../application/validateArtistUseCase";

const validateArtistUseCase = new ValidateArtistUseCase(artistRepositoryImpl);
const validateArtistController = new ValidateArtistController(validateArtistUseCase);

export {
    createArtistController,
    listAllArtistsController,
    updateArtistController,
    validateArtistController,
    getArtistByIdController,
};