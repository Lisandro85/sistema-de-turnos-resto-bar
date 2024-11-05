"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DB_LOGGING = exports.DB_SYNC = exports.DB_NAME = exports.DB_PASSWORD = exports.DB_USER = exports.DB_PORT = exports.DB_HOST = exports.DB_TYPE = exports.PORT = void 0;
require("dotenv/config");
exports.PORT = process.env.PORT ? parseInt(process.env.PORT, 10) : 3000;
exports.DB_TYPE = process.env.DB_TYPE;
exports.DB_HOST = process.env.DB_HOST;
exports.DB_PORT = process.env.DB_PORT
    ? parseInt(process.env.DB_PORT, 10)
    : 5432;
exports.DB_USER = process.env.DB_USER;
exports.DB_PASSWORD = process.env.DB_PASSWORD;
exports.DB_NAME = process.env.DB_NAME;
exports.DB_SYNC = process.env.DB_SYNC
    ? process.env.DB_SYNC === "true"
    : true;
exports.DB_LOGGING = process.env.DB_LOGGING
    ? process.env.DB_LOGGING === "true"
    : true;
