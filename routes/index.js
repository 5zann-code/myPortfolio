var express = require("express");
const color = require("colors");
var router = express.Router();

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", {
    title: "Express",
    home: true,
    project: false,
    about: false,
    contact: false,
  });
  console.log("Home page Hit".red);
});

router.get("/about", function (req, res, next) {
  res.render("about", {
    title: "About myself",
    home: false,
    project: false,
    about: true,
    contact: false,
  });
  console.log("This is about page".red);
});

router.get("/contact", function (req, res, next) {
  res.render("contact", {
    title: "Contact Page",
    home: false,
    project: false,
    about: false,
    contact: true,
  });
  console.log("This is contact page".red);
});

router.get("/project", function (req, res, next) {
  res.render("project", {
    title: "Project Page",
    home: false,
    project: true,
    about: false,
    contact: false,
  });
  console.log("This is Project page".red);
});

router.get("*", (req, res) => {
  res.send("Please Enter Correct URl!  Thanks");
});

module.exports = router;
