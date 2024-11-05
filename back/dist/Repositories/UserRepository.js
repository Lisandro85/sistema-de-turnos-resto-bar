"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const data_source_1 = require("../config/data-source");
const UserEntity_1 = require("../entities/UserEntity");
const UserRepository = data_source_1.AppDataSource.getRepository(UserEntity_1.User);
exports.default = UserRepository;
