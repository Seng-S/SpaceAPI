import express from 'express'
import { userRouter } from './routes/usersRoutes'
import { roverRouter } from './routes/roversRoutes'
import { missionRouter } from './routes/missionsRoutes'
//import { pdoRouter } from './pdo/implements/abstractPdoManager'
import { auth } from './auth/auth'
import { authenticateToken } from './auth/middleware'

const app = express()
const port = 3000

app.use(express.urlencoded( {extended: false} ))
app.use(express.json())

app.get('/', (req, res) => {
    res.send('Hello !')
})

//app.use('/auth', auth)
//app.use(authenticateToken)

app.use('/userAPI', userRouter)
app.use('/roverAPI', roverRouter)
app.use('/missionAPI', missionRouter)

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
  