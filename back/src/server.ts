import express, { Application, NextFunction,Response,Request } from "express";
import morgan from "morgan";
import indexRouter from "./routes/indexRouter";
import cors from "cors";
import { CustomErrorInterface, ErrorResponse } from "./interfaces/ErrorResponse";

const server: Application= express();


server.use(express.json());
server.use(morgan("dev"));
server.use(cors());
server.use(indexRouter);

server.use((error:unknown,req:Request,res:Response,next:NextFunction)=>{
    if(false)next()
    const err = error as CustomErrorInterface
    const errorMessage:ErrorResponse = {
        message: "Error",
        details: error instanceof Error ? err.detail? err.detail: error.message:"Error desconocido"
    };
    if(err.code===400){
        res.status(400).json(errorMessage)
    }else if(err.code === 404){
        res.status(404).json({ message: "Recurso no encontrado", details: errorMessage.details })
    }else{
        res.status(500).json(errorMessage);
    }
    

})

export default server;