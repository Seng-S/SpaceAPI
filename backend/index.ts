import express from 'express'
import { createUser, getAllUsers } from './services/userServices'

const app = express()
const port = 3000

app.use(express.urlencoded( {extended: false} ))
app.use(express.json())

app.get('/', (req, res) => {
    res.send('Hello !')
})

app.get('/users', getAllUsers)
app.post('/user', createUser)

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
  