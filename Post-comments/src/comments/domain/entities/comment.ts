import { IsNotEmpty } from "class-validator";
import { ValidatableEntity } from "../validations/validatable";
export class Comment implements ValidatableEntity {
    @IsNotEmpty()
    public postId: string;
    @IsNotEmpty()
    public creatorUid: string;
    @IsNotEmpty()
    public description: string;
    @IsNotEmpty()
    public username: string;
    @IsNotEmpty()
    public userProfileUrl: string;
    @IsNotEmpty()
    public createAt: Date;
    public likes: string[];
    public totalReplays: number;

    constructor(
        postId: string,
        creatorUid: string,
        description: string,
        username: string,
        userProfileUrl: string,
        createAt: Date,
        likes: string[],
        totalReplays: number
    ) {
       
        this.postId=postId,
        this.creatorUid=creatorUid,
        this.description=description,
        this.username=username,
        this.userProfileUrl=userProfileUrl,
        this.createAt=createAt,
        this.likes=likes,
        this.totalReplays=totalReplays
    }
    async validate() {
        return Promise.resolve();
    }
}