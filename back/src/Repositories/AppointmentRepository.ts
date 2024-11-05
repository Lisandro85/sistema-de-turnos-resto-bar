import { AppDataSource } from "../config/data-source";
import { Appointment } from "../entities/AppointmentEntity";
import moment from "moment";
import { CustomError } from "../Utils/CustomErrorUtil";


const AppointmentRepository=AppDataSource.getRepository(Appointment).extend({ 
   
validateExistingAppointment:async function(userId:number,date:Date,time:string):Promise<void>{
    const appointmentFound=await this.findOne({
    where:{user:{id:userId},date:date,time:time}})
    if(appointmentFound) throw Error(`El turno con fecha: ${date} y hora: ${time}
    ya existe para el usuario con id: ${userId}`);
},
    
validarDisponibilidad:async function(date: Date, time: string){

    const fechaYHora = moment(`${moment(date).format('YYYY-MM-DD')} ${time}`, 'YYYY-MM-DD HH:mm');
    const dayOfWeek = fechaYHora.day();
    const hour = fechaYHora.hour();

    if (dayOfWeek === 0 || dayOfWeek === 1 || dayOfWeek === 2) {
     throw new CustomError(400,'No se pueden agendar turnos los domingos, lunes o martes.');
 }

    if (hour < 19 || hour >= 22) {
     throw new CustomError(400,'Los turnos solo pueden ser agendados entre las 19:00 y las 22:00.');
 }
  
     const ahora = moment();
     if (fechaYHora.isBefore(ahora)) {
     throw new CustomError(400, 'No se pueden agendar turnos en fechas pasadas.');

}

    const diferenciaHoras = fechaYHora.diff(ahora, 'hours');
    if (diferenciaHoras < 24) {
     throw new CustomError(400,'No se pueden agendar turnos con menos de 24 horas de anticipación.');
 }

    const diferenciaDias = fechaYHora.diff(ahora, 'days');
    if (diferenciaDias > 15) {
     throw new CustomError(400,'No se pueden agendar turnos con más de 15 días de anticipación.');
 }

 return { valido: true, mensaje: 'Turno disponible para agendar.' };

},

});
 
export default AppointmentRepository;