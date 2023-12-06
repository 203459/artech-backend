import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';



dotenv.config();

interface TokenPayload {
    id: number;
    email: string;
}



export const tokenSigIn = (id:number, email:string ): string => {
    return jwt.sign(
        {
            id: id,
            email: email
        },
        process.env.SECRET_JWT!,
        {
            expiresIn: '1h'
        }
    );
}

export const verifyToken = (token: string): TokenPayload | null => {
    try {
        return jwt.verify(token, process.env.SECRET_JWT!) as TokenPayload;
    } catch (error) {
        return null;
    }
}