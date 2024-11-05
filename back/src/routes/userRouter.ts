import { NextFunction, Request, Response, Router } from "express";
import { UserLoginDTO, UserRegisterDTO } from "../dto/UsersDTO";
import usersControllers from "../controllers/usersController";

const usersRouter: Router=Router();

usersRouter.post("/register",(req:Request<unknown,unknown,UserRegisterDTO>,res:Response,next:NextFunction)=>usersControllers.registerUserController(req,res,next));

usersRouter.get("/",(req:Request,res:Response,next:NextFunction)=>usersControllers.getAllUsersController(req,res,next));

usersRouter.get("/:id",(req:Request<{id:string}>,res:Response,next:NextFunction)=>usersControllers.getUserByIdController(req,res,next));

usersRouter.post("/login",(req:Request<unknown,unknown,UserLoginDTO>,res:Response,next:NextFunction)=>usersControllers.loginUserController(req,res,next)); 

export default usersRouter;
