import {Request, Response} from 'express'



export interface InsertImageControllerT  {
    postImageAsset(req: Request, res: Response): void;
    getImageAsset(req: Request, res: Response): void;
}