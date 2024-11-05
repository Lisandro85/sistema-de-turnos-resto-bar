import { Status} from "../interfaces/IAppointment";
import { Appointment } from "../entities/AppointmentEntity";
import { AppointmentRegisterDTO } from "../dto/AppointmentDTO";
import { CustomError } from "../Utils/CustomErrorUtil";
import AppointmentRepository from "../Repositories/AppointmentRepository";
import { getUserByIdService } from "./userService";



export const registerAppointmentService= async(appointmentData:AppointmentRegisterDTO):Promise<Appointment>=>{
    await getUserByIdService(appointmentData.userId)
   
    await AppointmentRepository.validarDisponibilidad(appointmentData.date,appointmentData.time)
    await AppointmentRepository.validateExistingAppointment(appointmentData.userId,appointmentData.date,appointmentData.time)
    
    const newAappointment:Appointment= AppointmentRepository.create({
    date:appointmentData.date,
    time:appointmentData.time,	
    user:{id:appointmentData.userId}
})
return await AppointmentRepository.save(newAappointment); 
};
 

export const getAllApointmentService=async():Promise<Appointment[]>=>{
   const appointments=await AppointmentRepository.find()
   return appointments
 };



export const getAppointmentByIdservice=async(id:number):Promise<Appointment|null>=>{
    const appointment=await AppointmentRepository.findOneBy({id});
    if(!appointment){
        throw new CustomError(404,`El turno con id: ${id} no fue encontrado`)
    }
    return appointment; 
};


export const cancelAppointmentByIdService=async(id:number):Promise<Appointment|null>=>{
    const appointment=await AppointmentRepository.findOneBy({id})
    if(!appointment){
        throw new CustomError(400,`El turno con id: ${id} no fue encontrado`)
    }
    appointment.status=Status.cancel
    await AppointmentRepository.save(appointment)
    return appointment
};
