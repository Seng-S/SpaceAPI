import express from 'express'
import { createUser, getAllUsers, updateUser, deleteUser } from '../controllers/userController'

export const userRouter = express.Router()

userRouter.get('/users', getAllUsers)
userRouter.post('/user', createUser)
userRouter.put('/user/:id/:isAdmin/:otherUserId', updateUser)
userRouter.delete('/user/:id', deleteUser)