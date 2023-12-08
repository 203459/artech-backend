import { Post } from "../../domain/entities/post";
import { PostRepository } from "../../domain/repositories/postRepository";


export class ReadPostUseCase {
    constructor(readonly postRepository: PostRepository){}

    async run(): Promise<Post[]|null> {
        try {
        const posts = await this.postRepository.listAllPosts();
        return posts;
        } catch (error) {
            return null;
        }
    }
}