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
Object.defineProperty(exports, "__esModule", { value: true });
const userService_1 = require("../service/userService");
const userService_2 = require("../service/userService");
const userService_3 = require("../service/userService");
const catchingErrors_1 = require("../Utils/catchingErrors");
const registerUserController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield (0, userService_1.registerUserService)(req.body);
    res.status(201).json({
        message: "Usuario registrado con exito",
        detail: result
    });
});
const getUserByIdController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const result = yield (0, userService_3.getUserByIdService)(parseInt(id));
    res.status(200).json({
        message: "Obtener usuario por id",
        data: result
    });
});
const getAllUsersController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield (0, userService_2.getAllUsersService)();
    res.status(200).json({
        message: "Obtener todos los usuarios",
        data: result
    });
});
const loginUserController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield (0, userService_1.loginUserService)(req.body);
    res.status(200).json({
        message: "Login del usuario a la aplicacion",
        data: { result }
    });
});
const usersControllers = {
    registerUserController: (0, catchingErrors_1.catchingErrors)(registerUserController),
    getUserByIdController: (0, catchingErrors_1.catchingErrors)(getUserByIdController),
    getAllUsersController: (0, catchingErrors_1.catchingErrors)(getAllUsersController),
    loginUserController: (0, catchingErrors_1.catchingErrors)(loginUserController)
};
exports.default = usersControllers;
