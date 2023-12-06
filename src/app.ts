import Database from './database/db';
import express, { Application, Request, Response } from "express";
import dotenv from 'dotenv';
import { roleRouter } from './accessManagement/role/infraestructure/routes/roleRouter';
import { userRouter } from './accessManagement/users/infraestructure/routes/userRouter';

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
      res.send("welcome home");
    });
    this.app.use('/api/v1/user', userRouter);
    this.app.use('/api/v1/user/role', roleRouter);
  }
}

const SERVER_PORT = process.env.SERVER_PORT || 3000;

new App().app.listen(SERVER_PORT, () => {
  console.log(`✅ Server run in port ${SERVER_PORT}`);
});
