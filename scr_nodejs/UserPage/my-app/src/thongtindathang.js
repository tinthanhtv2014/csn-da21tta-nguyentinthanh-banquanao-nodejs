import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import axios from "axios";
import "./assets/css/muahang.css";
import { Button } from "reactstrap";
import "react-toastify/dist/ReactToastify.css";

const isValidPhoneNumber = (phoneNumber) => {
  // Sử dụng regex để kiểm tra xem giá trị có phải là số điện thoại Việt Nam hay không
  return /^(0|\+84)([0-9]{9})$/g.test(phoneNumber);
};

class Thongtintdathang extends Component {
  constructor(props) {
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
      isOrderSuccess: false,
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

    const urlParams = new URLSearchParams(window.location.search);
    const successMessage = urlParams.get("successMessage");

    if (successMessage && !this.state.isOrderSuccess) {
      this.setState({ isOrderSuccess: true });
      alert(successMessage);

      setTimeout(() => {
        this.setState({ isOrderSuccess: false });
      }, 3000);
    }
  }

  handleSoluong = (event) => {
    console.log("check value: ", this.state.counterValue);
    console.log("check soluong: ", this.state.product.soluong);
    if (this.state.counterValue > this.state.product.soluong) {
    }
  };

  handleSizeChange = (size) => {
    this.setState({ selectedSize: size });
  };

  increment = () => {
    this.setState((prevState) => ({
      counterValue: prevState.counterValue + 1,
    }));
    if (this.state.counterValue >= this.state.product.soluong) {
      alert("hết hàng rồi bạn ơi, hôm khác đến nhé =)))");
      this.setState((prevState) => ({
        counterValue: this.state.product.soluong,
      }));
      return;
    }
  };

  decrement = () => {
    const { counterValue } = this.state;
    if (counterValue > 1) {
      this.setState({ counterValue: counterValue - 1 });
    }
  };

  handleSdtChange = (event) => {
    const inputValue = event.target.value;
    const isPhoneNumberValid = isValidPhoneNumber(inputValue);

    this.setState((prevState) => ({
      errorMessages: {
        ...prevState.errorMessages,
        sdt: isPhoneNumberValid ? "" : "Số điện thoại không hợp lệ",
      },
    }));
  };
  handleOrder = (event) => {
    // Kiểm tra lỗi tổng quát
    if (this.hasErrors()) {
      event.preventDefault();
      alert("Vui lòng kiểm tra lại thông tin nhập đúng và đủ!");
      return;
    }

    // Kiểm tra lỗi số điện thoại riêng
    if (this.state.errorMessages.sdt) {
      event.preventDefault();
      alert("Số điện thoại không hợp lệ. Vui lòng kiểm tra lại!");
      return;
    }

    // Xử lý logic đặt hàng
    // ...
  };

  hasErrors = () => {
    const { errorMessages } = this.state;
    return Object.values(errorMessages).some((error) => error !== "");
  };

  render() {
    const { product, counterValue, selectedSize, errorMessages } = this.state;
    let isEmptyObj = Object.keys(product).length === 0;
    console.log("check product: ", product.soluong);
    console.log("check countervalue: ", counterValue);
    return (
      <>
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
                        // readOnly
                        onChange={(event) => this.handleSoluong(event)}
                      />
                      <div className="span2" onClick={this.increment}>
                        +
                      </div>
                    </div>

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
                        onChange={this.handleSdtChange}
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
                      <span className="sanpham-name">{product.tensp} </span>
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
                      onClick={this.handleOrder}
                    >
                      Xác Nhận
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
