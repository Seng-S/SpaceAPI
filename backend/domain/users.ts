export interface User {
    id: number,
    email: string,
    pseudo: string,
    password?: string,
    isAdmin: boolean,
}