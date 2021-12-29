import express from "express";

const userRouter = express.Router();

userRouter.route("/").post((req, res) => res.send("여기는 회원가입"));
userRouter.route("/login").post((req, res) => res.send("여기는 로컬 로그인"));
export default userRouter;
