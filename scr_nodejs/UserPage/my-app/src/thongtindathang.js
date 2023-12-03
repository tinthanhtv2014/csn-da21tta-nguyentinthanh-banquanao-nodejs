import React, { Component } from "react";
import { withRouter, Link } from "react-router-dom";
import axios from "axios";
import "./assets/css/muahang.css";

const host = "https://provinces.open-api.vn/api/";

class Thongtintdathang extends Component {
  constructor(props) {
    super(props);

    this.state = {
      counterValue: 1,
      selectedSize: null,
      product: {},
    };
  }

  async componentDidMount() {
    if (this.props.match && this.props.match.params) {
      let id = this.props.match.params.id;

      try {
        const response = await axios.get(
          `http://localhost:8081/api/v1/product/${id}`
        );
        const productData = response.data.data ? response.data.data[0] : {};
        this.setState({
          product: productData,
        });

        console.log("check res: ", response);
      } catch (error) {
        console.error("Error fetching product data: ", error);
      }
    }
  }

  render() {
    const { product } = this.state;
    let isEmptyObj = Object.keys(product).length === 0;

    return (
      <>
        {isEmptyObj === false && (
          <div className="muahang-container">
            <a href="/some-valid-link" className="logo-muahang">
              <p>ĐẶT HÀNG</p>
            </a>

            <div className="container-setup">
              <div className="muahang-giay-info">
                <form
                  className="muahang-form"
                  method="POST"
                  action="http://localhost:8081/update-user"
                >
                  <h5 className="thongtinh-muahang">Thông tin giao hàng</h5>
                  <input name="id" hidden value={product.id} />

                  <label className="muahang-label">
                    <input
                      type="text"
                      name="hotenkh"
                      className="muahang-input hoten"
                      placeholder="Họ và tên"
                    />
                  </label>
                  <br />
                  <label className="muahang-label">
                    <input
                      type="text"
                      name="sdt"
                      className="muahang-input muahang-sdt"
                      placeholder="Số điện thoại "
                    />
                  </label>

                  <label className="muahang-label">
                    <input
                      type="text"
                      name="diachi"
                      className="muahang-input muahang-sonha"
                      placeholder="Địa chỉ chi tiết"
                    />
                  </label>
                  <br />
                  <label className="muahang-label">
                    <input
                      type="text"
                      name="ngaysinh"
                      className="muahang-input"
                      placeholder="Ngày Sinh"
                    />
                  </label>
                  <p className="thanhtoan">Hình thức thanh toán tại nhà</p>
                  <button type="submit"> Buy</button>
                </form>
              </div>

              <div className="muahang-customer-info">
                <div className="hr-xoaydoc"></div>
                <div className="thongtin-sanpham">
                  <form
                    method="POST"
                    action="http://localhost:8081/update-user"
                  >
                    <div className="thongtin-sanpham_2">
                      <span className="discount-bannerr">
                        {product.soluong}
                      </span>
                      <img
                        src={`http://localhost:8081/public/images/${product.mota}`}
                        className="sanpham-img"
                        alt="Product"
                      />
                      <span className="sanpham-name">
                        Sản phẩm: {product.tensp}{" "}
                      </span>
                      <span className="sanpham-price">${product.giatien}</span>
                    </div>
                  </form>
                  <hr></hr>
                  <label className="muahang-magiamgia1">
                    <input
                      type="text"
                      name=""
                      className="muahang-magiamhgia"
                      placeholder="Mã giảm giá (nếu có)"
                    />
                    <button className="muahang-xacnhan">Sử Dụng</button>
                  </label>
                  <hr></hr>
                  <div className="muahang-tamtinh">
                    {" "}
                    <span className="muahang-tamtinh1">Tạm tính</span>
                    <span className="muahang-tamtinh3">
                      ${product.giatien * product.soluong}
                    </span>{" "}
                  </div>
                  <div className="muahang-phivanchuyen">
                    <span>Phí vận chuyển</span>
                    <span className="muahang-phivanchuyen1">$2</span>
                  </div>
                  <hr></hr>
                  <div className="muahang-tongcong">
                    <span>Tổng cộng</span>
                    <span className="muahang-tongcong1">
                      ${product.giatien * product.soluong + 2}
                    </span>
                  </div>
                  <Link to={`/thongtindathang`} className="btn btn-primary">
                    Buy
                  </Link>
                </div>
              </div>
            </div>
          </div>
        )}
      </>
    );
  }
}

export default withRouter(Thongtintdathang);
