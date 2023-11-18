const express = require("express");
const router = express.Router();
const {
  getHomePage,
  getDetailPage,
  createNewProduct,
  deleteProduct,
  getEditPage,
  updateProduct,
  getUserPage,
} = require("../controller/homeController");

router.get("/", getHomePage);
router.get("/detail/product/");
router.post("/create-new-product", createNewProduct);

router.post("/delete-product", deleteProduct);
router.get("/editproduct/:id", getEditPage);
router.post("/update-product", updateProduct);

router.get("/user-order", getUserPage);

module.exports = router;
