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

module.exports = {
  getHomePage,
  getDetailPage,
  createNewProduct,
};
