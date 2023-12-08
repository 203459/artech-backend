import { Post } from "../../domain/entities/post";
import { PostRepository } from "../../domain/repositories/postRepository";

export class CreatePostUseCase{

    constructor(readonly postRepository: PostRepository){}

    async run (
    creatorUid: string, 
    username: string, 
    description: string, 
    postImageUrl: string, 
    likes: string[] | null, 
    totalLikes: number | null, 
    totalComments: number | null, 
    createAt: Date | null, 
    userProfileUrl: string | null,
    ): Promise<Post | null >{
        try{
            const registerPost=await this.postRepository.createPost(
                creatorUid, 
                username, 
                description, 
                postImageUrl, 
                likes, 
                totalLikes, 
                totalComments, 
                createAt, 
                userProfileUrl);
                if (registerPost === null) {
                    return null;       
                }
        return registerPost;
    }catch(error){
        return null;
    }
}
}
