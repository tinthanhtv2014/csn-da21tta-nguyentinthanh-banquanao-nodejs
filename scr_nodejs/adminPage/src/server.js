//khai bao thu vien va tao duong dan
const express = require("express");
const path = require("path");
require("dotenv").config();
const configViewEngine = require("./config/viewEngine");
const webRoutes = require("./route/web.js");
const apiRoute = require("./route/api.js");
const app = express();
const port = process.env.PORT || 8888;
const hostname = process.env.HOST_NAME;
const cors = require("cors");
const bodyParser = require("body-parser");
const moment = require("moment");
app.use("/public", express.static(path.join(__dirname, "public")));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
//config json api
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
//configViewEngine
configViewEngine(app);
app.use(cors());
//used router
app.use("/", webRoutes);
app.use("/api/v1/", apiRoute);

// Import statements...
app.get("/search-product/:productId", (req, res) => {
  const productId = req.params.productId;

  // Lọc sản phẩm theo productId
  const searchResult = dataProduct.filter(
    (product) => product.id === productId
  );

  // Render trang hiển thị kết quả tìm kiếm
  res.render("home.ejs", { searchResult });
});

// Rest of your routes...

app.listen(port, () => {
  console.log(`Example app listening on port ${hostname}:${port}`);
});
