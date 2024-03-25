import axios from "axios";

const categoryUrl = import.meta.env.VITE_BASE_URL + "/api/category";
const userID = "abcdefg";

// GET all the comment by user
const getAllCategory = () => axios.get(`${categoryUrl}`);

