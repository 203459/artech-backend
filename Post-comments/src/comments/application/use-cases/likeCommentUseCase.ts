import { Comment } from '../../domain/entities/comment';
import { CommentRepository } from '../../domain/repositories/commentRepository';

export class LikeCommentUseCase {

    constructor(readonly commentRepository: CommentRepository) { }

    async run(
        idComment: string,
        likes: string[],
        

    ): Promise< Comment | null> {
        try {
            

            const updateComment = await this.commentRepository.likeComment(idComment, likes)
           

            return updateComment;
        } catch (error) {
            return null;
        }
    }
}