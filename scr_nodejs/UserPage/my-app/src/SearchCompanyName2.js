import React from "react";
import { withRouter } from "react-router-dom";
import "./Fullitem.css";

class FullItem extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      data: null,
      loading: true,
      error: null,
      searchTerm: "",
      priceFilter: "", // Thêm state để lưu trữ giá trị của nút radio
    };
  }

  componentDidMount() {
    this.fetchData();
  }

  fetchData = async () => {
    try {
      const response = await fetch(
        "http://localhost:8081/api/v1/product/company/fendi",
        {
          method: "GET",
          mode: "cors",
        }
      );
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

  handleSearchChange = (event) => {
    this.setState({ searchTerm: event.target.value });
  };

  handlePriceFilterChange = (value) => {
    this.setState({ priceFilter: value });
  };

  render() {
    const { data, searchTerm, priceFilter } = this.state;

    const filteredData =
      data &&
      data.length > 0 &&
      data
        .filter((item) =>
          item.tensp.toLowerCase().includes(searchTerm.toLowerCase())
        )
        .filter((item) =>
          priceFilter === "200000"
            ? item.giatien < 200000
            : priceFilter === "300000"
            ? item.giatien < 300000 && item.giatien >= 200000
            : priceFilter === "500000"
            ? item.giatien < 500000 && item.giatien >= 300000
            : priceFilter === "700000"
            ? item.giatien < 700000
            : true
        );

    return (
      <div className="container-bottom">
        <div className="tieude1">
          <div>
            <h1>Danh Sách Sản Phẩm LOUIS</h1>
          </div>

          <div className="Searchfillter">
            <div className="editinput">
              <input
                placeholder="tìm kiếm sản phẩm"
                value={searchTerm}
                onChange={this.handleSearchChange}
              />
            </div>
            <div className="fillter">
              <label>
                <input
                  type="radio"
                  name="priceFilter"
                  value="200000"
                  checked={priceFilter === "200000"}
                  onChange={() => this.handlePriceFilterChange("200000")}
                />
                Dưới 200k
              </label>
              <label>
                <input
                  type="radio"
                  name="priceFilter"
                  value="300000"
                  checked={priceFilter === "300000"}
                  onChange={() => this.handlePriceFilterChange("300000")}
                />
                Dưới 300k
              </label>
              <label>
                <input
                  type="radio"
                  name="priceFilter"
                  value="500000"
                  checked={priceFilter === "500000"}
                  onChange={() => this.handlePriceFilterChange("500000")}
                />
                Dưới 500k
              </label>
              <label>
                <input
                  type="radio"
                  name="priceFilter"
                  value="700000"
                  checked={priceFilter === "700000"}
                  onChange={() => this.handlePriceFilterChange("700000")}
                />
                Tất cả
              </label>
            </div>
          </div>
        </div>

        <ul className="products">
          {filteredData &&
            filteredData.map((item, index) => (
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

export default withRouter(FullItem);
