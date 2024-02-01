import {Request, Response} from 'express'
import {IImageRequestParams} from './image-request-params'


export interface RetrieveImageControllerT  {
    getImageAssetById(req: Request<IImageRequestParams, {}, {}, {}>, res: Response): void;
    
}