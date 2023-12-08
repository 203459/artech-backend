import { IsNotEmpty } from "class-validator";
import { ValidatableEntity } from "../validations/validatable";

export class Post implements ValidatableEntity{
  
  @IsNotEmpty()
   public creatorUid: string;
   @IsNotEmpty()
   public username: string;
   @IsNotEmpty()
   public description: string;
   @IsNotEmpty()
   public postImageUrl: string;
   public likes: string[];
   public totalLikes: number;
   public totalComments: number;
   @IsNotEmpty()
   public createAt: Date;
   @IsNotEmpty()
   public userProfileUrl: string;

  constructor(
    
    creatorUid: string, 
    username: string, 
    description: string, 
    postImageUrl: string, 
    likes: string[] , 
    totalLikes: number , 
    totalComments: number , 
    createAt: Date , 
    userProfileUrl: string,
) {
  
    this.creatorUid = creatorUid
    this.username = username
    this.description = description
    this.postImageUrl = postImageUrl
    this.likes = likes
    this.totalLikes = totalLikes
    this.totalComments = totalComments
    this.createAt = createAt
    this.userProfileUrl = userProfileUrl
  }
  async validate() {
    return Promise.resolve();
}
}