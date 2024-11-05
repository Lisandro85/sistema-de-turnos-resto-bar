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
exports.cancelAppointmentByIdService = exports.getAppointmentByIdservice = exports.getAllApointmentService = exports.registerAppointmentService = void 0;
const IAppointment_1 = require("../interfaces/IAppointment");
const CustomErrorUtil_1 = require("../Utils/CustomErrorUtil");
const AppointmentRepository_1 = __importDefault(require("../Repositories/AppointmentRepository"));
const userService_1 = require("./userService");
const registerAppointmentService = (appointmentData) => __awaiter(void 0, void 0, void 0, function* () {
    yield (0, userService_1.getUserByIdService)(appointmentData.userId);
    yield AppointmentRepository_1.default.validarDisponibilidad(appointmentData.date, appointmentData.time);
    yield AppointmentRepository_1.default.validateExistingAppointment(appointmentData.userId, appointmentData.date, appointmentData.time);
    const newAappointment = AppointmentRepository_1.default.create({
        date: appointmentData.date,
        time: appointmentData.time,
        user: { id: appointmentData.userId }
    });
    return yield AppointmentRepository_1.default.save(newAappointment);
});
exports.registerAppointmentService = registerAppointmentService;
const getAllApointmentService = () => __awaiter(void 0, void 0, void 0, function* () {
    const appointments = yield AppointmentRepository_1.default.find();
    return appointments;
});
exports.getAllApointmentService = getAllApointmentService;
const getAppointmentByIdservice = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const appointment = yield AppointmentRepository_1.default.findOneBy({ id });
    if (!appointment) {
        throw new CustomErrorUtil_1.CustomError(404, `El turno con id: ${id} no fue encontrado`);
    }
    return appointment;
});
exports.getAppointmentByIdservice = getAppointmentByIdservice;
const cancelAppointmentByIdService = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const appointment = yield AppointmentRepository_1.default.findOneBy({ id });
    if (!appointment) {
        throw new CustomErrorUtil_1.CustomError(400, `El turno con id: ${id} no fue encontrado`);
    }
    appointment.status = IAppointment_1.Status.cancel;
    yield AppointmentRepository_1.default.save(appointment);
    return appointment;
});
exports.cancelAppointmentByIdService = cancelAppointmentByIdService;
