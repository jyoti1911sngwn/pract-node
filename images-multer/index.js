const express = require("express");
const app = express();
const PORT = 8000;


const path = require("path");
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"))

app.use(express.json());
app.use(express.urlencoded({ extended: false }));


const multer = require("multer");
const storage = multer.diskStorage({ 
    destination : function(req, file, cb) {
        return cb(null, './upload')
    },
    filename: function(req, file, cb) {
        return cb(null, `${Date.now()}-${file.originalname}`)
    }
})
const upload = multer({storage})
// const upload = multer({ dest: "upload/" });

app.get("/", (req, res) => {
  return res.render("homepage");
});
app.post("/upload", upload.single("fileImg"), (req, res) => {
  console.log(req.body);
  console.log(req.file);
  return res.redirect("/");
});
app.listen(PORT, () => console.log("Server listening"));
