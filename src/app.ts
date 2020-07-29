import express from "express";
import quizQuestions from "./constant";
const app = express();
const port = 3005;
app.get("/getquiz", (req, res) => {
  res.send(quizQuestions);
});
app.listen(port, (err) => {
  if (err) {
    return console.error(err);
  }
  return console.log(`server is listening on ${port}`);
});
