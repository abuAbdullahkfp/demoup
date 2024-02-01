import {Request, Response} from 'express'
import {RetrieveImageControllerT} from '../types/controller'



const RetrieveImageController = (): RetrieveImageControllerT  => {
    const getImageAsset = (req: Request, res: Response) => {

    }
    return {
        getImageAsset
    }

}

const retrieveImageController = RetrieveImageController()
export {retrieveImageController}