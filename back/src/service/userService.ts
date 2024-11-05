import {IUserDTO, UserLoginDTO} from "../dto/UsersDTO";
import { createCredentialService,checkUserCredential } from "./credentialService";
import { User } from "../entities/UserEntity";
import{CustomError} from "../Utils/CustomErrorUtil";
import UserRepository from "../Repositories/UserRepository";
import { AppDataSource } from "../config/data-source";
import { UserRegisterDTO } from "../dto/UsersDTO";
import menorDeEdad from "../Utils/menorDeEdad";

export const registerUserService=async(userData:UserRegisterDTO):Promise<{message:string,newUser:User}>=>{
    
    if (!menorDeEdad(userData.birthdate)) {
        throw new CustomError(400,"El usuario debe ser mayor de 18 años para registrarse.");
    }
    const result=await AppDataSource.transaction(async(entityManager)=>{
        const credentialId=await createCredentialService(entityManager,userData.username,userData.password)
        const newUser=entityManager.create(User,{
         ...userData,
        credential:{id:credentialId},
    })
    await entityManager.save(newUser)
    return newUser    
 }); 
 return {
    message:"Usuario creado con exito",
    newUser:result
 }      
}


export const getAllUsersService=async():Promise<User[]>=>{ 
    const users=await UserRepository.find({
        select:["id","name","email","birthdate"],
        relations:["credential"]
    });
    return users;
}; 
 


export const getUserByIdService= async(id:number):Promise<User|null>=>{
    const user=await UserRepository.findOne({
        where:{id},
        relations: ["appointments"]
    });
    if(!user){
        throw new CustomError(404, `Usuario con id: ${id} no encontrado`)
    }
    return user;
 
}



export const loginUserService=async(user:UserLoginDTO):Promise<IUserDTO>=>{

  const idUserLogged:number=await checkUserCredential(user.username,user.password)

  const userFound=await UserRepository.findOne({
    where:{
        credential:{id:idUserLogged}    
    }
  })
  return {
    id:userFound?.id??0,
    name:userFound?.name??"",
    email:userFound?.email??"",
    birthdate:userFound?.birthdate?? new Date,
    nDni:userFound?.nDni??0
  }
}