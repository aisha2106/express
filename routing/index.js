import express, { urlencoded } from 'express'
import studentRoutes from './routes/studentroute.js'
import userRoute from './routes/userRoute.js'

const app = express()
app.use(express.urlencoded({ extended: true }));

const port = 3000;

app.get('/', (req, res) => {
    res.send('welcome to school portal')
})

app.use('/student', studentRoutes)
app.use('/user', userRoute)

app.listen(port, ()=> {
    console.log( `server is listening at http://localhost:${port}`)
})