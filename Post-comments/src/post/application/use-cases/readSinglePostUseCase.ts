import { Post } from "../../domain/entities/post";
import { PostRepository } from "../../domain/repositories/postRepository";

export class ReadSinglePostUseCase {
  constructor(readonly postRepository: PostRepository) {}

  async run(postId: string): Promise<Post | null> {
    const post = await this.postRepository.getPostbyId(postId);
    return post;
  }
}