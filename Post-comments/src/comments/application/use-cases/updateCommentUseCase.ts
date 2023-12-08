import { Comment } from '../../domain/entities/comment';
import { CommentRepository } from '../../domain/repositories/commentRepository';

export class UpdateCommentUseCase {
    constructor(readonly commentRepository: CommentRepository) { }

    async run(
        id: string,
        description: string
        
    ): Promise<Comment | null | string> {
        try {
            const update = await this.commentRepository.updateComment(id, description);

            return update;
        } catch (error) {
            return null;
        }
    }
}