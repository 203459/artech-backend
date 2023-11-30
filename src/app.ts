import sequelize from './database/db';
import express from 'express';
import { Signale } from 'signale';
import dotenv from 'dotenv';
import { artistRouter } from './accessManagement/artists/infraestructure/routes/artistRouter';

sequelize.authenticate()
  .then(() => {
    console.log('Conexión a la base de datos establecida con éxito.');
  })
  .catch((error) => {
    console.error('Error al conectar a la base de datos:', error);
  });
  
dotenv.config();

const app = express();
const signale = new Signale();
app.use(express.json());

app.use('/api/v1/artist', artistRouter);

const SERVER_PORT = process.env.SERVER_PORT || 3000;

app.listen(SERVER_PORT, () => {
    signale.success(`Server run in port ${SERVER_PORT}`);
});