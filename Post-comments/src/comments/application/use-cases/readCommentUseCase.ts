import { Comment } from "../../domain/entities/comment";
import { CommentRepository } from "../../domain/repositories/commentRepository";


export class ReadCommentUseCase {
    constructor(readonly commentRepository: CommentRepository){}

    async run(idPost: string,): Promise<Comment[]|null> {
        try {
        
        const comments = await this.commentRepository.listAllComment(idPost);
        return comments;
        } catch (error) {
            return null;
        }
    }
}