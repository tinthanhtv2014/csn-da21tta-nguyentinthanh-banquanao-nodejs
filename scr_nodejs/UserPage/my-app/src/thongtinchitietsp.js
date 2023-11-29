import axios from "axios";
import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import "./assets/css/thongtinchitietsp.css";

class ThongTinChiTietSp extends Component {
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

  handleClickMuaHang = (event) => {
    const { selectedSize, counterValue } = this.state;
    const { state } = this.props.location;
    const { navigate } = this.props.history;

    if (selectedSize == null) {
      alert("Vui lòng chọn Size Sản phẩm");
      event.preventDefault();
    } else {
      navigate(`/muahang/${state.id}`, {
        state: { giay: state, soLuong: counterValue, size: selectedSize },
      });
    }
    // Thêm mã xử lý mua hàng của bạn ở đây nếu cần
  };

  handleSizeClick = (size) => {
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

  render() {
    const { product, counterValue, selectedSize } = this.state;
    let isEmptyObj = Object.keys(product).length === 0;

    return (
      <>
        {isEmptyObj === false && (
          <>
            <div className="container">
              <div className="product-info">
                <form className="form">
                  <div className="product-image">
                    <img
                      alt={product.tensp}
                      src={`http://localhost:8081/public/images/${product.mota}`}
                    />
                  </div>
                  <div className="product-h3">
                    <h3 className="h3">{product.tensp}</h3>
                    <p className="product-price">${product.giatien}</p>
                    <div className="size">
                      <p className="size-p">Size</p>
                      {["S", "X", "XL", "XXL"].map((size) => (
                        <div
                          key={size}
                          className={`size-option ${
                            selectedSize === size ? "selected" : ""
                          }`}
                          onClick={() => this.handleSizeClick(size)}
                        >
                          <p
                            className={`size-text ${
                              selectedSize === size ? "selected-text" : ""
                            }`}
                          >
                            {size}
                          </p>
                        </div>
                      ))}
                    </div>
                    <hr></hr>
                    <p className="con-hang">Còn hàng</p>
                    <div className="product-h3_muahang">
                      <div className="counter-container">
                        <div className="span1" onClick={this.decrement}>
                          -
                        </div>
                        <input
                          type="text"
                          id="counter"
                          value={counterValue}
                          min={1}
                          max={5000}
                          readOnly
                        />
                        <div className="span2" onClick={this.increment}>
                          +
                        </div>
                      </div>
                      <button
                        type="button"
                        className="purchase-button"
                        onClick={(event) => this.handleClickMuaHang(event)}
                      >
                        Mua Hàng
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </>
        )}
      </>
    );
  }
}

export default withRouter(ThongTinChiTietSp);
