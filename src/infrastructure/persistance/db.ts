import "reflect-metadata";
import { DataSource } from "typeorm";
import { DB_DATABASE, DB_HOST, DB_PASSWORD, DB_USERNAME } from '../../constants';

export class Database {
  dataSource!: DataSource;

  async init(): Promise<any> {
    if (this.dataSource) return this.dataSource;

    this.dataSource = new DataSource({
      type: "mysql",
      host: DB_HOST,
      port: 3306,
      username: DB_USERNAME,
      password: DB_PASSWORD,
      database: DB_DATABASE,
      synchronize: true,
      logging: false,
      entities: [
        __dirname + '/../**/*.model.{js,ts}'
      ],
      migrations: [
        "dist/infrastructure/persistance/migrations/**/*.js"
      ],
      subscribers: [],
    });
    await this.dataSource.initialize();
  }
}

const db = new Database();

export { db };