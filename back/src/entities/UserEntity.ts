import { Column, CreateDateColumn, Entity, JoinColumn, OneToMany, OneToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm"
import { Credential } from "./CredentialEntity"
import { Appointment } from "./AppointmentEntity"

@Entity({
    name: "users"
})
export class User{
    @PrimaryGeneratedColumn()
    id:number
   
    @Column({type:"varchar",length:100,nullable:false})
    name:string
    @Column({type:"varchar",length:100,nullable:false,unique:true})
    email:string
    @Column({type:"date",nullable:false})
    birthdate:Date
    @Column({type:"integer",nullable:false,unique:true})
    nDni:number

    @OneToOne(()=>Credential,{cascade:true})
    @JoinColumn()
    credential:Credential

    @OneToMany(()=>Appointment,(appointment)=>appointment.user,{nullable:false})
    appointments:Appointment[]

    @CreateDateColumn()
    createdAt?:Date
    
    @UpdateDateColumn()
    updateAt?:Date
}



