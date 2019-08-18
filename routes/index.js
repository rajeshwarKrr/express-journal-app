const express = require("express");
const router = express.Router();

const notes = require("./controllers/note.controller.js");

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
