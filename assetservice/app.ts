import express from 'express'
import helmet from 'helmet'
import cors from 'cors'

import { options } from './utils/cors-option'


const app = express()
app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(helmet())
app.use(cors(options))

export {app} 