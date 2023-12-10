import axios from "axios";
import React, { Component } from "react";
import { withRouter, Link } from "react-router-dom";
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

  handleSizeClick = (size) => {
    this.setState({ selectedSize: size });

    console.log("check size: ", size);
    console.log("check this state: ", this.state);
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
    const { product } = this.state;
    let isEmptyObj = Object.keys(product).length === 0;
    let stockStatus = product.soluong <= 0 ? "Hết hàng" : "Còn hàng";
    return (
      <>
        {isEmptyObj === false && (
          <>
            <div className="tieudesp">
              <h1>Thông Tin Sản Phẩm </h1>
            </div>
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
                    <p className="product-price">
                      {product.giatien.toLocaleString()} VND
                    </p>
                    <div className="size">
                      <p className="size-p">Mô tả</p>
                      <p>
                        Bảng size Outerity <br /> S: Dài 69 Rộng 52.5 | 1m50 -
                        1m65, 45 - 55Kg <br />
                        X: Dài 73 Rộng 55 | 1m60 - 1m75, 50 - 65Kg <br /> XL:
                        Dài 76.5 Rộng 57.5 | 1m7 - 1m8, 65Kg - 80Kg <br /> 👉
                        Nếu chưa biết lựa size bạn có thể inbox để được chúng
                        mình tư vấn. <br />
                        ‼️LƯU Ý ▪️Khi giặt sản phẩm bằng tay: Vui lòng hoà tan
                        kĩ nước giặt, bột giặt với nước sau đó mới cho sản phẩm
                        vào. ▪️Khi giặt sản phẩm bằng máy giặt: Vui lòng đổ nước
                        giặt, bột giặt vào khay của máy. <br />
                        🚫TUYỆT ĐỐI KHÔNG đổ nước giặt, bột giặt trực tiếp vào
                        sản phẩm. Như vậy sẽ ảnh hưởng đến màu sắc của sản phẩm
                        và làm cho áo có tình trạng loang màu. Outerity xin cảm
                        ơn ạ🖤
                        {/* {product.chitietsanpham} */}
                      </p>
                    </div>
                    <hr></hr>
                    <p className="con-hang">{stockStatus}</p>
                    <div className="product-h3_muahang">
                      <Link
                        to={`/thongtindathangsp/${product.id}`}
                        className="btn btn-primary"
                      >
                        Đặt Hàng
                      </Link>
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
