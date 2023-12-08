import { CommentRepository } from "../../domain/repositories/commentRepository";

export class DeleteCommentUseCase {

    constructor(readonly commentRepository: CommentRepository) {}

    async run(commentId: string): Promise<boolean> {        
        const deleted = await this.commentRepository.deleteComment(commentId);

        if (deleted) {
            return true;
        } else {
            return false;
        }
    }
}