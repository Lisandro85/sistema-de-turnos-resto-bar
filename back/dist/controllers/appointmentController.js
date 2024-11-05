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
const appointmentService_1 = require("../service/appointmentService");
const appointmentService_2 = require("../service/appointmentService");
const catchingErrors_1 = require("../Utils/catchingErrors");
const registerAppointmentController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const appointmentData = req.body;
    const appointment = yield (0, appointmentService_1.registerAppointmentService)(appointmentData);
    res.status(201).json({
        message: "Turno agendado con exito",
        data: appointment
    });
});
const getAppointmentByIdController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const result = yield (0, appointmentService_2.getAppointmentByIdservice)(parseInt(id));
    res.status(200).json({
        message: "Obtener el detalle de un turno específico",
        data: result
    });
});
const getAllAppointmentsController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield (0, appointmentService_2.getAllApointmentService)();
    res.status(200).json({
        message: "Obtener el listado de todos los turnos",
        data: result
    });
});
const cancelAppointmentByIdController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = parseInt(req.params.id);
    const result = yield (0, appointmentService_2.cancelAppointmentByIdService)(id);
    res.status(200).json({
        message: "Se cancelo el Turno con exito",
        data: result
    });
});
const appointmentsControllers = {
    registerAppointmentController: (0, catchingErrors_1.catchingErrors)(registerAppointmentController),
    getAppointmentByIdController: (0, catchingErrors_1.catchingErrors)(getAppointmentByIdController),
    getAllAppointmentsController: (0, catchingErrors_1.catchingErrors)(getAllAppointmentsController),
    cancelAppointmentByIdController: (0, catchingErrors_1.catchingErrors)(cancelAppointmentByIdController)
};
exports.default = appointmentsControllers;
