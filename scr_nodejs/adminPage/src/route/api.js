const express = require("express");
const router = express.Router();

const {
  getAllProduct,
  createProduct,
  deleteProduct,
  getDetailProduct,
  updateProduct,
} = require("../controller/apiController");

router.get("/product", getAllProduct);
router.post("/create-product", createProduct);
router.put("/update-product", updateProduct);
router.delete("/delete-product/:id", deleteProduct);
router.get("/product/:id", getDetailProduct);
module.exports = router;
