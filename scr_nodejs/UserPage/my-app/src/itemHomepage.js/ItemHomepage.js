import React from "react";

import { withRouter } from "react-router-dom";
import "./ListSanPham.css";

class ItemHomepage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      data: null,
      loading: true,
      error: null,
    };
  }

  componentDidMount() {
    this.fetchData();
  }

  fetchData = async () => {
    try {
      const response = await fetch("http://localhost:8081/api/v1/productNew2", {
        method: "GET",
        mode: "cors",
      });
      if (!response.ok) {
        throw new Error("Yêu cầu không thành công");
      }

      const jsonResponse = await response.json();

      this.setState({
        data: jsonResponse.data,
        loading: false,
      });

      console.log(jsonResponse);
    } catch (error) {
      console.error(error.message);
      this.setState({
        error: error.message,
        loading: false,
      });
    }
  };

  render() {
    const { data, loading, error } = this.state;

    return (
      <div className="container-bottom">
        {/* <div className="tieude">
          <h1>Sản Phẩm Nổi Bật</h1>
        </div> */}
        <ul className="products">
          {data &&
            data.length > 0 &&
            data.map((item, index) => (
              <li key={index}>
                <div className="product-top">
                  <a
                    href={`/thongtinchitietsp/${item.id}`}
                    className="product-thumb"
                  >
                    <img
                      src={`http://localhost:8081/public/images/${item.mota}`}
                      alt={item.tensp}
                    />
                  </a>
                  <a href={`/thongtinchitietsp/${item.id}`} className="mua">
                    Mua
                  </a>
                </div>
                <div className="product-info">
                  <div className="product-name">{item.tensp}</div>
                  <div className="product-price">
                    {item.giatien.toLocaleString()} VND
                  </div>
                </div>
              </li>
            ))}
        </ul>
      </div>
    );
  }
}

export default withRouter(ItemHomepage);
