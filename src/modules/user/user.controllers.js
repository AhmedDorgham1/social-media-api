import userModel from "../../../DB/models/user.model.js";
import bcrypt from "bcrypt";
export const addUser = async (req, res) => {
  const { userName, email, password } = req.body;
  const userExist = await userModel.findOne({ where: { email } });
  if (userExist) return res.json({ message: "User already exist " });
  const hashedPass = bcrypt.hashSync(password, 5);
  const user = await userModel.create({
    userName,
    email,
    password: hashedPass,
  });
  res.status(201).json({ message: "user created successfully", user });
};

export const login = async (req, res) => {
  const { email, password } = req.body;
  const user = await userModel.findOne({ where: { email } });
  if (!user) return res.status(404).json({ message: "user not found" });
  const isPassValid = bcrypt.compareSync(password, user.password);
  if (!isPassValid) return res.json({ message: "Invalid password" });
  const loginStats = await userModel.update(
    { loginStatus: true },
    { where: { email } }
  );
  res.status(200).json({ message: "User logged in Successfully", loginStats });
};
export const logOut = async (req, res) => {
  const { id } = req.query;
  const loginStatus = await userModel.update(
    { loginStatus: false },
    { where: { id } }
  );

  res.json({ message: "User logged out successfully" });
};
