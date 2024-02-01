import "dotenv/config"

import {app} from "./app"
import { PortConst } from './constant/port-const'
import { connectDb } from "./db/mongodb"

const PORT: string = process.env.PORT || PortConst.PORT
const dbUrl: string = process.env.DB_URL!

const start = async () => {
    try {
        await connectDb(dbUrl)
        app.listen(PORT, () => console.log(`Service listening on port ${PORT} ${dbUrl}`))
    } catch(error) {
        console.warn(`Error while starting the service on PORT ${PORT}`, error)
    }
}

start()
