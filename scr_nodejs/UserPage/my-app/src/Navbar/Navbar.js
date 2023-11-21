import React from "react";
import Logo from "../assets/image/phoenix-fire-bird-logo-template-vector-183360811.jpg";
import "./style.css";
import { MdOutlineSearch } from "react-icons/md";
class Navbar extends React.Component {
  render() {
    return (
      <>
        <div className="header-container">
          <div className="header-logo">
            <img src={Logo} alt="" />
          </div>

          <div className="header-ul">
            <ul>
              <li>Home</li>
              <li>Contact</li>
              <li>About</li>
              <li>News</li>
            </ul>
          </div>
          <div className="navSearch">
            <MdOutlineSearch className="iconSearch" />
            <input type="text" placeholder="Tìm kiếm sản phẩm" />
          </div>
        </div>
      </>
    );
  }
}

export default Navbar;
