const express = require("express");
const connection = require("../config/dataBase");
const fs = require("fs");
//hien thi data thong qua api
const getAllProduct = async (req, res) => {
  try {
    const [results, fields] = await connection.execute(
      "SELECT * FROM `product`"
    );

    // Thêm đường dẫn đầy đủ cho mỗi sản phẩm
    const productsWithImageUrls = results.map((product) => {
      return {
        ...product,
        imageUrl: `http://localhost:8081/api/v1/images/${product.mota}`,
      };
    });

    return res.status(200).json({
      message: "ok",
      data: productsWithImageUrls,
    });
  } catch (error) {
    console.error(error.message);
    return res.status(500).json({
      message: "Internal server error",
      error: error.message,
    });
  }
};

//them data thong qua api
const createProduct = async (req, res) => {
  let id = req.body.id;
  let tensp = req.body.tensp;
  let loaisp = req.body.loaisp;
  let soluong = req.body.soluong;
  let giatien = req.body.giatien;
  let tenNSX = req.body.tenNSX;
  let chitietsanpham = req.body.chitietsanpham;
  let kichco = req.body.kichco;
  if (
    !id ||
    !tensp ||
    !loaisp ||
    !soluong ||
    !giatien ||
    !tenNSX ||
    !chitietsanpham ||
    !kichco
  ) {
    return res.status(200).json({
      message: "missing ",
    });
  }
  await connection.execute(
    "insert into product(id,tensp,loaisp,tenNSX,soluong,giatien,chitietsanpham,kichco) values (?,?,?,?,?,?,?,?)",
    [id, tensp, loaisp, tenNSX, soluong, giatien, chitietsanpham, kichco]
  );
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
  let tenNSX = req.body.tenNSX;
  let chitietsanpham = req.body.chitietsanpham;
  let kichco = req.body.kichco;
  if (
    !id ||
    !tensp ||
    !loaisp ||
    !soluong ||
    !giatien ||
    !tenNSX ||
    !chitietsanpham ||
    !kichco
  ) {
    return res.status(200).json({
      message: "missing ",
    });
  }
  await connection.execute(
    "update product set tensp = ?,loaisp = ?,tenNSX = ?,soluong = ?, giatien = ?,chitietsanpham=?,kichco=? where id = ?",
    [tensp, loaisp, tenNSX, soluong, giatien, chitietsanpham, kichco, id]
  );
  return res.status(200).json({
    message: "ok",
  });
};

const getDetailProduct = async (req, res) => {
  let userid = req.params.id;

  try {
    let [results, fields] = await connection.query(
      "SELECT * FROM `product` where id = ?",
      [userid]
    );

    // Thêm đường dẫn đầy đủ cho mỗi sản phẩm
    const productsWithImageUrls = results.map((product) => {
      return {
        ...product,
        imageUrl: `http://localhost:8081/api/v1/images/${product.mota}`,
      };
    });

    return res.status(200).json({
      data: results,
    });
  } catch (error) {
    console.error(error.message);
    return res.status(500).json({
      message: "Internal server error",
      error: error.message,
    });
  }
};

let getDetailCompanyProduct = async (req, res) => {
  let companyid = req.params.id;
  try {
    let [results, fields] = await connection.query(
      "SELECT * FROM `product` where tenNSX = ?",
      [companyid]
    );

    // Thêm đường dẫn đầy đủ cho mỗi sản phẩm
    const productsWithImageUrls = results.map((product) => {
      return {
        ...product,
        imageUrl: `http://localhost:8081/api/v1/images/${product.mota}`,
      };
    });

    return res.status(200).json({
      data: results,
    });
  } catch (error) {
    console.error(error.message);
    return res.status(500).json({
      message: "Internal server error",
      error: error.message,
    });
  }
};

const getAllProductNew = async (req, res) => {
  try {
    const [results, fields] = await connection.execute(
      "SELECT * FROM `product` WHERE `id` LIKE 'SP%';"
    );

    // Thêm đường dẫn đầy đủ cho mỗi sản phẩm
    const productsWithImageUrls = results.map((product) => {
      return {
        ...product,
        imageUrl: `http://localhost:8081/api/v1/images/${product.mota}`,
      };
    });

    return res.status(200).json({
      message: "ok",
      data: productsWithImageUrls,
    });
  } catch (error) {
    console.error(error.message);
    return res.status(500).json({
      message: "Internal server error",
      error: error.message,
    });
  }
};

const getAllProductNew2 = async (req, res) => {
  try {
    const [results, fields] = await connection.execute(
      "SELECT * FROM `product` WHERE `id` LIKE 'KP%';"
    );

    // Thêm đường dẫn đầy đủ cho mỗi sản phẩm
    const productsWithImageUrls = results.map((product) => {
      return {
        ...product,
        imageUrl: `http://localhost:8081/api/v1/images/${product.mota}`,
      };
    });

    return res.status(200).json({
      message: "ok",
      data: productsWithImageUrls,
    });
  } catch (error) {
    console.error(error.message);
    return res.status(500).json({
      message: "Internal server error",
      error: error.message,
    });
  }
};

module.exports = {
  getAllProduct,
  createProduct,
  deleteProduct,
  updateProduct,
  getDetailProduct,
  getDetailCompanyProduct,
  getAllProductNew,
  getAllProductNew2,
};
