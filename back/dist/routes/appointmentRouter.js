"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const appointmentController_1 = __importDefault(require("../controllers/appointmentController"));
const appointmentRouter = (0, express_1.Router)();
appointmentRouter.get("/", (req, res, next) => appointmentController_1.default.getAllAppointmentsController(req, res, next));
appointmentRouter.get("/:id", (req, res, next) => appointmentController_1.default.getAppointmentByIdController(req, res, next));
appointmentRouter.post("/schedule", (req, res, next) => appointmentController_1.default.registerAppointmentController(req, res, next));
appointmentRouter.put("/cancel/:id", (req, res, next) => appointmentController_1.default.cancelAppointmentByIdController(req, res, next));
exports.default = appointmentRouter;
