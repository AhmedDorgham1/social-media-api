import express from "express";
import {
  addComment,
  deleteComment,
  getCommentById,
  updateComment,
  userWithPostsAndComments,
} from "./comment.controllers.js";

const commentRouter = express.Router();
commentRouter.post("/addComment", addComment);
commentRouter.get("/userWithPostsAndComments", userWithPostsAndComments);
commentRouter
  .route("/:commentId")
  .get(getCommentById)
  .put(updateComment)
  .delete(deleteComment);
export default commentRouter;
