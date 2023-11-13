const express = require("express");
const router = express.Router();
const {
  getHomePage,
  getDetailPage,
  createNewProduct,
} = require("../controller/homeController");

router.get("/", getHomePage);
router.get("/detail/product/");
router.post("/create-new-user", createNewProduct);
module.exports = router;
