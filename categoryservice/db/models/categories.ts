import { Schema, model } from "mongoose";
import { SchemaRef } from "../../constant/entity";
import { ICategoriesDoc, ICategoriesModel } from "../../types/categories";

export const CategoriesSchema = new Schema(
  {
    categories: [{ type: String, required: true }],
    publicImageUrl: { type: String,  required: true },
    imageName: { type: String, required: true },
  },
  {
    timestamps: true,
    versionKey: false,
    toJSON: {
      transform(doc, ret, options) {
        ret.id = ret._id;
        delete ret._id;
      },
    },
  }
);


const Categories = model<ICategoriesDoc, ICategoriesModel>(SchemaRef.CATEGORIES, CategoriesSchema)

export {Categories}