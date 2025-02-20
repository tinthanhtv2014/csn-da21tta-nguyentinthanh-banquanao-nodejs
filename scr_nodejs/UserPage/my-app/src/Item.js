import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { CardBody, CardTitle, Card, CardSubtitle, CardText } from "reactstrap";
import "./style.css";
import { Link } from "react-router-dom";

import { FaStar } from "react-icons/fa";
class Item extends React.Component {
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
      const response = await fetch("http://localhost:8081/api/v1/product", {
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
    console.log("check data: ", data);
    return (
      <>
        <div className="container">
          <h3>Sản phẩm trong tuần</h3>

          {loading && <p>Loading...</p>}
          {error && <p>Error: {error}</p>}
          {!loading && !error && (
            <div className="container-product">
              {data ? (
                data.map((item) => (
                  <Card
                    style={{
                      width: "18rem",
                    }}
                    key={item.id}
                  >
                    <img
                      alt={item.tensp}
                      src={`http://localhost:8081/public/images/${item.mota}`}
                    />
                    <CardBody>
                      <CardSubtitle className="mb-2 text-muted" tag="h6">
                        Tên hãng : {item.tenNSX}
                      </CardSubtitle>
                      <CardTitle tag="h5">{item.tensp}</CardTitle>

                      <CardText>Giá: {item.giatien} Đ</CardText>
                      <div className="star-container">
                        <FaStar className="yellow-star" />
                        <FaStar className="yellow-star" />
                        <FaStar className="yellow-star" />
                        <FaStar className="yellow-star" />
                        <FaStar className="yellow-star" />
                      </div>
                      <Link
                        to={`/thongtinchitietsp/${item.id}`}
                        className="btn btn-primary"
                      >
                        Buy
                      </Link>
                    </CardBody>
                  </Card>
                ))
              ) : (
                <div>No data available</div>
              )}
            </div>
          )}
        </div>
      </>
    );
  }
}

export default Item;
