import { DataSource } from "typeorm"
import { DB_HOST, DB_LOGGING, DB_NAME, DB_PASSWORD, DB_PORT, DB_SYNC, DB_USER } from "./envs";

export const AppDataSource = new DataSource({
    type: "postgres",
    host: DB_HOST,
    port: DB_PORT,
    username: DB_USER,
    password: DB_PASSWORD,
    database: DB_NAME, //PM3-Lisandro85
    synchronize: DB_SYNC,
    logging: DB_LOGGING,
    entities: ["src/entities/**/*.ts"],
    subscribers: [],
    migrations: [],
    dropSchema:true
})
