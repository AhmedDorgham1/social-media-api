import express from "express";
import { addUser, login, logOut } from "./user.controllers.js";

const userRouter = express.Router();
userRouter.post("/signup", addUser);
userRouter.post("/login", login);
userRouter.patch("/logOut", logOut);
export default userRouter;
