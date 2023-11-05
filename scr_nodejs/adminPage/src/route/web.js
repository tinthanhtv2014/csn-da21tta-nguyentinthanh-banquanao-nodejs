const express = require("express");
const router = express.Router();
const { getHomePage } = require("../controller/homeController");

router.get("/", (req, res) => {
  res.send("Hello Worldd!");
});

router.get("/a", getHomePage);

module.exports = router;
