import express from "express";

import {
  addPost,
  deletePost,
  getPostById,
  postsAndComments,
  updatePost,
} from "./post.controllers.js";

const postRouter = express.Router();
postRouter.post("/addPost", addPost);
postRouter.get("/postsAndComments", postsAndComments);
postRouter
  .route("/:postId")
  .get(getPostById)
  .put(updatePost)
  .delete(deletePost);
export default postRouter;
