import express from 'express'
const app = express()
import fs from 'fs'
import path from 'path'
import { ConnectDatabase } from './config/db'

import morgan from 'morgan'
import env from 'env'

app.use(morgan('dev'))



const url = process.env.MONGO_DB_URL
ConnectDatabase(url)

const Routers = fs.readdirSync(path.join(__dirname, 'routers'))
Routers.forEach((route) => {
    app.use('/api', require(`./routers/${route}`))
})


export default app