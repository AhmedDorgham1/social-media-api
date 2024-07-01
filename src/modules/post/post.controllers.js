import commentModel from "../../../DB/models/comment.model.js";
import postModel from "../../../DB/models/post.model.js";
import userModel from "../../../DB/models/user.model.js";

export const addPost = async (req, res) => {
  const { title, content, userId } = req.body;
  const user = await userModel.findOne({
    where: { id: userId, loginStatus: true },
  });
  if (!user) return res.json({ message: "User not found or not logged in" });
  const post = await postModel.create({ title, content, userId });
  res.json({ message: "Post created Successfully", post });
};

export const getPostById = async (req, res) => {
  const post = await postModel.findOne({ where: { id: req.params.postId } });
  if (!post) return res.status(404).json({ message: "Post not found" });
  res.json({ message: "Post is Available", post });
};
export const updatePost = async (req, res) => {
  const { title, userId } = req.body;
  const post = await postModel.update(
    { title },
    { where: { id: req.params.postId, userId } }
  );
  if (post[0] == 0)
    return res
      .status(404)
      .json({ message: "Post not found or invalid userId" });
  res.json({ message: "Post Updated Successfully", post });
};
export const deletePost = async (req, res) => {
  const { userId } = req.body;
  const post = await postModel.destroy({
    where: { id: req.params.postId, userId },
  });
  if (!post)
    return res
      .status(404)
      .json({ message: "Post not found or invalid userId" });
  res.json({ message: "Post deleted Successfully", post });
};
export const postsAndComments = async (req, res) => {
  const posts = await postModel.findAll({
    include: {
      model: commentModel,
      attributes: ["content"],
    },
  });
  res.json({ message: "Posts fetched successfully", posts });
};
