import express from "express";
import quizQuestions from "./constant";
const app = express();

app.get("/getquiz", (req, res) => {
  res.send(quizQuestions);
});

app.listen(process.env.PORT || 3000, function () {
  console.log(
    "Express server listening on port %d in %s mode",
    this.address().port,
    app.settings.env
  );
});
