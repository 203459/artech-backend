import { ArtistRepositoryImpl } from "./repositories/postgreSqlArtistRepository";
const artistRepositoryImpl= new ArtistRepositoryImpl();

import { CreateArtistController } from "./controllers/createArtistController";
import { CreateArtistUseCase } from "../application/createArtistUseCase";

const addArtistUseCase = new  CreateArtistUseCase(artistRepositoryImpl);
const createArtistController = new CreateArtistController(addArtistUseCase);

import { ListAllArtistsController} from "./controllers/listAllArtistsController";
import { ListAllArtistsUseCase} from "../application/listAllArtistsUseCase";

const listAllArtistsUseCase = new ListAllArtistsUseCase(artistRepositoryImpl);
const listAllArtistsController = new ListAllArtistsController(listAllArtistsUseCase);

import { GetArtistByIdController} from "./controllers/getArtistByIdController";
import { GetArtistByIdUseCase} from "../application/getArtistByIdUseCase";

const getArtistByIdUseCase = new GetArtistByIdUseCase(artistRepositoryImpl)
const getArtistByIdController = new GetArtistByIdController(getArtistByIdUseCase)

import { UpdateArtistController } from "./controllers/updateArtistController";
import { UpdateArtistUseCase } from "../application/updateArtistUseCase";

const updateArtistUseCase = new UpdateArtistUseCase(artistRepositoryImpl);
const updateArtistController = new UpdateArtistController(updateArtistUseCase);

import { UpdateLocationController } from "./controllers/updateLocationController";
import { UpdateLocationUseCase } from "../application/updateLocationUseCase";

const updateLocationUseCase = new UpdateLocationUseCase(artistRepositoryImpl);
const updateLocationController = new UpdateLocationController(updateLocationUseCase);

import { ValidateArtistController } from "./controllers/validateArtistController";
import { ValidateArtistUseCase } from "../application/validateArtistUseCase";

const validateArtistUseCase = new ValidateArtistUseCase(artistRepositoryImpl);
const validateArtistController = new ValidateArtistController(validateArtistUseCase);

import { UpdateFollowingController } from "./controllers/updateFollowingController";
import { UpdateFollowingUseCase } from "../application/updateFollowingUseCase";

import { UpdateFollowersUseCase } from "../application/updateFollowersUseCase";

const updateFollowersUseCase = new UpdateFollowersUseCase(artistRepositoryImpl);

const updateFollowingUseCase = new UpdateFollowingUseCase(artistRepositoryImpl);
const updateFollowingController = new UpdateFollowingController(updateFollowingUseCase, updateFollowersUseCase);

import { FilterFollowersByIdController} from "./controllers/filterFollowersByIdController";
import { FilterFollowersByIdUseCase} from "../application/filterFollowersByIdUseCase";

const filterFollowersByIdUseCase = new FilterFollowersByIdUseCase(artistRepositoryImpl);
const filterFollowersByIdController = new FilterFollowersByIdController(filterFollowersByIdUseCase);

import { FilterFollowingByIdController} from "./controllers/filterFollowingByIdController";
import { FilterFollowingByIdUseCase} from "../application/filterFollowingByIdUseCase";

const filterFollowingByIdUseCase = new FilterFollowingByIdUseCase(artistRepositoryImpl);
const filterFollowingByIdController = new FilterFollowingByIdController(filterFollowingByIdUseCase);

export {
    createArtistController,
    getArtistByIdController,
    listAllArtistsController,
    updateArtistController,
    updateLocationController,
    validateArtistController,
    updateFollowingController,
    filterFollowersByIdController,
    filterFollowingByIdController,
};