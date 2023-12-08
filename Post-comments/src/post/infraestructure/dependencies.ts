import { PostRepositoryImpl } from "./repositories/mongoDbPostRepository";
const postRepositoryImpl= new PostRepositoryImpl();
import { UpdateTotalComments } from "./services/updateTotalComments";
import { CreatePostController } from "./controllers/createPostController";
import { CreatePostUseCase } from "../application/use-cases/createPostUseCase";

const createPostUseCase = new CreatePostUseCase(postRepositoryImpl);
const createPostController= new CreatePostController(createPostUseCase);

import { DeletePostController } from "./controllers/deletePostController";
import { DeletePostUseCase } from "../application/use-cases/deletePostUseCase";

const deletePostUseCase = new DeletePostUseCase(postRepositoryImpl);
const deletePostController = new DeletePostController(deletePostUseCase);

import { ReadPostController } from "./controllers/readPostController";
import { ReadPostUseCase } from "../application/use-cases/readPostUseCase";

const readPostUseCase = new ReadPostUseCase(postRepositoryImpl);
const readPostController = new ReadPostController(readPostUseCase);

import { ReadSinglePostController } from "./controllers/readSinglePostController";
import { ReadSinglePostUseCase } from "../application/use-cases/readSinglePostUseCase";

const readSinglePostUseCase = new ReadSinglePostUseCase(postRepositoryImpl);
const readSinglePostController= new ReadSinglePostController(readSinglePostUseCase);

import { UpdatePostController } from "./controllers/updatePostController";
import { UpdatePostUseCase } from "../application/use-cases/updatePostUseCase";

const updatePostUseCase = new UpdatePostUseCase(postRepositoryImpl);
const updatePostController = new UpdatePostController(updatePostUseCase)

import { LikePostController } from "./controllers/likePostController";
import { LikePostUseCase } from "../application/use-cases/likePostUseCase";

const likePostUseCase= new LikePostUseCase(postRepositoryImpl)
const likePostController= new LikePostController(likePostUseCase)

import { UpdateTotalCommetsUseCase } from "../application/use-cases/updateTotalCommentsUseCase";

export async function updateTotalComments() {
    const updateTotalCommetsUseCase = new UpdateTotalCommetsUseCase(postRepositoryImpl);
    await UpdateTotalComments(updateTotalCommetsUseCase);    
}

export {
    createPostController,
    deletePostController,
    readPostController,
    readSinglePostController,
    updatePostController,
    likePostController,
}