import { User } from '../entities/user.entity';

export interface UserResponse {
    _id?: string;
    email: string;
    name: string;
    password?: string;
    isActive: boolean;
    roles: string[]
}