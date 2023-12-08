import { Comment } from "../../domain/entities/comment";
import { CommentRepository } from "../../domain/repositories/commentRepository";
import { RabbitMQService } from "../services/rabbit";

export class CreateCommentUseCase {

    constructor(readonly commentRepository: CommentRepository,readonly rabbit: RabbitMQService) { }
    
    async run(
        
        postId: string,
        creatorUid: string,
        description: string,
        username: string,
        userProfileUrl: string,
        createAt: Date,
        likes: string[],
        totalReplays: number,
    ): Promise<Comment | null> {
        try {
            //conexion a rabbit
            await this.rabbit.connect();
            const registerComment = await this.commentRepository.createComment(
                postId,
                creatorUid,
                description,
                username,
                userProfileUrl,
                createAt,
                likes,
                totalReplays,);
            if (registerComment === null) {
                return null;
            }
            //Creacion y publicacion de data con mensaje
            let totalComments:number=0;
            const data = {
                postId: postId,
                totalComments: totalComments+1,
            };
            await this.rabbit.publishMessage('total-comments', 'total.count', { data });
            return registerComment;
        } catch (error) {
            return null;
        }
    }
}
