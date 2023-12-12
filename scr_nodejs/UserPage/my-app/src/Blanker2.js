import React from "react";
import "./styleBlank.css";
import { Link } from "react-router-dom";
class Blanker2 extends React.Component {
  render() {
    return (
      <>
        <div className="centered-text">
          {" "}
          <Link className="btn-link" to={`/danhsachsanpham`}>
            <span>Xem thêm</span>
          </Link>
        </div>
      </>
    );
  }
}

export default Blanker2;
