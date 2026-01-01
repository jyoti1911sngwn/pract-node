const express = require("express");
const app = express();
app.set("view engine", "ejs");
app.use(logger);
app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(express.static("public"))
app.get("/", logger,logger,logger, (req, res) => {
  // res.download('index.js')
  // res.status(402).json({message: 'Success'})
  res.render("index", { text: "world" });
});

const userRouter = require("./routes/users");
app.use("/users", userRouter);

function logger(req, res, next) {
  console.log(req.originalUrl);
  next();
}
app.listen(3000);
