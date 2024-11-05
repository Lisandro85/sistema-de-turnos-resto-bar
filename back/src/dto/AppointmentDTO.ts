export interface AppointmentRegisterDTO{
    date:Date,
    time:string,
    status:Status,
    userId:number
}

export enum Status{
    active="active",
    cancel="cancelled"
}