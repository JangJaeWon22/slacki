import express from "express";
import userRouter from "./routers/userRouter.js";
import dotenv from "dotenv";
import db from "./models/index.js";
// dotenv.config();

const PORT = process.env.SERVER_PORT;
const app = express();
// app.set("port", PORT);
//req json 형식 받을 수 있게 만들어줌
app.use(express.json());
db.sequelize
  .sync({ force: false })
  .then((result) => {
    console.log("데이터베이스 연결 성공!");
  })
  .catch((err) => {
    console.log(err);
  });

// 여기서 uri 시작에 /를 붙였어야 함!
app.use("/api/users", userRouter);
// app.get("/api/test", (req, res) => res.send("Hello world!"));
console.log("????");

app.listen(PORT, () => console.log(`Listening to port ${PORT}`));
