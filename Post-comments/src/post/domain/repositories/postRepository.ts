import { Post } from "../entities/post";

export interface PostRepository{
    createPost(
        creatorUid: string, 
        username: string, 
        description: string, 
        postImageUrl: string, 
        likes: string[] | null, 
        totalLikes: number | null, 
        totalComments: number | null, 
        createAt: Date | null, 
        userProfileUrl: string | null,): Promise<Post|null>;
    
        deletePost(id: string): Promise<boolean>;
        listAllPosts(): Promise<Post[] | null>;
        getPostbyId(id: string): Promise<Post | null>;
        updatePost(id: string, description: string): Promise<Post | null>;
        likePost(idPost:string, likes: string[], totalLikes: number ): Promise<Post | null>;
        updateTotalComments(id: string, totalComments: number): Promise<Post | null>;
}