"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.loginUserService = exports.getUserByIdService = exports.getAllUsersService = exports.registerUserService = void 0;
const credentialService_1 = require("./credentialService");
const UserEntity_1 = require("../entities/UserEntity");
const CustomErrorUtil_1 = require("../Utils/CustomErrorUtil");
const UserRepository_1 = __importDefault(require("../Repositories/UserRepository"));
const data_source_1 = require("../config/data-source");
const menorDeEdad_1 = __importDefault(require("../Utils/menorDeEdad"));
const registerUserService = (userData) => __awaiter(void 0, void 0, void 0, function* () {
    if (!(0, menorDeEdad_1.default)(userData.birthdate)) {
        throw new CustomErrorUtil_1.CustomError(400, "El usuario debe ser mayor de 18 años para registrarse.");
    }
    const result = yield data_source_1.AppDataSource.transaction((entityManager) => __awaiter(void 0, void 0, void 0, function* () {
        const credentialId = yield (0, credentialService_1.createCredentialService)(entityManager, userData.username, userData.password);
        const newUser = entityManager.create(UserEntity_1.User, Object.assign(Object.assign({}, userData), { credential: { id: credentialId } }));
        yield entityManager.save(newUser);
        return newUser;
    }));
    return {
        message: "Usuario creado con exito",
        newUser: result
    };
});
exports.registerUserService = registerUserService;
const getAllUsersService = () => __awaiter(void 0, void 0, void 0, function* () {
    const users = yield UserRepository_1.default.find({
        select: ["id", "name", "email", "birthdate"],
        relations: ["credential"]
    });
    return users;
});
exports.getAllUsersService = getAllUsersService;
const getUserByIdService = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const user = yield UserRepository_1.default.findOne({
        where: { id },
        relations: ["appointments"]
    });
    if (!user) {
        throw new CustomErrorUtil_1.CustomError(404, `Usuario con id: ${id} no encontrado`);
    }
    return user;
});
exports.getUserByIdService = getUserByIdService;
const loginUserService = (user) => __awaiter(void 0, void 0, void 0, function* () {
    var _a, _b, _c, _d, _e;
    const idUserLogged = yield (0, credentialService_1.checkUserCredential)(user.username, user.password);
    const userFound = yield UserRepository_1.default.findOne({
        where: {
            credential: { id: idUserLogged }
        }
    });
    return {
        id: (_a = userFound === null || userFound === void 0 ? void 0 : userFound.id) !== null && _a !== void 0 ? _a : 0,
        name: (_b = userFound === null || userFound === void 0 ? void 0 : userFound.name) !== null && _b !== void 0 ? _b : "",
        email: (_c = userFound === null || userFound === void 0 ? void 0 : userFound.email) !== null && _c !== void 0 ? _c : "",
        birthdate: (_d = userFound === null || userFound === void 0 ? void 0 : userFound.birthdate) !== null && _d !== void 0 ? _d : new Date,
        nDni: (_e = userFound === null || userFound === void 0 ? void 0 : userFound.nDni) !== null && _e !== void 0 ? _e : 0
    };
});
exports.loginUserService = loginUserService;
