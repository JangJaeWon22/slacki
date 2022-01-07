import express,{ Request, Response, NextFunction} from "express";
import userRouter from "./routers/userRouter.js";
// import dotenv from "dotenv";
import { sequelize } from "./models";
// dotenv.config();

/**
 *  App Variables 
 */
const PORT:number = parseInt(process.env.SERVER_PORT as string, 10);
const HOST:string = process.env.HOST || 'localhost';
const app: express.Application = express();
// app.set("port", PORT);
//req json 형식 받을 수 있게 만들어줌
app.use(express.json());

/**
 *  App Configuration   //middleware
 */
// app.use(cors());
app.use(express.json());
app.use((req:Request,res:Response,next:NextFunction) => {
    console.log(`Request Occur! ${req.method}, ${req.url}`);
    next();
})

// 여기서 uri 시작에 /를 붙였어야 함!
app.use("/api/users", userRouter);
// app.get("/api/test", (req, res) => res.send("Hello world!"));

/**
 * Server Activation
 */
 app.listen(PORT,HOST,async () => {
  console.log(`Server Listening on ${HOST}:${PORT}`);

  // //sequelize-db 연결 테스트
   await sequelize.authenticate()
   .then(async () => {
       console.log("connection success");
   })
   .catch((e) => {
       console.log('TT : ', e);
   })
})