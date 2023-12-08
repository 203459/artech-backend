import { Comment } from "../../domain/entities/comment";
import { CommentRepository } from "../../domain/repositories/commentRepository";
import commentModel from "../model/commentModel";

export class CommentRepositoryImpl implements CommentRepository {
    async createComment(postId: string, creatorUid: string, description: string, username: string, userProfileUrl: string, createAt: Date, likes: string[], totalReplays: number): Promise<Comment | null> {
        return commentModel.create({
            postId,
                creatorUid,
                description,
                username,
                userProfileUrl,
                createAt,
                likes,
                totalReplays,
        })
    }
   async  deleteComment(id: string): Promise<boolean> {
        try {
            const commentDeleted = await commentModel.findByIdAndDelete(id);
    
            if (!commentDeleted) {
              
                console.log(`comentario con ID ${id} no encontrado.`);
                return false;
            }
    
            
            console.log(`comentario con ID ${id} eliminado.`);
            return true;
        } catch (error) {
         
            console.error(`Error al eliminar el comentario: ${error}`);
            return false;
        }
    }
    async listAllComment(id:string): Promise<Comment[] | null> {
        return  commentModel.find({ postId: id });
    }
   async  updateComment(id: string, description: string): Promise<Comment | null> {
    try {
        const updatedComment = await commentModel.findByIdAndUpdate(
            id, // El primer argumento es el ID del documento que deseas actualizar
            { description }, // El segundo argumento son los datos que deseas actualizar
            { new: true } // Esto asegura que la función devuelva el documento actualizado en lugar del antiguo
        );

        return updatedComment;
    } catch (error) {
        console.error(`Error al actualizar el post: ${error}`);
        return null;
    }
    }

    async    likeComment(idComment: string, likes: string[]): Promise<Comment | null> {
        try {
            const updatedComment = await commentModel.findByIdAndUpdate(
                idComment, // El primer argumento es el ID del documento que deseas actualizar
                { likes }, // El segundo argumento son los datos que deseas actualizar
                { new: true } // Esto asegura que la función devuelva el documento actualizado en lugar del antiguo
            );
    
            return updatedComment;
        } catch (error) {
            console.error(`Error al actualizar el Comentario: ${error}`);
            return null;
        }
    }
 
   
    }
    

    

