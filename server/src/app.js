import express from 'express'
const app = express()
import fs from 'fs'
import cors from 'cors'
import path from 'path'
import bodyParser from 'body-parser'


import { ConnectDatabase } from '../config/db'
import morgan from 'morgan'
import dotenv from 'dotenv'
import { handleError } from './helpers/errHandle'



if (process.env.NODE_ENV !== 'production') {
    app.use(morgan('dev'))
    dotenv.config({ path: './config/config.env' })
}

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))


// database connection
const url = process.env.MONGO_DB_URL
ConnectDatabase(url)

app.use(cors(process.env.CLIENT_URL))


// root api router

const Routers = fs.readdirSync(path.join(__dirname, 'routers'))
Routers.forEach((route) => {
    app.use('/api', require(`./routers/${route}`).default)
})


// error handlers
app.use(handleError)

app.all('*', (req, res) => {
    return res.json({ error: 'Page not found ' })
})



export default app