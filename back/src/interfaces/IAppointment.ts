export  interface IAppointment{
    id:number,
    date:Date,
    time:Date,
    status:Status,
    userId:number
};

export enum Status{
    active="active",
    cancel="cancelled"
}