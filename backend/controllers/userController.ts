import {Request, Response} from 'express'
import { parse } from 'path'
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

    res.status(200).send('new user added')
}

export function getUserById(req: Request, res: Response) {
    const { searchUserId } = req.params
    
    users = users.filter( user => {
        return user.id == parseInt(searchUserId)
    })
    console.log( { users } )

    res.status(200).json(users)

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
    
    res.status(200).send(allUsers)
}

export function updateUser(req: Request, res: Response) {
    const { id, isAdminTrue, otherUserId } = req.params
    const { email, password, pseudo, isAdmin } = req.body

    //checking if the id of current user is the same as otherUserId
    if (id == otherUserId || isAdminTrue == "true") {
        console.log( "trying to update user with id: ", id, "with the following data: " )

        //looping through al the user in the user array
        users = users.map( user => {
            //check if the id inputed is == the id of the element in the list
            if (user.id == parseInt(id)) {
                user.email = email
                user.password = password
                user.pseudo = pseudo
                user.isAdmin = (isAdmin == "true")
            }
            return user
        })

        console.log( { email, password, pseudo, isAdmin } )

        return res.status(200).send('update user success')
    }

    else {
        return res.status(401).send('permission to update user is denied')
    }

}

export function deleteUser(req: Request, res: Response) {
    const { id } = req.params

    console.log( "trying to delete user with id: ", id )

    users = users.filter( user => {
        return user.id != parseInt(id)
    })
    console.log( { users } )

    res.status(200).send('delete user success')
}