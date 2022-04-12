import express from 'express'
import { createRover, getRoverByLaunchDate, getRoverByName, updateRover, deleteRover } from '../controllers/roverController'

export const roverRouter = express.Router()

roverRouter.post('/rover/:isAdminTrue', createRover)
roverRouter.get('/rovers/date/:searchDate', getRoverByLaunchDate)
roverRouter.get('/rovers/name/:searchRoverName', getRoverByName)
roverRouter.put('/rovers/:id/:isAdminTrue', updateRover)
roverRouter.delete('/rover/:id/:isAdminTrue', deleteRover)
