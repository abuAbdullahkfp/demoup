import {Router} from 'express'
import {asyncHandler} from '../utils/async-handler'
import {retrieveImageController} from '../controller/retrieveImageController'


const router = Router()

router.get("/get-image", asyncHandler(retrieveImageController.getImageAsset));


export {router as retrieveImageRouter}