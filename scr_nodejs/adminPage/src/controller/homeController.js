const express = require("express");
const connection = require("../config/dataBase");
const multer = require("multer");
const moment = require("moment");
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
  const [results, fields] = await connection.execute(
    "SELECT users.idkh, users.hotenkh, users.sdt, billproduct.mahd, product.tensp,product.kichco, detailbillproduct.soluongsp, billproduct.diachiship, billproduct.thoigiandat FROM users JOIN billproduct ON users.idkh = billproduct.idkh JOIN detailbillproduct ON billproduct.mahd = detailbillproduct.mahd JOIN product ON detailbillproduct.id = product.id; "
  );

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

const updateUser = async (req, res) => {
  try {
    function getRandomInt(min, max) {
      min = Math.ceil(min);
      max = Math.floor(max);
      return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    const currentTime = moment();
    const formattedTime = currentTime.format("YYYY-MM-DD HH:mm:ss");
    const randomIntegerInRange = getRandomInt(0, 60000);
    const randomIntegerHoadon = getRandomInt(0, 60000);
    const hotenkh = req.body.hotenkh;
    const sdt = req.body.sdt;
    const diachi = req.body.diachi;
    const ghichu = req.body.ghichu;
    const size = req.body.size;
    const soluong = req.body.soluong;
    const id = req.body.id;

    console.log(
      "check data post: ",
      randomIntegerHoadon,
      randomIntegerInRange,
      formattedTime,
      hotenkh,
      diachi,
      sdt,
      size,
      soluong,
      id
    );

    await connection.execute(
      "insert into users(idkh,hotenkh,sdt,diachi) values (?,?,?,?)",
      [randomIntegerInRange, hotenkh, sdt, diachi]
    );

    await connection.execute("UPDATE product SET kichco = ? WHERE id = ?", [
      size,
      id,
    ]);

    await connection.execute(
      "insert into billproduct(mahd,idkh,diachiship,thoigiandat) values (?,?,?,?)",
      [randomIntegerHoadon, randomIntegerInRange, diachi, formattedTime]
    );

    await connection.execute(
      "insert into detailbillproduct(mahd,id,soluongsp) values (?,?,?)",
      [randomIntegerHoadon, id, soluong]
    );

    return res.redirect("http://localhost:3000");
  } catch (error) {
    console.error("An error occurred:", error);
    // Xử lý lỗi ở đây, có thể trả về một trang lỗi hoặc thông báo lỗi cho người dùng
    return res
      .status(500)
      .send("Bạn chưa truyền đủ thông tin không thể đặt hàng !!!!");
  }
};

module.exports = {
  getHomePage,
  getDetailPage,
  createNewProduct,
  deleteProduct,
  getEditPage,
  updateProduct,
  getUserPage,
  updateUser,
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
