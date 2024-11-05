import { Column, Entity, PrimaryGeneratedColumn } from "typeorm"
import { CreateDateColumn,UpdateDateColumn } from "typeorm"

@Entity({
    name:"credentials"
})
export  class Credential{
    @PrimaryGeneratedColumn()
    id:number
    @Column({nullable:false})
    username:string
    @Column({nullable:false})
    password:string
    
    @CreateDateColumn()
    createdAt?:Date
    
    @UpdateDateColumn()
    updateAt?:Date
 }