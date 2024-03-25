import axios from "axios";
import { ProductType } from "../types/productType";

const productApi = import.meta.env.VITE_BASE_URL + "/api/product";
const userID = "abcdefg";

// GET all the product
const getAllProducts = () => axios.get(`${productApi}`);

// GET get signal product 
const getProduct = (productID: string) => axios.get(`${productApi}/${productID}`);

// GET get all the product by user
const getUserProducts = () => axios.get(`${productApi}/fromUser/${userID}`);

// POST create the product
const addProduct = (newProduct: ProductType) => axios.post(`${productApi}`, newProduct);

// PUT edit the product
const editProduct = (productID: string, product: ProductType) => axios.put(`${productApi}/${productID}`, product);

// DELETE remove the product
const removeProduct = (productID: string) => axios.delete(`${productApi}/${productID}`);