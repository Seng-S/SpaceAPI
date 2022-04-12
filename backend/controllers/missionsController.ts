import {Request, Response} from 'express'
import { parse } from 'path'
import { json } from 'stream/consumers'
import { Mission } from '../domain/missions'

let missions : Mission[] = [
    {id: 1, user_id: 1, country: "france", start_date: "12-07-2020", end_date: "12-12-2020", rovers: [1, 2]},
    {id: 2, user_id: 2, country: "france", start_date: "12-07-2020", end_date: "12-12-2020", rovers: [3]},
    {id: 3, user_id: 2, country: "france", start_date: "12-07-2020", end_date: "12-12-2020", rovers: [4]}
]

export function createMission(req: Request, res: Response) {
    const { user_id } = req.params
    const { country, start_date, end_date, rovers } = req.body

    const mission : Mission = {
        id: missions.length + 1 , user_id: parseInt(user_id) ,country, start_date, end_date, rovers: JSON.parse(rovers)
    }

    missions.push(mission)

    res.status(200).send('new rover added')
}

export function getAllMissions(req: Request, res: Response) {
    const allMissions = missions.map( (mission) => {
        return {
            id: mission.id,
            country: mission.country,
            start_date: mission.start_date,
            end_date: mission.end_date,
            rovers:  mission.rovers
        }
    }) 
    
    res.status(200).send(allMissions)
}

export function updateMission(req: Request, res: Response) {
    const { id, userId, isAdminTrue,} = req.params
    const { country, start_date, end_date, rovers } = req.body
        
    console.log( "trying to update user with id: ", id, "with the following data: " )

    try { 
        missions = missions.map( mission => {
            if (mission.id == parseInt(id) && (mission.user_id == parseInt(userId) || isAdminTrue == "true")) {
                mission.country = country,
                mission.start_date = start_date,
                mission.end_date = end_date,
                mission.rovers = rovers
            }
            return mission
        })
        console.log( { country, start_date, end_date, rovers } )

        return res.status(200).send('update mission success')

    }
    catch {
        return res.status(401).send('permission to update mission is denied')
    }

}

export function deleteMission(req: Request, res: Response) {
    const { id, UserId, isAdminTrue } = req.params

    console.log( "trying to delete mission with id: ", id )

    try {
        missions = missions.filter( mission => {
            return mission.id != parseInt(id)  && (mission.user_id == parseInt(UserId) || isAdminTrue == "true")

        })
        console.log( { missions } )
    
        res.status(200).send('delete mission success')
    }
    catch {
        return res.status(401).send('permission to delete mission is denied')
    }
    
}