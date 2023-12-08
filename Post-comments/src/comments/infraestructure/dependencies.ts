import { CommentRepositoryImpl } from "./repositories/mongoDbCommentRepository";
const commentRepositoryImpl= new CommentRepositoryImpl();

import { CreateCommentController } from "./controllers/createCommentController";
import { CreateCommentUseCase } from "../application/use-cases/createCommentUseCase";
import { RabbitMQ } from "./services/rabbit";
const rabbitMQ = new RabbitMQ();
const createCommentUseCase = new CreateCommentUseCase(commentRepositoryImpl,rabbitMQ);
const createCommentController= new CreateCommentController(createCommentUseCase);

import { DeleteCommentController } from "./controllers/deleteCommentController";
import { DeleteCommentUseCase } from "../application/use-cases/deleteCommentUseCase";

const deleteCommentUseCase = new DeleteCommentUseCase(commentRepositoryImpl);
const deleteCommentController = new DeleteCommentController(deleteCommentUseCase);

import { ReadCommentController } from "./controllers/readCommentController";
import { ReadCommentUseCase } from "../application/use-cases/readCommentUseCase";

const readCommentUseCase = new ReadCommentUseCase(commentRepositoryImpl);
const readCommentController = new ReadCommentController(readCommentUseCase);



import { UpdateCommentController } from "./controllers/updateCommentController";
import { UpdateCommentUseCase } from "../application/use-cases/updateCommentUseCase";

const updateCommentUseCase = new UpdateCommentUseCase(commentRepositoryImpl);
const updateCommentController = new UpdateCommentController(updateCommentUseCase)

import { LikeCommentController } from "./controllers/likeCommentController";
import { LikeCommentUseCase } from "../application/use-cases/likeCommentUseCase";

const likeCommentUseCase= new LikeCommentUseCase(commentRepositoryImpl)
const likeCommentController= new LikeCommentController(likeCommentUseCase)



export {
    createCommentController,
    deleteCommentController,
    readCommentController,
    updateCommentController,
    likeCommentController,
}