import { CategoryType } from "./categoryType";

export interface ProductType {
    _id?: string,
    image: string,
    name: string,
    description: string,
    category: CategoryType,
    price: number,
    userID: string
}