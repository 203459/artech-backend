import express, { Router } from 'express';
import multer from '../services/multer';
import { authenticaMiddleware } from '../../../middlewares/authenticator';
import { createPostController, deletePostController,readPostController,
         readSinglePostController, updatePostController,likePostController } from '../dependencies';

export const postRouter: Router = express.Router();
postRouter.use(authenticaMiddleware);
postRouter.post('/',multer.single('postImageUrl'), createPostController.run.bind(createPostController));
postRouter.delete('/:id', deletePostController.run.bind(deletePostController));
postRouter.get('/', readPostController.run.bind(readPostController));
postRouter.get('/:id', readSinglePostController.run.bind(readSinglePostController));
postRouter.patch('/:id', updatePostController.run.bind(updatePostController));
postRouter.patch('/like/:id', likePostController.run.bind(likePostController));