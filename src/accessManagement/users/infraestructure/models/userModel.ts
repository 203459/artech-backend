import { Model, DataType, Table, Column } from 'sequelize-typescript';
const strongPasswordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+{}[\]|\\:;<>,.?/~]).{8,}$/;

@Table({
  tableName: UserModel.USER_TABLE_NAME,
  timestamps: true, 
  paranoid: true
})

export class UserModel extends Model {
  public static USER_TABLE_NAME = "user" as string;
  public static USER_ID= "id" as string;
  public static USER_EMAIL= "email" as string
  public static USER_PASSWORD= "password" as string
  public static USER_STATUS_DELETE= "status_delete" as string
  public static USER_STATUS_IDROLE= "type_role" as string

  @Column({
    type: DataType.INTEGER,
    autoIncrement: true,
    primaryKey: true,
    allowNull: false,
    field: UserModel.USER_ID,
  })
  public id!: number;

  @Column({
    type: DataType.STRING(128),
    allowNull: false,
    unique: true,
    validate:{isEmail:true},
    field: UserModel.USER_EMAIL,
  })
  public email!: string;

  @Column({
    type: DataType.STRING(128),
    allowNull: false,
    validate:{is: strongPasswordRegex},
    field: UserModel.USER_PASSWORD,
  })
  public password!: string;

  @Column({
    type: DataType.STRING(128),
    allowNull: false,
    validate: { isIn: [['Activo', 'Inactivo']] },
    field: UserModel.USER_STATUS_DELETE,
  })
  public status_delete!: string;

  @Column({
    type: DataType.INTEGER,
    allowNull: false,
    field: UserModel.USER_STATUS_IDROLE,
  })
  public type_role!: number;
}
