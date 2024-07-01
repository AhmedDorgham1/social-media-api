import commentModel from "../../../DB/models/comment.model.js";
import postModel from "../../../DB/models/post.model.js";
import userModel from "../../../DB/models/user.model.js";

export const addComment = async (req, res) => {
  const { content, userId, postId } = req.body;
  const user = await userModel.findOne({
    where: { id: userId, loginStatus: true },
  });
  if (!user) {
    return res.json({ message: "User not found or not logged in" });
  }
  const comment = await commentModel.create({ content, userId, postId });
  res.json({ message: "Comment created successfully", comment });
};
export const getCommentById = async (req, res) => {
  const comment = await commentModel.findOne({
    where: { id: req.params.commentId },
  });
  if (!comment) return res.status(404).json({ message: "comment not found" });
  res.json({ message: "comment is Available", comment });
};
export const updateComment = async (req, res) => {
  const { content, userId } = req.body;
  const comment = await commentModel.update(
    { content },
    { where: { id: req.params.commentId, userId } }
  );
  if (comment[0] == 0)
    return res
      .status(404)
      .json({ message: "comment not found or invalid userId" });
  res.json({ message: "comment Updated Successfully", comment });
};
export const deleteComment = async (req, res) => {
  const { userId } = req.body;
  const comment = await commentModel.destroy({
    where: { id: req.params.commentId, userId },
  });
  if (!comment)
    return res
      .status(404)
      .json({ message: "comment not found or invalid userId" });
  res.json({ message: "comment deleted Successfully" });
};

export const userWithPostsAndComments = async (req, res) => {
  const users = await userModel.findAll({
    include: {
      model: postModel,
      attributes: ["title"],
      include: {
        model: commentModel,
        attributes: ["content"],
      },
    },
  });
  res.json({ message: "Users fetched successfully", users });
};
