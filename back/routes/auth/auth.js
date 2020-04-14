var express = require("express");
var router = express.Router();
const connection = require("./../../helpers/db");

// define the home page route
router.get("/", function (req, res) {
  res.send("Home page for auth");
});

router.post("/signup", function (req, res, next) {
  /*   res.send('I am in POST signup'); */
  const formData = req.body;
  let sql =
    "INSERT INTO `users`(`email`,`password`,`name`,`lastname`) VALUES ('" +
    req.body.email +
    "','" +
    req.body.password +
    "','" +
    req.body.name +
    "','" +
    req.body.lastname +
    "')";
  connection.query(sql, formData, (err, results) => {
    if (err) {
      // If an error has occurred, then the user is informed of the error
      console.log(formData);
      res.status(500).json({ flash: err.message });
    } else {
      // If everything went well, we send a status "ok".
      console.log(formData);
      res.status(200).json({ flash: "User has been signed up!" });
    }
  });
});

router.post("/signin", function (req, res, next) {
  res.send("I am in POST signin");
});

module.exports = router;
