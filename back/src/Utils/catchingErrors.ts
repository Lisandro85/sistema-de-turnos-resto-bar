import {Request, Response, NextFunction } from "express"

export const catchingErrors=<Param,ResBody,ReqBody>(controller:(req:Request<Param,ResBody,ReqBody>,
    res:Response<ResBody>,next:NextFunction)
=>Promise<void>)=>{

    return function(req:Request<Param,ResBody,ReqBody>,res:Response<ResBody>,next:NextFunction){
        controller(req,res,next).catch((error)=>next(error))
    }
}