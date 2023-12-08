import { PostRepository } from "../../domain/repositories/postRepository";

export class DeletePostUseCase {

    constructor(readonly postRepository: PostRepository) {}

    async run(postId: string): Promise<boolean> {        
        const deleted = await this.postRepository.deletePost(postId);

        if (deleted) {
            return true;
        } else {
            return false;
        }
    }
}