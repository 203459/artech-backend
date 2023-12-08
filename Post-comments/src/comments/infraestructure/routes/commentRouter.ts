import express, { Router } from 'express';
import { createCommentController, deleteCommentController,readCommentController, updateCommentController,likeCommentController } from '../dependencies';
import { authenticaMiddleware } from '../../../middlewares/authenticator';
export const CommentRouter: Router = express.Router();

CommentRouter.use(authenticaMiddleware);
CommentRouter.post('/', createCommentController.run.bind(createCommentController));
CommentRouter.delete('/:id', deleteCommentController.run.bind(deleteCommentController));
CommentRouter.get('/:id', readCommentController.run.bind(readCommentController));
CommentRouter.patch('/:id', updateCommentController.run.bind(updateCommentController));
CommentRouter.patch('/like/:id', likeCommentController.run.bind(likeCommentController));