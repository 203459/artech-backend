import { Model, DataType, Table, Column } from 'sequelize-typescript';

@Table({
  tableName: MessageModel.MESSAGE_TABLE_NAME,
  timestamps: true, 
  paranoid: true
})

export class MessageModel extends Model {
  public static MESSAGE_TABLE_NAME = "message" as string;
  public static MESSAGE_ID= "id" as string;
  public static MESSAGE_FILE= "file" as string;
  public static MESSAGE_TEXT= "text" as string;
  //public static MESSAGE_DATE= "date" as string;
  public static ID_ARTIST= "id_artist" as string;

  @Column({
    type: DataType.INTEGER,
    autoIncrement: true,
    primaryKey: true,
    allowNull: false,
    field: MessageModel.MESSAGE_ID,
  })
  public id!: number;

  @Column({
    type: DataType.STRING(128),
    allowNull: false,
    field: MessageModel.MESSAGE_FILE,
  })
  public file!: string;

  @Column({
    type: DataType.STRING(128),
    allowNull: false,
    field: MessageModel.MESSAGE_TEXT,
  })
  public text!: string;

  @Column({
    type: DataType.INTEGER,
    allowNull: false,
    field: MessageModel.ID_ARTIST,
  })
  public id_artist!: number;
}