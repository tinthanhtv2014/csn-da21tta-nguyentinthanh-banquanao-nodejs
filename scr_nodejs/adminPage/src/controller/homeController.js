const express = require("express");
const connection = require("../config/dataBase");
const multer = require("multer");
const getHomePage = async (req, res) => {
  const [results, fields] = await connection.execute(
    "SELECT * FROM `product` "
  );
  return res.render("home.ejs", { dataProduct: results });
};

const getDetailPage = async (req, res) => {
  let userid = req.params.id;
  let [user, fields] = await connection.query(
    "SELECT * FROM `product` where id = 1"
  );
  console.log("check user", user);
  return res.send(JSON.stringify(user));
};

const getUserPage = async (req, res) => {
  const [results, fields] = await connection.execute("SELECT * FROM `users` ");

  return res.render("user.ejs", { dataUsers: results });
};

const createNewProduct = async (req, res) => {
  let id = req.body.id;
  let tensp = req.body.tensp;
  let loaisp = req.body.loaisp;
  let soluong = req.body.soluong;
  let giatien = req.body.giatien;
  let tenNSX = req.body.tenNSX;
  let chitietsanpham = req.body.chitietsanpham;
  let kichco = req.body.kichco;
  if (req.fileValidationError) {
    return res.status(400).json({ error: req.fileValidationError });
  } else if (!req.file) {
    return res.status(400).json({ error: "Please select an image to upload" });
  }

  try {
    await connection.execute(
      "insert into product(id,tensp,soluong,loaisp,tenNSX, giatien,chitietsanpham,mota,kichco) values (?,?,?,?,?,?,?,?,?)",
      [
        id,
        tensp,
        soluong,
        loaisp,
        tenNSX,
        giatien,
        chitietsanpham,
        req.file.filename,
        kichco,
      ]
    );
    return res.redirect("/");
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

const deleteProduct = async (req, res) => {
  const productId = req.body.productId;
  await connection.execute("delete from `product` where id = ?", [productId]);
  return res.redirect("/");
};

const getEditPage = async (req, res) => {
  let id = req.params.id;
  let [user] = await connection.execute(
    "select * from `product` where id = ?",
    [id]
  );
  const [results, fields] = await connection.execute(
    "SELECT * FROM `product` "
  );

  return res.render("edit.ejs", { dataProduct: user[0], dataproduct: results });
};

const updateProduct = async (req, res, err) => {
  let id = req.body.id;
  let tensp = req.body.tensp;
  let loaisp = req.body.loaisp;
  let soluong = req.body.soluong;
  let giatien = req.body.giatien;
  let tenNSX = req.body.tenNSX;
  let chitietsanpham = req.body.chitietsanpham;
  let kichco = req.body.kichco;
  if (req.fileValidationError) {
    return res.status(400).json({ error: req.fileValidationError });
  } else if (!req.file) {
    return res.status(400).json({ error: "Please select an image to upload" });
  }
  try {
    await connection.execute(
      "UPDATE product SET tensp = ?,soluong = ?, loaisp = ?,tenNSX = ?, giatien = ?,chitietsanpham=?, mota = ?,kichco = ? WHERE id = ?",
      [
        tensp,
        soluong,
        loaisp,
        tenNSX,
        giatien,
        chitietsanpham,
        req.file.filename,
        kichco,
        id,
      ]
    );

    return res.redirect("/");
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

const upload = multer().single("profile_pic");

// const handleUploadFile = async (req, res) => {
//   upload(req, res, function (err) {
//     // req.file contains information of uploaded file
//     // req.body contains information of text fields, if there were any

//     if (req.fileValidationError) {
//       return res.send(req.fileValidationError);
//     } else if (!req.file) {
//       return res.send("Please select an image to upload");
//     } else if (err instanceof multer.MulterError) {
//       return res.send(err);
//     } else if (err) {
//       return res.send(err);
//     }

//     // Display uploaded image for user validation
//     // res.send(
//     //   `You have uploaded this image: <hr/><img src="/images/${req.file.filename}" width="500"><hr /><a href="/upload">Upload another image</a>`
//     // );
//   });
//   await connection.execute("update  product set mota = ? where id = ?", [
//     req.file.filename,
//     id,
//   ]);
//   return res.redirect("/");
// };

module.exports = {
  getHomePage,
  getDetailPage,
  createNewProduct,
  deleteProduct,
  getEditPage,
  updateProduct,
  getUserPage,
};

// if (req.fileValidationError) {
//   return res.send(req.fileValidationError);
// } else if (!req.file) {
//   return res.send("Please select an image to upload");
// } else if (err instanceof multer.MulterError) {
//   return res.send(err);
// } else if (err) {
//   return res.send(err);
// }

// upload(req, res, function (err) {
//   // req.file contains information of uploaded file
//   // req.body contains information of text fields, if there were any

//   if (req.fileValidationError) {
//     return res.status(400).json({ error: req.fileValidationError });
//   } else if (!req.file) {
//     return res
//       .status(400)
//       .json({ error: "Please select an image to upload" });
//   } else if (err instanceof multer.MulterError) {
//     return res.status(500).json({ error: err.message });
//   } else if (err) {
//     return res.status(500).json({ error: err.message });
//   }

//   // Display uploaded image for user validation
//   // res.send(
//   //   `You have uploaded this image: <hr/><img src="/images/${req.file.filename}" width="500"><hr /><a href="/upload">Upload another image</a>`
//   // );
// });
