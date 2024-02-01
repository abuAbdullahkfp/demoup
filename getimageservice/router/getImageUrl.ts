import {Router} from 'express'
import {asyncHandler} from '../utils/async-handler'
import {retrieveImageController} from '../controller/retrieveImageController'


const router = Router()

router.get("/get-image/:id", asyncHandler(retrieveImageController.getImageAssetById));


export {router as retrieveImageRouter}