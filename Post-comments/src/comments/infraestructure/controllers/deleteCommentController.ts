import { Request, Response } from 'express';
import { DeleteCommentUseCase } from '../../application/use-cases/deleteCommentUseCase';
import postModel from '../../../post/infraestructure/model/postModel';
import commentModel from '../model/commentModel';



export class DeleteCommentController {
  constructor(private deleteCommentUseCase: DeleteCommentUseCase) {}

  async run(req: Request, res: Response): Promise<void> {
    try {
      let post, comments, coment
      const id = req.params.id; 
      coment= await commentModel.findById(id);
      const isDeleted = await this.deleteCommentUseCase.run(id);
      
      if(coment){
        post = await postModel.findById(coment.postId)
      }
      
            console.log(post)
            if(post){
                comments=post.totalComments-1
                console.log(comments)
                await postModel.findByIdAndUpdate(
                    post.id,
                    { totalComments: comments },
                    { new: true } // Esto es opcional y devuelve el documento actualizado
                  );
              }

      if (isDeleted) {
        res.status(200).json({ message: 'comentario eliminado.' });
      } else {
        res.status(404).json({ error: 'comentario no encontrado o no autorizado para eliminar.' });
      }
    } catch (error) {
      console.error('Error al eliminar el comentario:', error);
      res.status(500).json({ error: 'Error al eliminar el comentario.' });
    }
  }

}