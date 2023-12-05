import React, { Component } from "react";
import { withRouter, Link } from "react-router-dom";
import axios from "axios";
import "./assets/css/muahang.css";
import { Button } from "reactstrap";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
class Thongtintdathang extends Component {
  constructor(props) {
    // Trong constructor của Thongtintdathang

    super(props);

    this.state = {
      counterValue: 1,
      selectedSize: null,
      product: {},
      errorMessages: {
        selectedSize: "",
        counterValue: "",
        hotenkh: "",
        sdt: "",
        diachi: "",
      },
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

  handleSizeChange = (size) => {
    this.setState({ selectedSize: size });
  };

  increment = () => {
    this.setState((prevState) => ({
      counterValue: prevState.counterValue + 1,
    }));
  };

  decrement = () => {
    const { counterValue } = this.state;
    if (counterValue > 1) {
      this.setState({ counterValue: counterValue - 1 });
    }
  };

  handleBuyClick = (event) => {
    event.preventDefault();

    const { selectedSize, counterValue, hotenkh, sdt, diachi } = this.state;

    // Kiểm tra điều kiện và hiển thị thông báo nếu cần
    const errorMessages = {};

    if (!selectedSize) {
      errorMessages.selectedSize = "Vui lòng chọn kích cỡ";
    }

    if (!counterValue) {
      errorMessages.counterValue = "Vui lòng chọn số lượng";
    }

    if (!hotenkh) {
      errorMessages.hotenkh = "Vui lòng nhập họ và tên";
    }

    if (!sdt) {
      errorMessages.sdt = "Vui lòng nhập số điện thoại";
    }

    if (!diachi) {
      errorMessages.diachi = "Vui lòng nhập địa chỉ";
    }

    if (Object.keys(errorMessages).length > 0) {
      this.setState({ errorMessages });
      toast.error("Vui lòng điền đầy đủ thông tin");
      return;
    }

    // Nếu không có lỗi, tiếp tục xử lý mua hàng
    // ...
  };

  render() {
    const { product, counterValue, selectedSize, errorMessages } = this.state;
    let isEmptyObj = Object.keys(product).length === 0;

    return (
      <>
        <ToastContainer />
        {isEmptyObj === false && (
          <div className="muahang-container">
            <a href="/some-valid-link" className="logo-muahang">
              <p>ĐẶT HÀNG</p>
            </a>
            <form method="POST" action="http://localhost:8081/update-user">
              <div className="container-setup">
                <div className="muahang-giay-info">
                  <div className="muahang-form">
                    <h5 className="thongtinh-muahang">Thông tin giao hàng</h5>
                    <input name="id" hidden value={product.id} />
                    <input name="tensp" hidden value={product.tensp} />
                    <div className="sizeChoose">
                      {["S", "X", "XL", "XXL"].map((size) => (
                        <div key={size} className="size-option">
                          <input
                            type="radio"
                            id={size}
                            name="size"
                            value={size}
                            checked={selectedSize === size}
                            onChange={() => this.handleSizeChange(size)}
                          />
                          <label
                            htmlFor={size}
                            className={`size-text ${
                              selectedSize === size ? "selected-text" : ""
                            }`}
                          >
                            {size}
                          </label>
                          {errorMessages.size && (
                            <p className="error-message">
                              {errorMessages.size}
                            </p>
                          )}
                        </div>
                      ))}
                    </div>

                    <div className="buttonSoluong">
                      <div className="span1" onClick={this.decrement}>
                        -
                      </div>
                      <input
                        name="soluong"
                        type="text"
                        id="counter"
                        value={counterValue}
                        min={1}
                        max={5000}
                        readOnly
                        onChange={(event) => this.handleSoluong(event)}
                      />
                      <div className="span2" onClick={this.increment}>
                        +
                      </div>
                      {errorMessages.soluong && (
                        <p className="error-message">{errorMessages.soluong}</p>
                      )}
                    </div>

                    <label className="muahang-label">
                      <input
                        type="text"
                        name="hotenkh"
                        className="muahang-input hoten"
                        placeholder="Họ và tên"
                      />
                      {errorMessages.hotenkh && (
                        <p className="error-message">{errorMessages.hotenkh}</p>
                      )}
                    </label>

                    <br />
                    <label className="muahang-label">
                      <input
                        type="text"
                        name="sdt"
                        className="muahang-input muahang-sdt"
                        placeholder="Số điện thoại "
                      />
                      {errorMessages.sdt && (
                        <p className="error-message">{errorMessages.sdt}</p>
                      )}
                    </label>

                    <label className="muahang-label">
                      <input
                        type="text"
                        name="diachi"
                        className="muahang-input muahang-sonha"
                        placeholder="Địa chỉ chi tiết"
                      />
                      {errorMessages.diachi && (
                        <p className="error-message">{errorMessages.diachi}</p>
                      )}
                    </label>

                    <br />
                    <label className="muahang-label">
                      <input
                        type="text"
                        name="ghichu"
                        className="muahang-input"
                        placeholder="Ghi chú"
                      />
                    </label>
                    <p className="thanhtoan">Hình thức thanh toán tại nhà</p>
                  </div>
                </div>

                <div className="muahang-customer-info">
                  <div className="hr-xoaydoc"></div>
                  <div className="thongtin-sanpham">
                    <div className="thongtin-sanpham_2">
                      <span className="discount-bannerr">{counterValue}</span>
                      <img
                        src={`http://localhost:8081/public/images/${product.mota}`}
                        className="sanpham-img"
                        alt="Product"
                      />
                      <span className="sanpham-name">
                        Sản phẩm: {product.tensp}{" "}
                      </span>
                      <span className="sanpham-price">
                        {product.giatien.toLocaleString()} VND
                      </span>
                    </div>

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
                        {(product.giatien * counterValue).toLocaleString()} VND
                      </span>{" "}
                    </div>
                    <div className="muahang-phivanchuyen">
                      <span>Phí vận chuyển</span>
                      <span className="muahang-phivanchuyen1">30,000 VND</span>
                    </div>
                    <hr></hr>
                    <div className="muahang-tongcong">
                      <span>Tổng cộng</span>
                      <span className="muahang-tongcong1">
                        {(
                          product.giatien * counterValue +
                          30000
                        ).toLocaleString()}{" "}
                        VND
                      </span>
                    </div>
                    <button
                      type="submit"
                      className="btn btn-primary"
                      onClick={(event) => this.handleBuyClick(event)}
                    >
                      Buy
                    </button>
                  </div>
                </div>
              </div>
            </form>
          </div>
        )}
      </>
    );
  }
}

export default withRouter(Thongtintdathang);
