import React from "react";
import Logo from "../assets/image/phoenix-fire-bird-logo-template-vector-183360811.jpg";
import "./style.css";
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
          <div>thanh search</div>
        </div>
      </>
    );
  }
}

export default Navbar;
