import Database from './database/db';
import express, { Application, Request, Response } from "express";
import dotenv from 'dotenv';
import {artistRouter}  from './artistsManagement/artist/infraestructure/routes/artistRouter';
import {emailRouter } from './artistsManagement/artist/infraestructure/services/emailRouter';

dotenv.config();

class App {
  public app: Application;

  constructor() {
    this.app = express();
    this.databaseSync();
    this.plugins();
    this.routes();
  }

  protected plugins(): void {
    this.app.use(express.json());
    this.app.use(express.urlencoded({ extended: true }));
  }

  protected databaseSync(): void {
    const db = new Database();
    db.sequelize?.sync();
  }

  protected routes(): void {
    this.app.route("/").get((req: Request, res: Response) => {
      res.send("artists");
    });
    this.app.use('/a', artistRouter);
    this.app.use('/email', emailRouter);
  }
}

const SERVER_PORT = process.env.SERVER_PORT || 4000;

new App().app.listen(SERVER_PORT, () => {
  console.log(`✅ Server run in port ${SERVER_PORT}`);
});