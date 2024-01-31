import {Document, Model} from 'mongoose'


export interface IAssetDoc extends Document {
    image: Buffer;
    categories: string[];
    imageId: string;
    createdAt: Date;
    updatedAt: Date;
}

export interface IAssetModel extends Model<IAssetDoc> {}