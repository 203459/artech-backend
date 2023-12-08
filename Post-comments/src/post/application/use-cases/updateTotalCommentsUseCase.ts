import { Post } from '../../domain/entities/post';
import { PostRepository } from '../../domain/repositories/postRepository';

export class UpdateTotalCommetsUseCase {
    constructor(readonly postRepository: PostRepository) { }

    async run(
        id: string,
        totalComments: number
        
    ): Promise<Post | null | string> {
        try {
            const update = await this.postRepository.updateTotalComments(id, totalComments);

            return update;
        } catch (error) {
            return null;
        }
    }
}