import User from "../models/Users.js";

export const postUsers = async (req, res) => {
  const { email, name, password } = req.body;
  console.log("여기로 와야 하는데");
  const user = {
    id: 555,
    name: "yeonjeseo",
    email: "yeonjeseo@hotmail.com",
    password: "123123123",
  };

  await User.create(user);
  console.log(email, name, password);

  return res.status(201).send("회원가입 API");
};
