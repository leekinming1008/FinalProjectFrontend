import axios from "axios";
import { PostsType } from "../types/postType";

const POST_ENDPOINT =import.meta.env.VITE_BASE_URL + "/api/post";

//Get all posts
export const getAllPosts = () => axios.get(POST_ENDPOINT);

//Create new post

export const createPost = (postData: PostsType) => axios.post(POST_ENDPOINT, postData);

//Get post by userID
export const getPostByUserID = (userID: string) => axios.get(`${POST_ENDPOINT}/${userID}`);

// Delete a post
export const deletePost = (id: string) => axios.delete(`${POST_ENDPOINT}/${id}`);

//edit post
export const editPost = (id: string, postData: PostsType) => axios.put(`${POST_ENDPOINT}/${id}`, postData);