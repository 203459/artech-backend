import express, { Application, Request, Response } from "express";
import * as dotenv from 'dotenv';
import { config } from "./database/mongodb";
import mongoose from 'mongoose';
import { postRouter } from "./post/infraestructure/routes/postRouter";
import { CommentRouter } from "./comments/infraestructure/routes/commentRouter";
import { updateTotalComments } from "./post/infraestructure/dependencies";
import morgan from 'morgan';
import path from 'path';
import cors from 'cors';
dotenv.config();
mongoose.set('strictQuery', true);
class App {
    public app: Application;
    
    constructor() {
        this.app = express();
        this.databaseSync();
        this.plugins();
        this.routes();
        this.updateTotalComments();
    }

    protected plugins(): void {
        this.app.use(express.json());
        this.app.use(express.urlencoded({ extended: true }));
        this.app.use(morgan('dev'));
        this.app.use(cors());
       
    }

    protected databaseSync(): void {
        /** Connect to Mongo */
        
        mongoose.connect(config.mongo.url, { retryWrites: true, w: 'majority' });
        const connection = mongoose.connection;
        
        connection.once('open', () => {
            console.log('Mongodb Connection stablished');
        });

        connection.on('error', (err) => {
            console.log('Mongodb connection error:', err);
            process.exit();
        });
    }

    protected routes(): void {
        this.app.route("/").get((req: Request, res: Response) => {
            res.send("posts");
        });
         this.app.use("/p", postRouter);
         this.app.use("/c", CommentRouter);
         this.app.use('/uploads', express.static(path.resolve('uploads')));
    }

    private async updateTotalComments(): Promise<void> {
        try {
            await updateTotalComments();
        } catch (error) {
        }
    }
}

const port: number = 5000;
const app = new App().app;

app.listen(port, () => {
    console.log("✅ Server started successfully!");
    
});