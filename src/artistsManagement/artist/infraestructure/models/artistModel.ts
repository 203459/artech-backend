import { Model, DataType, Table, Column } from 'sequelize-typescript';

@Table({
  tableName: ArtistModel.ARTIST_TABLE_NAME,
  timestamps: true, 
  paranoid: true 
})

export class ArtistModel extends Model {
  public static ARTIST_TABLE_NAME = "artist" as string;
  public static ARTIST_ID= "id" as string;
  public static ARTIST_NICKNAME= "nickname" as string;
  public static ARTIST_NAME= "name" as string;
  public static ARTIST_LASTNAME= "lastname" as string;
  public static ARTIST_PHONE= "phone" as string;
  public static ARTIST_PROFILEIMAGE= "profile_image" as string;
  public static ARTIST_ARTTYPE= "art_type" as string;
  public static ARTIST_LOCATION= "location" as string;
  public static ARTIST_STATUS= "status" as string;
  public static ARTIST_IDUSER= "id_user" as string;
  public static ARTIST_FOLLOWERS= "followers" as string;
  public static ARTIST_FOLLOWING= "following" as string;
  public static ARTIST_TOTALFOLLOWERS= "total_followers" as string;
  public static ARTIST_TOTALFOLLOWING= "total_following" as string;

  @Column({
    type: DataType.INTEGER,
    autoIncrement: true,
    primaryKey: true,
    allowNull: false,
    field: ArtistModel.ARTIST_ID,
  })
  public id!: number;

  @Column({
    type: DataType.STRING(128),
    allowNull: false,
    unique: true,
    field: ArtistModel.ARTIST_NICKNAME,
  })
  public nickname!: string;

  @Column({
    type: DataType.STRING(128),
    allowNull: false,
    field: ArtistModel.ARTIST_NAME,
  })
  public name!: string;

  @Column({
    type: DataType.STRING(128),
    allowNull: false,
    field: ArtistModel.ARTIST_LASTNAME,
  })
  public lastname!: string;

  @Column({
    type: DataType.STRING(128),
    allowNull: false,
    field: ArtistModel.ARTIST_PHONE,
  })
  public phone!: string;

  @Column({
    type: DataType.STRING(128),
    allowNull: true,
    field: ArtistModel.ARTIST_PROFILEIMAGE,
  })
  public profile_image!: string;
 
  @Column({
    type: DataType.ARRAY(DataType.STRING(128)),
    allowNull: false,
    field: ArtistModel.ARTIST_ARTTYPE,
  })
  public art_type!: string;
  
  @Column({
    type: DataType.STRING(128),
    allowNull: true,
    field: ArtistModel.ARTIST_LOCATION,
  })
  public location!: string;

  @Column({
    type: DataType.STRING(128),
    allowNull: false,
    validate: { isIn: [['en proceso', 'aprobado', 'desaprobado']] },
    field: ArtistModel.ARTIST_STATUS,
  })
  public status!: string;

  @Column({
    type: DataType.INTEGER,
    allowNull: false,
    field: ArtistModel.ARTIST_IDUSER,
  })
  public id_user!: number;

  @Column({
    type: DataType.ARRAY(DataType.STRING(128)),
    allowNull: false,
    field: ArtistModel.ARTIST_FOLLOWERS,
  })
  public followers!: string [];

  @Column({
    type: DataType.ARRAY(DataType.STRING(128)),
    allowNull: false,
    field: ArtistModel.ARTIST_FOLLOWING,
  })
  public following!: string [];

  @Column({
    type: DataType.INTEGER,
    allowNull: true,
    defaultValue: null,
    field: ArtistModel.ARTIST_TOTALFOLLOWERS,
  })
  public total_followers!: number;

  @Column({
    type: DataType.INTEGER,
    allowNull: true,
    field: ArtistModel.ARTIST_TOTALFOLLOWING,
  })
  public total_following!: number;
}


