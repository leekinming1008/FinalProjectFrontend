import { CategoryType } from "./categoryType";

export interface ProductType {
    _id?: string,
    image: string,
    name: string,
    description: string,
    category: string,
    price: number,
    userID: string
}