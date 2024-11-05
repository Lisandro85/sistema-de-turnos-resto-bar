"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const morgan_1 = __importDefault(require("morgan"));
const indexRouter_1 = __importDefault(require("./routes/indexRouter"));
const cors_1 = __importDefault(require("cors"));
const server = (0, express_1.default)();
server.use(express_1.default.json());
server.use((0, morgan_1.default)("dev"));
server.use((0, cors_1.default)());
server.use(indexRouter_1.default);
server.use((error, req, res, next) => {
    if (false)
        next();
    const err = error;
    const errorMessage = {
        message: "Error",
        details: error instanceof Error ? err.detail ? err.detail : error.message : "Error desconocido"
    };
    if (err.code === 400) {
        res.status(400).json(errorMessage);
    }
    else if (err.code === 404) {
        res.status(404).json({ message: "Recurso no encontrado", details: errorMessage.details });
    }
    else {
        res.status(500).json(errorMessage);
    }
});
exports.default = server;
