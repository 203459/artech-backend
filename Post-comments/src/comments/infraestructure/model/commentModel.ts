import { Schema, model } from 'mongoose';

export interface IComment {
  postId: string,
  creatorUid: string,
  description: string,
  username: string,
  userProfileUrl: string,
  createAt: Date,
  likes: string[],
  totalReplays: number
}

const commentSchema = new Schema({
  postId: {
    type: String,
    required: true,
  },
  creatorUid: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true
  },
  username: {
    type: String,

  },
  userProfileUrl: {
    type: String,

  },
  createAt: {
    type: Date,
    default: Date.now
  },
  likes: {
    type: [String],

  },
  totalReplays: {
    type: Number,

  }

}
);

export default model<IComment>("comment", commentSchema);

