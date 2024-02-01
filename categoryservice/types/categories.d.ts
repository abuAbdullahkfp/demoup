import { Document, Model } from "mogoose";

export interface ICategoriesDoc extends Document {
  categories: Array<string>;
  publicImageUrl: string;
  imageName: string;
  createdAt?: Date;
  updatedAt?: Date;
}

export interface ICategoriesModel extends Model<ICategoriesDoc> {
  create(data: ICategoriesDoc): Promise<ICategoriesDoc>;
}
