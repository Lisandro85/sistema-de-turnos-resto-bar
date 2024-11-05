"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppDataSource = void 0;
const typeorm_1 = require("typeorm");
const envs_1 = require("./envs");
exports.AppDataSource = new typeorm_1.DataSource({
    type: "postgres",
    host: envs_1.DB_HOST,
    port: envs_1.DB_PORT,
    username: envs_1.DB_USER,
    password: envs_1.DB_PASSWORD,
    database: envs_1.DB_NAME, //PM3-Lisandro85
    synchronize: envs_1.DB_SYNC,
    logging: envs_1.DB_LOGGING,
    entities: ["src/entities/**/*.ts"],
    subscribers: [],
    migrations: [],
    dropSchema: true
});
