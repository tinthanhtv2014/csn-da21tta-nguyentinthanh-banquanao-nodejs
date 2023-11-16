const express = require("express");
const connection = require("../config/dataBase");

//hien thi data thong qua api
const getAllProduct = async (req, res) => {
  const [results, fields] = await connection.execute(
    "SELECT * FROM `product` "
  );
  return res.status(200).json({
    message: "ok",
    data: results,
  });
};

//them data thong qua api
const createProduct = async (req, res) => {
  let id = req.body.id;
  let tensp = req.body.tensp;
  let loaisp = req.body.loaisp;
  let soluong = req.body.soluong;
  let giatien = req.body.giatien;
  if (!id || !tensp || !loaisp || !soluong || !giatien) {
    return res.status(200).json({
      message: "missing ",
    });
  }
  await connection.execute("insert into product values (?,?,?,?,?)", [
    id,
    tensp,
    loaisp,
    soluong,
    giatien,
  ]);
  return res.status(200).json({
    message: "ok",
  });
};

//xoa du lieu bang api
const deleteProduct = async (req, res) => {
  const productId = req.params.id;
  if (!productId) {
    return res.status(200).json({
      message: "missing ",
    });
  }
  await connection.execute("delete from `product` where id = ?", [productId]);
  return res.status(200).json({
    message: "ok",
  });
};

//update du lieu tu api
const updateProduct = async (req, res) => {
  let id = req.body.id;
  let tensp = req.body.tensp;
  let loaisp = req.body.loaisp;
  let soluong = req.body.soluong;
  let giatien = req.body.giatien;
  if (!id || !tensp || !loaisp || !soluong || !giatien) {
    return res.status(200).json({
      message: "missing ",
    });
  }
  await connection.execute(
    "update product set tensp = ?,loaisp = ?,soluong = ?, giatien = ? where id = ?",
    [tensp, loaisp, soluong, giatien, id]
  );
  return res.status(200).json({
    message: "ok",
  });
};

module.exports = {
  getAllProduct,
  createProduct,
  deleteProduct,

  updateProduct,
};
