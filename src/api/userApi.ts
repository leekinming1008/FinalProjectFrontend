import axios from "axios";

const USER_ENDPOINT =import.meta.env.VITE_BASE_URL + "/api/user";
const LOGIN_ENDPOINT =import.meta.env.VITE_BASE_URL + "/api/user/login";
const WISHLIST_ENDPOINT =import.meta.env.VITE_BASE_URL + "/api/user/wishlist";

//Get post by ID
export const getUserByID = (id: string) => axios.get(`${USER_ENDPOINT}/${id}`);

//Create new user
interface userType {
    name: string;
    emailAddress: string;
    phone: string;
    address: string;
    password:string;
    wishList: string[];
}
export const createUser = (userData: userType) => axios.post(USER_ENDPOINT, userData);

// Delete a user
export const deleteUser = (id: string) => axios.delete(`${USER_ENDPOINT}/${id}`);

//edit post
export const editUser = (id: string, userData: userType) => axios.put(`${USER_ENDPOINT}/${id}`, userData);

//Post to get the login result (check if the email and passward is correct)
interface loginType {
    emailAddress: string;
    password:string;
}
export const userLogin = (userData: loginType) => axios.post(`${LOGIN_ENDPOINT}`, userData);

//Post to get user's wishlist 
interface wishListType {
    id: string;
    productID: string;
}
export const getWhishlist = (whishlistData: wishListType) => axios.post(WISHLIST_ENDPOINT, whishlistData);


//Add to whishlist
export const addToWhishlist = (whishlistData: wishListType) => axios.post(WISHLIST_ENDPOINT, whishlistData);

//delete from whishlist
export const deleteFromWhishlist = (whishlistData: wishListType) => axios.delete(WISHLIST_ENDPOINT, whishlistData);