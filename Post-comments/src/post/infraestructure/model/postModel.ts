import {Schema, model } from 'mongoose'; 

export interface IPost {
    creatorUid: string, 
    username: string, 
    description: string, 
    postImageUrl: string, 
    likes: string[], 
    totalLikes: number, 
    totalComments: number, 
    createAt: Date, 
    userProfileUrl: string,
}





const postSchema = new Schema({
    creatorUid: {
      type: String,
      required: true,
    },
    username: {
      type: String,
      required: true
    },
    description: {
        type: String,
       
      },
      postImageUrl: {
        type: String,
        
      },
      likes: {
        type: [String],
        
      },
      totalLikes: {
        type: Number,
       
      },
      totalComments: {
        type: Number,
    
      },
      createAt: {
        type: Date, 
        default: Date.now
      },
      userProfileUrl: {
        type: String,
       
      },
   
  }
  );

  export default model<IPost>("post", postSchema);

  