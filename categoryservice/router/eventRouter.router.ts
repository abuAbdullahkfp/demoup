import {Router} from 'express'
import axios, { AxiosResponse } from 'axios'

const router = Router()

router.post('/events', async(req, res) => {
    const eventFeed: AxiosResponse = await axios.post("http://localhost:3001/api/v1/insert-categories", {
        imageId: req.body.data.imageId,
        categories: req.body.data.categories
    })
    console.log(eventFeed.status)
    return res.send(eventFeed.data)
})

export {router as eventRouter}