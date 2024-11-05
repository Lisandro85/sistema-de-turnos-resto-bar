import { Request,Response } from "express";
import { AppointmentRegisterDTO } from "../dto/AppointmentDTO";
import { registerAppointmentService } from "../service/appointmentService";
import { getAppointmentByIdservice,cancelAppointmentByIdService,getAllApointmentService,} from "../service/appointmentService";
import { Appointment } from "../entities/AppointmentEntity";
import { catchingErrors } from "../Utils/catchingErrors";



const registerAppointmentController=async(req: Request<unknown,unknown,AppointmentRegisterDTO>,res: Response):Promise<void>=>{
    const appointmentData:AppointmentRegisterDTO=req.body;
        const appointment:Appointment =await registerAppointmentService(appointmentData)
        res.status(201).json({
             message: "Turno agendado con exito",
             data:appointment
    }); 
};  



const getAppointmentByIdController=async(req:Request<{id:string}>,res:Response):Promise<void>=>{
const {id}=req.params;
    const result:Appointment|null= await getAppointmentByIdservice(parseInt(id));
     res.status(200).json({
         message:"Obtener el detalle de un turno específico",
         data:result
    });
};


const getAllAppointmentsController=async(req:Request, res:Response):Promise<void>=>{
      const result:Appointment[]= await getAllApointmentService();
            res.status(200).json({
                 message:"Obtener el listado de todos los turnos",
                 data:result
        });
};



const cancelAppointmentByIdController=async(req:Request<{id:string}>,res:Response)=>{
        const id=parseInt(req.params.id);
        const result:Appointment|null = await cancelAppointmentByIdService(id)
        res.status(200).json({
            message: "Se cancelo el Turno con exito",
            data:result
        });
};

const appointmentsControllers={
    registerAppointmentController:catchingErrors(registerAppointmentController),
    getAppointmentByIdController:catchingErrors(getAppointmentByIdController),
    getAllAppointmentsController:catchingErrors(getAllAppointmentsController),
    cancelAppointmentByIdController:catchingErrors(cancelAppointmentByIdController)
}

export default appointmentsControllers;
