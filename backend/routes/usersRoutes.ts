import express from 'express'
import { createUser, getUserById, getAllUsers, updateUser, deleteUser } from '../controllers/userController'

export const userRouter = express.Router()

userRouter.post('/user', createUser)
userRouter.get('/users', getAllUsers)
userRouter.get('/user/:searchUserId', getUserById)
userRouter.put('/user/:id/:otherUserId/:isAdminTrue', updateUser)
userRouter.delete('/user/:id', deleteUser)