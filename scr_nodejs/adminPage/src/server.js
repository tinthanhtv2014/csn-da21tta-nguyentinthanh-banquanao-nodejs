//khai bao thu vien va tao duong dan
const express = require("express");
const path = require("path");
require("dotenv").config();
const configViewEngine = require("./config/viewEngine");
const webRoutes = require("./route/web.js");

const app = express();
const port = process.env.PORT || 8888;
const hostname = process.env.HOST_NAME;

//config json api
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
//configViewEngine
configViewEngine(app);

//used router
app.use("/", webRoutes);

app.listen(port, () => {
  console.log(`Example app listening on port ${hostname}:${port}`);
});