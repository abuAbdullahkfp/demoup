import {ControllerT} from './controller'
import {Request, Response} from 'express'



export interface InsertImageControllerT  {
    postImageAsset(req: Request, res: Response): void;
}