"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const usersController_1 = __importDefault(require("../controllers/usersController"));
const usersRouter = (0, express_1.Router)();
usersRouter.post("/register", (req, res, next) => usersController_1.default.registerUserController(req, res, next));
usersRouter.get("/", (req, res, next) => usersController_1.default.getAllUsersController(req, res, next));
usersRouter.get("/:id", (req, res, next) => usersController_1.default.getUserByIdController(req, res, next));
usersRouter.post("/login", (req, res, next) => usersController_1.default.loginUserController(req, res, next));
exports.default = usersRouter;
