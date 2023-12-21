import { IsNotEmpty, IsString } from "class-validator";

export interface IUser extends Document{
    name: string;
    username: string;
    email: string;
    password: string;
}