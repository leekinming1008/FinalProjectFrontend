import axios from "axios";

const categoryUrl = import.meta.env.VITE_BASE_URL + "/api/category";

// GET all the comment by user
export const getAllCategory = () => axios.get(`${categoryUrl}`);

