import axios from "axios";
import { ProductType } from "../types/productType";

const productApi = import.meta.env.VITE_BASE_URL + "/api/product";
const userID = "abcdefg";

// GET all the product
export const getAllProducts = () => axios.get(`${productApi}`);

// GET get signal product 
export const getProduct = (productID: string) => axios.get(`${productApi}/${productID}`);

// GET get all the product by user
export const getUserProducts = () => axios.get(`${productApi}/fromUser/${userID}`);

// POST create the product
export const addProduct = (newProduct: ProductType) => axios.post(`${productApi}`, newProduct);

// PUT edit the product
export const editProduct = (productID: string, product: ProductType) => axios.put(`${productApi}/${productID}`, product);

// DELETE remove the product
export const removeProduct = (productID: string) => axios.delete(`${productApi}/${productID}`);

// GET get the product by category
export const getProductByCategory = (categoryID: string) => axios.get(`${productApi}/getProductByCate/${categoryID}`);