import axios from "axios";
import { CommentType } from "../types/commentType";

const commentUrl = import.meta.env.VITE_BASE_URL + "/api/comment";

// GET all the comment by user
export const getCommentforUser = (userID: string) => axios.get(`${commentUrl}/${userID}`);

// POST create the comment 
export const createComment = (newComment: CommentType) => axios.post(`${commentUrl}`, newComment);
