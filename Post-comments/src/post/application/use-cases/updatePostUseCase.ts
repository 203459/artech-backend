import { Post } from '../../domain/entities/post';
import { PostRepository } from '../../domain/repositories/postRepository';

export class UpdatePostUseCase {
    constructor(readonly postRepository: PostRepository) { }

    async run(
        id: string,
        description: string
        
    ): Promise<Post | null | string> {
        try {
            const update = await this.postRepository.updatePost(id, description);

            return update;
        } catch (error) {
            return null;
        }
    }
}