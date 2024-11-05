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
exports.createCredentialService = exports.checkUserCredential = void 0;
const bcrypt_1 = __importDefault(require("bcrypt"));
const CustomErrorUtil_1 = require("../Utils/CustomErrorUtil");
const CredentialRepository_1 = __importDefault(require("../Repositories/CredentialRepository"));
const CredentialEntity_1 = require("../entities/CredentialEntity");
const hashPasword = (password) => __awaiter(void 0, void 0, void 0, function* () {
    const saltRound = 10;
    const salt = yield bcrypt_1.default.genSalt(saltRound);
    return yield bcrypt_1.default.hash(password, salt);
});
const checkUserCredential = (username, password) => __awaiter(void 0, void 0, void 0, function* () {
    const credentialFound = yield CredentialRepository_1.default.findOne({ where: { username } });
    if (!credentialFound) {
        throw new CustomErrorUtil_1.CustomError(400, `El usuario o la contraseña son incorrectos`);
    }
    const result = yield bcrypt_1.default.compare(password, credentialFound.password);
    if (!result) {
        throw new CustomErrorUtil_1.CustomError(400, `El usuario o la contraseña son incorrectos`);
    }
    return credentialFound.id;
});
exports.checkUserCredential = checkUserCredential;
const createCredentialService = (entityManager, username, password) => __awaiter(void 0, void 0, void 0, function* () {
    const credentialExist = yield CredentialRepository_1.default.findOne({
        where: { username }
    });
    if (credentialExist) {
        throw new CustomErrorUtil_1.CustomError(400, `El nombre de usuario: ${username} ya existe, intente con otro`);
    }
    const passwordHash = yield hashPasword(password);
    const newCredential = entityManager.create(CredentialEntity_1.Credential, { username, password: passwordHash });
    yield entityManager.save(newCredential);
    return newCredential.id;
});
exports.createCredentialService = createCredentialService;
