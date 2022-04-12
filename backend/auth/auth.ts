import jwt from 'jsonwebtoken'
import express from 'express'

export const auth = express.Router()

auth.post('/createToken',(req,res)=>{
    const {key} = req.body

    const accessToken = generateAccessToken(key)

    res.json({ accessToken})

})

function generateAccessToken(key:string) {
    return jwt.sign(key, JSON.stringify("process.env.ACCESS_TOKEN_SECRET"))
}