import axios from "axios";

const commentUrl = import.meta.env.VITE_BASE_URL + "/api/comment";
const userID = "abcdefg";

// GET all the comment by user
const getCommentforUser = () => axios.get(`${commentUrl}/${userID}`);

// POST create the comment 
const createComment = () => axios.post(`${commentUrl}`);
