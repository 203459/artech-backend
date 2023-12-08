import { Post } from '../../domain/entities/post';
import { PostRepository } from '../../domain/repositories/postRepository';

export class LikePostUseCase {

    constructor(readonly postRepository: PostRepository) { }

    async run(
        idPost: string,
        likes: string[],
        totalLikes: number 

    ): Promise< Post | null> {
        try {
            

            const updatePost = await this.postRepository.likePost(idPost, likes, totalLikes)
           

            return updatePost;
        } catch (error) {
            return null;
        }
    }
}