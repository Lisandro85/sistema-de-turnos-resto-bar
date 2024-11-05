
import { NextFunction, Request, Response, Router } from "express";
import { AppointmentRegisterDTO } from "../dto/AppointmentDTO";
import appointmentsControllers from "../controllers/appointmentController";

const appointmentRouter:Router = Router();

appointmentRouter.get("/",(req:Request,res:Response,next:NextFunction)=>appointmentsControllers.getAllAppointmentsController(req,res,next));

appointmentRouter.get("/:id",(req:Request<{id:string}>,res:Response,next:NextFunction)=>appointmentsControllers.getAppointmentByIdController(req,res,next));

appointmentRouter.post("/schedule",(req:Request<unknown,unknown,AppointmentRegisterDTO>,res:Response,next:NextFunction)=>appointmentsControllers.registerAppointmentController(req,res,next));

appointmentRouter.put("/cancel/:id",(req:Request<{id:string}>,res:Response,next:NextFunction)=>appointmentsControllers.cancelAppointmentByIdController(req,res,next));

export default appointmentRouter;