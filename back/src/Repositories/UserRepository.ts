import { AppDataSource } from "../config/data-source";
import { User } from "../entities/UserEntity";

const UserRepository=AppDataSource.getRepository(User)

export default UserRepository;