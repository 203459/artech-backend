import jwt from "jsonwebtoken";
import dotenv from "dotenv";
import { NextFunction, Request,Response } from "express";

dotenv.config();

const secretKey:any = process.env.SECRET_JWT;

export const authenticaMiddleware = (
    req:Request,
    res:Response,
    next:NextFunction
) => {

    const token:any = req.header('Authorization');

   

    try {
        const decode = jwt.verify(token,secretKey);

        (req as any).token = decode;

        next();

    }catch(error) {
        return res.status(401).json({
            error:'unauthorized'
        })
    }

}