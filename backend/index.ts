import express from 'express'
import { userRouter } from './routes/usersRoutes'
import { roverRouter } from './routes/roversRoutes'
import { missionRouter } from './routes/missionsRoutes'
//import { pdoRouter } from './pdo/implements/abstractPdoManager'
import { auth } from './auth/auth'
import { authenticateToken } from './auth/middleware'
//import * as swag from './documentation/swagger'
import { swaggerFile, swaggerDocument, customCss } from './apiDoc/apiDoc'
import swaggerUi from "swagger-ui-express"


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

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument, customCss))

console.log( { swaggerDocument } )

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
  