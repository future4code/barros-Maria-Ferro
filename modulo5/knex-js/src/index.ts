import express from 'express'
import cors from 'cors'
import connection from './database/connection'

const app = express()
app.use(express.json())
app.use(cors())

