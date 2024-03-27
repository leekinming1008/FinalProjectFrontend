import axios from "axios";
import { CommentType } from "../types/commentType";
import { userStore } from "../store/userStore";

const commentUrl = import.meta.env.VITE_BASE_URL + "/api/comment";
const {userID} = userStore();

// GET all the comment by user
export const getCommentforUser = () => axios.get(`${commentUrl}/${userID}`);

// POST create the comment 
export const createComment = (newComment: CommentType) => axios.post(`${commentUrl}`, newComment);
