import express from "express";
import userRouter from "./routers/userRouter.js";
import db from "./db.js";
import dotenv from "dotenv";
dotenv.config();

const app = express();
const PORT = 3000;
//req json 형식 받을 수 있게 만들어줌
app.use(express.json());

// 여기서 uri 시작에 /를 붙였어야 함!
app.use("/api/users", userRouter);
// app.get("/api/test", (req, res) => res.send("Hello world!"));

app.listen(PORT, () => console.log(`Listening to port ${PORT}`));
