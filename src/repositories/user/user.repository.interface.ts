import { User } from "../../interfaces/user.interface";

export interface UserByEmailOrNickParams {
    email?: string;
    nick?: string
}
export interface IUserRepository {
    findById(userId: string): Promise<User | null> 
    findUserByEmailOrNick(args: UserByEmailOrNickParams): Promise<User | null>
    findAll(): Promise<User[]>
    deleteById(userId: string): Promise<User | null>
    updateById(userid: string, newUser: User): Promise<User | null>
    createUser(user: User): Promise<User>
}