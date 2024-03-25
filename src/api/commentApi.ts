import axios from "axios";
import { CommentType } from "../types/commentType";

const commentUrl = import.meta.env.VITE_BASE_URL + "/api/comment";
const userID = "abcdefg";

// GET all the comment by user
const getCommentforUser = () => axios.get(`${commentUrl}/${userID}`);

// POST create the comment 
const createComment = (newComment: CommentType) => axios.post(`${commentUrl}`, newComment);
