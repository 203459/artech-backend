import { Model, DataTypes } from 'sequelize';
import sequelize from '../../../../database/db';
const strongPasswordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+{}[\]|\\:;<>,.?/~]).{8,}$/;

class User extends Model {
  public id!: number;


  public email!: string;


  public password!: string;

  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}
User.init(
  {
    id: {
      type: DataTypes.INTEGER.UNSIGNED,
      primaryKey: true,
      autoIncrement: true,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate:{isEmail:true}
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      //validate:{is: strongPasswordRegex}
    },
  },
  {
    sequelize, // La instancia de Sequelize que se utiliza para la conexión a la base de datos
    modelName: 'User',
    tableName: 'user', // Asegúrate de que coincida con el nombre de tu tabla
  }
);

sequelize.sync({ alter: true }).then(() => {
  console.log('User-table sincronizada');
});

export { User };

