import express from 'express'
const app = express()
import fs from 'fs'
import path from 'path'
import { ConnectDatabase } from './config/db'

import morgan from 'morgan'
import dotenv from 'dotenv'

if (process.env.NODE_ENV !== 'production') {
    app.use(morgan('dev'))
    dotenv.config({ path: './config/config.env' })

}


const url = process.env.MONGO_DB_URL
ConnectDatabase(url)



const Routers = fs.readdirSync(path.join(__dirname, 'routers'))
Routers.forEach((route) => {
    app.use('/api', require(`./routers/${route}`))
})


export default app