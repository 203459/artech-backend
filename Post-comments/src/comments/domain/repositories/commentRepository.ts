import { Comment } from "../entities/comment";

export interface CommentRepository{
    createComment(
        postId: string,
        creatorUid: string,
        description: string,
        username: string,
        userProfileUrl: string,
        createAt: Date,
        likes: string[],
        totalReplays: number,): Promise<Comment|null>;
        deleteComment(id: string): Promise<boolean>;
        listAllComment(idPost: string): Promise<Comment[] | null>;
        updateComment(id: string, description: string): Promise<Comment | null>;
        likeComment(idComment:string, likes: string[]): Promise<Comment | null>;
}