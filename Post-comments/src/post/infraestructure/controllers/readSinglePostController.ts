import { Request, Response } from "express";

import { ReadSinglePostUseCase } from "../../application/use-cases/readSinglePostUseCase";

export class ReadSinglePostController {
  constructor(readonly postById: ReadSinglePostUseCase) {}

  async run(req: Request, res: Response) {
    const postId = req.params.id;

    const post = await this.postById.run(postId);
    res.status(200).json(post);
  }
}