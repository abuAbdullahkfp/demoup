import {app} from "./app"
import { PortConst } from './constant/port-const'

const PORT: string = process.env.PORT || PortConst.PORT


const start = async () => {
    try {
        app.listen(PORT, () => console.log(`Service listening on port ${PORT}`))
    } catch(error) {
        console.warn(`Error while starting the service on PORT ${PORT}`, error)
    }
}

start()

// process.on('SIGINT')