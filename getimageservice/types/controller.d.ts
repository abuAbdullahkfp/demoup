import {Request, Response} from 'express'



export interface RetrieveImageControllerT  {
    getImageAsset(req: Request, res: Response): void;
    
}