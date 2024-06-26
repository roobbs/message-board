var express = require("express");
var router = express.Router();

const messages = [
  {
    text: "This is my first post!",
    user: "roobbs",
    added: new Date(),
  },
  {
    text: "Hi there!",
    user: "Amando",
    added: new Date(),
  },
  {
    text: "Hello World!",
    user: "Charles",
    added: new Date(),
  },
];

/* GET home page. */
router.get("/", (req, res, next) => {
  res.render("index", { title: "Mini message board", messageArray: messages });
});

/* GET new message */
router.get("/new", (req, res, next) => {
  res.render("form", { title: "Add new message" });
});

//Post method
router.post("/new", (req, res, next) => {
  messages.unshift({
    text: req.body.messageText,
    user: req.body.messageUser,
    added: new Date(),
  });
  res.redirect("./");
});

module.exports = router;
