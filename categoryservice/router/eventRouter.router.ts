import {Router} from 'express'

const router = Router()

router.post('/events', async(req, res) => {
    console.log('comment service got event from', req.body.type)
    return res.send({ok : "ok"})
})

export {router as eventRouter}