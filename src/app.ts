import express from "express";
import quizQuestions from "./constant";
const app = express();
const port = process.env.port || 3000;
app.get("/getquiz", (req, res) => {
  res.send(quizQuestions);
});
app.listen(port, () => {
  return console.log(`server is listening on ${port}`);
});
