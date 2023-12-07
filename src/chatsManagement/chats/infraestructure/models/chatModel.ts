import { Model, DataType, Table, Column } from 'sequelize-typescript';

@Table({
  tableName: ChatModel.CHAT_TABLE_NAME,
  timestamps: true, 
  paranoid: true
})

export class ChatModel extends Model {
  public static CHAT_TABLE_NAME = "chat" as string;
  public static CHAT_ID= "id" as string;
  public static CHAT_STATUS= "status" as string;
  public static ID_ARTIST= "id_artist" as string;


  @Column({
    type: DataType.INTEGER,
    autoIncrement: true,
    primaryKey: true,
    allowNull: false,
    field: ChatModel.CHAT_ID,
  })
  public id!: number;

  @Column({
    type: DataType.STRING(128),
    allowNull: false,
    validate: { isIn: [['Activo', 'Inactivo']] },
    field: ChatModel.CHAT_STATUS,
  })
  public status!: string;


  @Column({
    type: DataType.INTEGER,
    allowNull: false,
    field: ChatModel.ID_ARTIST,
  })
  public id_artist!: number;

  @Column({
    type: DataType.DATE,
    allowNull: false,
    defaultValue: DataType.NOW,
    field: 'createdAt',
  })
  public createdAt!: Date;

}