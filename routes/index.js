const express = require("express");
const router = express.Router();

const userRouter = require("./Controllers/user.controller");
const notes = require("./Controllers/note.controller");

//use(userRouter);
// router.use("/users", userRouter);
/* GET home page. */
router.get("/", function(req, res, next) {
  res.render("index", {
    title: "This is a express app",
    someVariable: "example"
  });
});

router.post("/notes", notes.create);

router.get("/notes", notes.findAll);

router.get("/notes/:noteId", notes.findOne);

router.put("/notes/:noteId", notes.update);

router.delete("/notes/:noteId", notes.delete);

module.exports = router;
