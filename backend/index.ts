import express from 'express'
import { userRouter } from './routes/usersRoutes'

const app = express()
const port = 3000

app.use(express.urlencoded( {extended: false} ))
app.use(express.json())

app.get('/', (req, res) => {
    res.send('Hello !')
})

app.use('/userAPI', userRouter)

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
  