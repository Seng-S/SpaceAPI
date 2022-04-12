import {Request, Response} from 'express'
import { parse } from 'path'
import { Rover } from '../domain/rovers'

let rovers : Rover[] = [
    {id: 1, name: 'joe', launch_date: '12-07-2022', construction_date: '12-07-2015', constructor: 'joe', image: "img src"},
    {id: 2, name: 'john', launch_date: '12-07-2022', construction_date: '12-07-2015', constructor: 'joe', image: "img src"},
    {id: 3, name: 'jack', launch_date: '12-07-2022', construction_date: '12-07-2015', constructor: 'joe', image: "img src"},
    {id: 3, name: 'johnny', launch_date: '12-07-2022', construction_date: '12-07-2015', constructor: 'joe', image: "img src"},
]

export function createRover(req: Request, res: Response) {
    const { isAdminTrue } = req.params

    if (isAdminTrue == "true") {
        const { name, launch_date, construction_date, constructor, image } = req.body
        const rover : Rover = {
            id: rovers.length + 1 , name, launch_date, construction_date, constructor, image
        }

        rovers.push(rover)

        res.status(200).send('new rover added')
    }

    else {
        return res.status(401).send('permission to create rover is denied')
    }

}

export function getRoverByLaunchDate(req: Request, res: Response) {
    const { searchDate } = req.params
    
    rovers = rovers.filter( rover => {
        return rover.launch_date == searchDate
    })
    console.log( { rovers } )

    res.status(200).json(rovers)
}

export function getRoverByName(req: Request, res: Response) {
    const { searchRoverName } = req.params

    rovers = rovers.filter( rover => {
        return rover.name == searchRoverName
    })
    console.log( { rovers } )

    res.status(200).json(rovers)

}


export function updateRover(req: Request, res: Response) {
    const { id, isAdminTrue } = req.params
    const { name, launch_date, construction_date, constructor, image } = req.body

    if (isAdminTrue == "true") {
        console.log( "trying to update rover with id: ", id, "with the following data: " )

        rovers = rovers.map( rover => {
            //check if the id inputed is == the id of the element in the list
            if (rover.id == parseInt(id)) {
                rover.name = name
                rover.launch_date = launch_date
                rover.construction_date = construction_date
                rover.constructor = constructor
                rover.image = image
            }
            return rover
        })

        console.log( { name, launch_date, construction_date, constructor, image } )

        return res.status(200).send('update rover success')

    }
    else {
        return res.status(401).send('permission to update rover is denied')
    }

}

export function deleteRover(req: Request, res: Response) {
    const { id, isAdminTrue } = req.params

    console.log( "trying to delete rover with id: ", id )

    if (isAdminTrue == "true") {
        rovers = rovers.filter( rover => {
            return rover.id != parseInt(id)
        })
        console.log( { rovers } )
    
        res.status(200).send('delete rover success')
    }
    else {
        return res.status(401).send('permission to delete rover is denied')
    }
    
}