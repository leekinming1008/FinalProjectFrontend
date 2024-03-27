import { CategoryType } from "./categoryType";
import { userType } from "./userType";

export interface ProductType {
    _id?: string,
    image: string,
    name: string,
    description: string,
    category: CategoryType,
    price: number,
    userID: userType
}