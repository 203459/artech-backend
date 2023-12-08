import { Post } from "../../domain/entities/post";
import { PostRepository } from "../../domain/repositories/postRepository";
import postModel from "../model/postModel";
import fs from 'fs-extra';
import path from 'path'

export class PostRepositoryImpl implements PostRepository {
 async   updateTotalComments(id: string, comments: number): Promise<Post | null> {
        try {
            let totalComments;
            const post = await postModel.findById(id)
            if(post){
                totalComments =post.totalComments + comments
            }
            const updatedPost = await postModel.findByIdAndUpdate(
                id, // El primer argumento es el ID del documento que deseas actualizar
                { totalComments }, // El segundo argumento son los datos que deseas actualizar
                { new: true } // Esto asegura que la función devuelva el documento actualizado en lugar del antiguo
            );
    
            return updatedPost;
        } catch (error) {
            console.error(`Error al actualizar el post: ${error}`);
            return null;
        }
    }
async    likePost(idPost: string, likes: string[], totalLikes: number): Promise<Post | null> {
        try {
            const updatedPost = await postModel.findByIdAndUpdate(
                idPost, // El primer argumento es el ID del documento que deseas actualizar
                { likes,totalLikes }, // El segundo argumento son los datos que deseas actualizar
                { new: true } // Esto asegura que la función devuelva el documento actualizado en lugar del antiguo
            );
    
            return updatedPost;
        } catch (error) {
            console.error(`Error al actualizar el post: ${error}`);
            return null;
        }
    }
 
    async   createPost(creatorUid: string, username: string, description: string, postImageUrl: string, likes: string[] | null, totalLikes: number | null, totalComments: number | null, createAt: Date | null, userProfileUrl: string | null): Promise<Post | null> {
        return postModel.create({
            creatorUid,
            username,
            description,
            postImageUrl,
            likes,
            totalLikes,
            totalComments,
            createAt,
            userProfileUrl
        })
    }

    async deletePost(id: string): Promise<boolean> {
        
        try {
            const postDeleted = await postModel.findByIdAndDelete(id);
            if(postDeleted){
                await fs.unlink(path.resolve(postDeleted.postImageUrl));
            }
            if (!postDeleted) {
                // El post no se encontró
                console.log(`Post con ID ${id} no encontrado.`);
                return false;
            }
    
            // Post eliminado exitosamente
            console.log(`Post con ID ${id} eliminado.`);
            return true;
        } catch (error) {
            // Manejar errores
            console.error(`Error al eliminar el post: ${error}`);
            return false;
        }
    }
    async listAllPosts(): Promise<Post[] | null> {
        return postModel.find();
    }

     async getPostbyId(id: string): Promise<Post | null> {
        return postModel.findById(id);
    }

    async updatePost(id: string, description: string): Promise<Post | null> {
        try {
            const post = await postModel.findById
            const updatedPost = await postModel.findByIdAndUpdate(
                id, // El primer argumento es el ID del documento que deseas actualizar
                { description }, // El segundo argumento son los datos que deseas actualizar
                { new: true } // Esto asegura que la función devuelva el documento actualizado en lugar del antiguo
            );
    
            return updatedPost;
        } catch (error) {
            console.error(`Error al actualizar el post: ${error}`);
            return null;
        }
    }
    

    

}