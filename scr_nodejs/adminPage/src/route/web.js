const express = require("express");
const router = express.Router();
const multer = require("multer");
const path = require("path");
var appRoot = require("app-root-path");

const {
  getHomePage,
  getDetailPage,
  createNewProduct,
  deleteProduct,
  getEditPage,
  updateProduct,
  getUserPage,
  updateUser,
  getProduct200,
  getProduct300,
  getProduct500,
  postHomePage,
} = require("../controller/homeController");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, appRoot + "/src/public/images/");
  },

  // By default, multer removes file extensions so let's add them back
  filename: function (req, file, cb) {
    cb(
      null,
      file.fieldname + "-" + Date.now() + path.extname(file.originalname)
    );
  },
});

const imageFilter = function (req, file, cb) {
  // Accept images only
  if (!file.originalname.match(/\.(jpg|JPG|jpeg|JPEG|png|PNG|gif|GIF)$/)) {
    req.fileValidationError = "Only image files are allowed!";
    return cb(new Error("Only image files are allowed!"), false);
  }
  cb(null, true);
};
const upload = multer({ storage: storage, fileFilter: imageFilter });

router.get("/", getHomePage);
router.get("/detail/product/");
router.post(
  "/create-new-product",
  upload.single("profile_pic"),
  createNewProduct
);

router.post("/delete-product", deleteProduct);
router.get("/editproduct/:id", getEditPage);
router.post("/update-product", upload.single("profile_pic"), updateProduct);

router.post("/update-user", updateUser);
router.get("/user-order", getUserPage);

router.get("/searchPrice200", getProduct200);
router.get("/searchPrice300", getProduct300);
router.get("/searchPrice500", getProduct500);

router.post("/Tim", upload.none(), postHomePage);
module.exports = router;
