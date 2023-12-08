import { Model, DataType, Table, Column } from 'sequelize-typescript';

@Table({
  tableName: RoleModel.ROLE_TABLE_NAME,
  timestamps: true, 
  paranoid: true
})

export class RoleModel extends Model {
  public static ROLE_TABLE_NAME = "role" as string;
  public static ROLE_ID= "id" as string;
  public static ROLE_TYPEROLE= "type_role" as string;

  @Column({
    type: DataType.INTEGER,
    autoIncrement: true,
    primaryKey: true,
    allowNull: false,
    field: RoleModel.ROLE_ID,
  })
  public id!: number;

  @Column({
    type: DataType.STRING(128),
    allowNull: false,
    unique: true,
    validate: { isIn: [['user', 'artist']] },
    field: RoleModel.ROLE_TYPEROLE,
  })
  public type_role!: string;
}
