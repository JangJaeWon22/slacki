import express from "express";

const userRouter = express.Router();

userRouter.route("/").post((req, res) => res.send("여기는 회원가입"));

export default userRouter;
