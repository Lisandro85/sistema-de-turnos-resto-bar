import "dotenv/config";

export const PORT:number=process.env.PORT?parseInt(process.env.PORT,10):3000;
export const DB_TYPE: string|undefined= process.env.DB_TYPE;
export const DB_HOST: string|undefined=process.env.DB_HOST;
export const DB_PORT: number=process.env.DB_PORT 
?parseInt(process.env.DB_PORT,10)
:5432;
export const DB_USER:string|undefined= process.env.DB_USER;
export const DB_PASSWORD:string|undefined= process.env.DB_PASSWORD;
export const DB_NAME:string|undefined= process.env.DB_NAME;
export const DB_SYNC:boolean= process.env.DB_SYNC
?process.env.DB_SYNC==="true"
:true;
export const DB_LOGGING:boolean= process.env.DB_LOGGING
?process.env.DB_LOGGING==="true"
:true