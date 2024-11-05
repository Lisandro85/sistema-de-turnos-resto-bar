import { Request, Response } from "express";
import { loginUserService, registerUserService } from "../service/userService";
import { getAllUsersService } from "../service/userService";
import { getUserByIdService } from "../service/userService"; 
import { IUserDTO, UserLoginDTO, UserRegisterDTO } from "../dto/UsersDTO";
import { User } from "../entities/UserEntity";
import { catchingErrors } from "../Utils/catchingErrors";




 const registerUserController=async(req:Request<unknown,unknown,UserRegisterDTO>,res:Response)=>{
        const result=await registerUserService(req.body)
        res.status(201).json({
            message:"Usuario registrado con exito",
            detail:result});
};



 const getUserByIdController=async(req:Request,res:Response)=>{
    const {id}=req.params
    const result:User|null= await getUserByIdService(parseInt(id));
    res.status(200).json({
         message: "Obtener usuario por id",
        data:result
     });
}; 



 const getAllUsersController=async(req:Request, res:Response)=>{
        const result:User[]=await getAllUsersService();
        res.status(200).json({
            message:"Obtener todos los usuarios",
            data:result
        });        
};




 const loginUserController=async(req:Request<unknown,unknown,UserLoginDTO>,res:Response):Promise<void>=>{ 
     const result:IUserDTO=await loginUserService(req.body)  
     res.status(200).json({
         message:"Login del usuario a la aplicacion",
         data:{result}
        }); 
};
     
const usersControllers={
    registerUserController:catchingErrors(registerUserController),
    getUserByIdController:catchingErrors(getUserByIdController),
    getAllUsersController:catchingErrors(getAllUsersController),
    loginUserController:catchingErrors(loginUserController)
}
export default usersControllers;