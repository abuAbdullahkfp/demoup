import {Router} from 'express'
import axios, { AxiosResponse } from 'axios'

const router = Router()

router.post('/events', async(req, res) => {
    const eventFeed: AxiosResponse = await axios.get(`http://localhost:3002/api/v1/get-image/${req.body.data.imageId}`)
    console.log(eventFeed.status)
    return res.send(eventFeed.data)
})

export {router as eventRouter} 