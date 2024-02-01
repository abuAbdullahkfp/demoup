import express, {Request, Response} from 'express'
import { options } from './utils/cors-option'
import helmet from 'helmet'
import cors from 'cors'
import axios from 'axios'


const app = express()

app.use(express.json())
app.use(helmet())
app.use(cors(options))

app.post("/events", async (req: Request, res: Response) => {
  const {event} = req.body
  await axios.post("http://categoryservice:3001/api/v1/events", event)
  await axios.post("http://retrieveimageservice:3002/api/v1/events", event)
  res.send({status: "OK"})
})

app.listen(3005, () => {
    console.log('event-bus listening on port 3005')
})

export {app}