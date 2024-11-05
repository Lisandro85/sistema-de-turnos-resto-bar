import bcrypt from "bcrypt";
import { CustomError } from "../Utils/CustomErrorUtil";
import CredentialRepository from "../Repositories/CredentialRepository";
import { EntityManager } from "typeorm";
import { Credential } from "../entities/CredentialEntity";



const hashPasword = async (password: string): Promise<string> => {
    const saltRound = 10; 
    const salt = await bcrypt.genSalt(saltRound); 
    return await bcrypt.hash(password, salt); 
};



export const checkUserCredential = async (username: string,password:string):Promise<number> => {
    const credentialFound = await CredentialRepository.findOne({ where: { username } });
    
    if (!credentialFound) {
         throw new CustomError(400,`El usuario o la contraseña son incorrectos`);
    }
    
    const result = await bcrypt.compare(password, credentialFound.password);
    
    if (!result) {
         throw new CustomError(400,`El usuario o la contraseña son incorrectos`);
    }
    return credentialFound.id;
    
}; 


export const    createCredentialService = async (entityManager:EntityManager,username: string, password: string): Promise<number> => {
    const credentialExist=await CredentialRepository.findOne({
        where:{username}
    });
    if(credentialExist){
        throw new CustomError(400,`El nombre de usuario: ${username} ya existe, intente con otro`)
    }
    const passwordHash=await hashPasword(password);
    const newCredential = entityManager.create(Credential,{ username, password:passwordHash });
    await entityManager.save(newCredential);
    return newCredential.id;
};


    
    
