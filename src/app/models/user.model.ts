export interface UserI{
    id?: string;
    email: string;
    password: string;
    role: string;
    isLogged?:boolean;
}