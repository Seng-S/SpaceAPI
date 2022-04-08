import {Request, Response} from 'express'
import { User } from '../domain/users'

let users : User[] = [
    {id: 1, email: 'doc@doc.com', pseudo: 'doc', isAdmin: true},
    {id: 2, email: 'johndoe@doc.com', pseudo: 'doc', isAdmin: true},
    {id: 3, email: 'john@doe.com', pseudo: 'doc', isAdmin: true}
]

export function createUser(req: Request, res: Response) {
    const { email, password, pseudo, isAdmin } = req.body
    const user : User = {
        id: users.length + 1 , email, password, pseudo, isAdmin
    }

    users.push(user)

    res.send('new user added')
}

export function getAllUsers(req: Request, res: Response) {
    const allUsers = users.map( (user) => {
        return {
            id: user.id,
            email: user.email,
            pesudo: user.pseudo,
            isAdmin: user.isAdmin
        }
    }) 
    
    res.send(allUsers)
}

export function updateUser(req: Request, res: Response) {

}

export function updateOtherUser(req: Request, res: Response) {
    
}

export function deleteUser(req: Request, res: Response) {

}