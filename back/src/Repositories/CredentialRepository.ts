import { AppDataSource } from "../config/data-source";
import { Credential } from "../entities/CredentialEntity";

const CredentialRepository=AppDataSource.getRepository(Credential)

export default CredentialRepository;