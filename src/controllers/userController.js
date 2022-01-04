export const postUsers = (req, res) => {
  const { email, name, password } = req.body;

  console.log(email, name, password);

  return res.send("회원가입 API");
};
