import {Request, Response} from 'express'

export interface InserCategoriesControllerT {
    postCategoryImage(req: Request, res: Response): void;
}