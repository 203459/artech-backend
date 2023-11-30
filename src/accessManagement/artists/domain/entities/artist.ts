import { Model, DataTypes } from 'sequelize';
import sequelize from '../../../../database/db';

class Artist extends Model {

  public id!: number;
  public nickname!: string;
  public name!: string;
  public lastname!: string;
  public phone!: string;
  public art_type!: String[];
  public location!: string;
  public status!: string;
  public id_user!: number;
  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}

// Inicializar el modelo con Sequelize

Artist.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    nickname: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    lastname: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    phone: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    art_type: {
      type: DataTypes.ARRAY(DataTypes.STRING), // Utiliza ARRAY para representar una lista de cadenas
      allowNull: false,
    },
    location: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    status: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {isIn: [['en proceso', 'aprobado', 'desaprobado']]},
    },
    id_user: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  {
    sequelize, // La instancia de Sequelize que se utiliza para la conexión a la base de datos
    modelName: 'Artist',
    tableName: 'artist', // Asegúrate de que coincida con el nombre de tu tabla
  }
);

sequelize.sync({ alter: true }).then(() => {
  console.log('artist-table sincronizada');
});

export { Artist };