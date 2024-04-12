import "reflect-metadata";
import { DataSource } from "typeorm";
import { DB_DATABASE, DB_HOST, DB_PASSWORD, DB_USERNAME } from '../../constants';

export const AppDataSource = new DataSource({
  type: "mysql",
  host: DB_HOST,
  port: 3306,
  username: DB_USERNAME,
  password: DB_PASSWORD,
  database: DB_DATABASE,
  synchronize: true,
  logging: false,
  entities: [
    "dist/infrastructure/models/**/*.js"
  ],
  migrations: [
    "dist/infrastructure/persistance/migrations/**/*.js"
  ],
  subscribers: [],
});
