const express = require("express");
const connection = require("../config/dataBase");

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

const createNewProduct = async (req, res) => {
  let id = req.body.id;
  let tensp = req.body.tensp;
  let loaisp = req.body.loaisp;
  let soluong = req.body.soluong;
  let giatien = req.body.giatien;
  await connection.execute("insert into product values (?,?,?,?,?)", [
    id,
    tensp,
    loaisp,
    soluong,
    giatien,
  ]);
  return res.redirect("/");
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

const updateProduct = async (req, res) => {
  let id = req.body.id;
  let tensp = req.body.tensp;
  let loaisp = req.body.loaisp;
  let soluong = req.body.soluong;
  let giatien = req.body.giatien;
  await connection.execute(
    "update product set tensp = ?,loaisp = ?,soluong = ?, giatien = ? where id = ?",
    [tensp, loaisp, soluong, giatien, id]
  );

  return res.redirect("/");
};
module.exports = {
  getHomePage,
  getDetailPage,
  createNewProduct,
  deleteProduct,
  getEditPage,
  updateProduct,
};
