import { Request, Response } from 'express';
import { DeletePostUseCase } from '../../application/use-cases/deletePostUseCase';



export class DeletePostController {
  constructor(private deletePostUseCase: DeletePostUseCase) {}

  async run(req: Request, res: Response): Promise<void> {
    try {
      const id = req.params.id; 
      const isDeleted = await this.deletePostUseCase.run(id);

      if (isDeleted) {
        res.status(200).json({ message: 'Post eliminado.' });
      } else {
        res.status(404).json({ error: 'Post no encontrado o no autorizado para eliminar.' });
      }
    } catch (error) {
      console.error('Error al eliminar el post:', error);
      res.status(500).json({ error: 'Error al eliminar el post.' });
    }
  }

}