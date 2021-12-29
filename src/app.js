import express from "express";

const app = express();
const PORT = 3000;

// 여기서 uri 시작에 /를 붙였어야 함!
app.get("/api/test", (req, res) => res.send("Hello world!"));

app.listen(PORT, () => console.log(`Listening to port ${PORT}`));
