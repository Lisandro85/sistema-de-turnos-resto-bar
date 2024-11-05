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
const data_source_1 = require("../config/data-source");
const AppointmentEntity_1 = require("../entities/AppointmentEntity");
const moment_1 = __importDefault(require("moment"));
const CustomErrorUtil_1 = require("../Utils/CustomErrorUtil");
const AppointmentRepository = data_source_1.AppDataSource.getRepository(AppointmentEntity_1.Appointment).extend({
    validateExistingAppointment: function (userId, date, time) {
        return __awaiter(this, void 0, void 0, function* () {
            const appointmentFound = yield this.findOne({
                where: { user: { id: userId }, date: date, time: time }
            });
            if (appointmentFound)
                throw Error(`El turno con fecha: ${date} y hora: ${time}
    ya existe para el usuario con id: ${userId}`);
        });
    },
    validarDisponibilidad: function (date, time) {
        return __awaiter(this, void 0, void 0, function* () {
            const fechaYHora = (0, moment_1.default)(`${(0, moment_1.default)(date).format('YYYY-MM-DD')} ${time}`, 'YYYY-MM-DD HH:mm');
            const dayOfWeek = fechaYHora.day();
            const hour = fechaYHora.hour();
            if (dayOfWeek === 0 || dayOfWeek === 1 || dayOfWeek === 2) {
                throw new CustomErrorUtil_1.CustomError(400, 'No se pueden agendar turnos los domingos, lunes o martes.');
            }
            if (hour < 19 || hour >= 22) {
                throw new CustomErrorUtil_1.CustomError(400, 'Los turnos solo pueden ser agendados entre las 19:00 y las 22:00.');
            }
            const ahora = (0, moment_1.default)();
            if (fechaYHora.isBefore(ahora)) {
                throw new CustomErrorUtil_1.CustomError(400, 'No se pueden agendar turnos en fechas pasadas.');
            }
            const diferenciaHoras = fechaYHora.diff(ahora, 'hours');
            if (diferenciaHoras < 24) {
                throw new CustomErrorUtil_1.CustomError(400, 'No se pueden agendar turnos con menos de 24 horas de anticipación.');
            }
            const diferenciaDias = fechaYHora.diff(ahora, 'days');
            if (diferenciaDias > 15) {
                throw new CustomErrorUtil_1.CustomError(400, 'No se pueden agendar turnos con más de 15 días de anticipación.');
            }
            return { valido: true, mensaje: 'Turno disponible para agendar.' };
        });
    },
});
exports.default = AppointmentRepository;
