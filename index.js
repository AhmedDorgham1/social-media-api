import express from "express";
import db_connection from "./DB/connection.js";
import commentModel from "./DB/models/comment.model.js";
import postModel from "./DB/models/post.model.js";
import userModel from "./DB/models/user.model.js";
import userRouter from "./src/modules/user/user.routes.js";
import postRouter from "./src/modules/post/post.routes.js";
import commentRouter from "./src/modules/comment/comment.routes.js";

const app = express();
const port = 3000;
db_connection();
app.use(express.json());
app.use("/users", userRouter);
app.use("/posts", postRouter);
app.use("/comments", commentRouter);

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
