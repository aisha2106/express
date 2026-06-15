import express from 'express'

import dotenv from 'dotenv'
import connectDB from './database/db.js'
import { getStudents } from './controllers/studentController.js'
import { createStudents } from './controllers/studentController.js'
import studentRoutes from "./routes/studentRoutes.js"
const app = express()
app.use(express.urlencoded({extended:true}))

dotenv.config();
app.use('/student', studentRoutes)
app.get('/' , (req, res) => {
    res.send({
        message: "Aisha's API is working"
    })
})

async function startServer() {
    await connectDB()
    const port = 3000
    app.listen(port, () => {
        console.log('server is listening at port 3000')
    })
}

startServer()

