import express from 'express'
import { createMission, getAllMissions, updateMission, deleteMission } from '../controllers/missionsController'

export const missionRouter = express.Router()

missionRouter.post('/mission/:userId', createMission)
missionRouter.get('/missions', getAllMissions)
missionRouter.put('/mission/:id/:userId/:isAdminTrue', updateMission)
missionRouter.delete('/mission/:id/:userId//:isAdminTrue', deleteMission)