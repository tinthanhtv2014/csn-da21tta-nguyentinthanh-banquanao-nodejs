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
    "SELECT users.idkh, users.hotenkh, users.sdt, billproduct.mahd, product.tensp,product.kichco, detailbillproduct.soluongsp,product.giatien,detailbillproduct.soluongsp*product.giatien as total ,billproduct.diachiship, billproduct.thoigiandat FROM users JOIN billproduct ON users.idkh = billproduct.idkh JOIN detailbillproduct ON billproduct.mahd = detailbillproduct.mahd JOIN product ON detailbillproduct.id = product.id; "
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
    // Kiểm tra dữ liệu đầu vào
    const { hotenkh, sdt, diachi, size, soluong, id, tensp } = req.body;
    if (!hotenkh || !sdt || !diachi || !size || !soluong || !id) {
      throw new Error("Bạn chưa truyền đủ thông tin không thể đặt hàng !!!!");
    }

    // Lấy thời gian hiện tại
    const currentTime = new Date();
    const formattedTime = currentTime
      .toISOString()
      .slice(0, 19)
      .replace("T", " ");

    // Tạo các số ngẫu nhiên
    const randomIntegerInRange = getRandomInt(0, 60000);
    const randomIntegerHoadon = getRandomInt(0, 60000);

    // Insert thông tin khách hàng
    await connection.execute(
      "INSERT INTO users(idkh, hotenkh, sdt, diachi) VALUES (?, ?, ?, ?)",
      [randomIntegerInRange, hotenkh, sdt, diachi]
    );

    // Cập nhật thông tin sản phẩm
    await connection.execute("UPDATE product SET kichco = ? WHERE id = ?", [
      size,
      id,
    ]);

    // Insert thông tin hóa đơn
    await connection.execute(
      "INSERT INTO billproduct(mahd, idkh, diachiship, thoigiandat) VALUES (?, ?, ?, ?)",
      [randomIntegerHoadon, randomIntegerInRange, diachi, formattedTime]
    );

    // Insert thông tin chi tiết hóa đơn
    await connection.execute(
      "INSERT INTO detailbillproduct(mahd, id, soluongsp) VALUES (?, ?, ?)",
      [randomIntegerHoadon, id, soluong]
    );

    await connection.execute(
      " UPDATE product SET soluong = soluong - ? WHERE id = ?",
      [soluong, id]
    );

    // Chuyển hướng về trang chủ sau khi đặt hàng thành công
    const successMessage = "Bạn đã đặt hàng thành công!";

    return res.send("cảm ơn bạn đã đặt hàng");
  } catch (error) {
    console.error("An error occurred:", error);
    return res.status(500).send(error.message || "Đã có lỗi xảy ra");
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
