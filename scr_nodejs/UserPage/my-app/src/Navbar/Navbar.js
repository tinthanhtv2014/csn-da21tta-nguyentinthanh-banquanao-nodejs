import React from "react";
import Logo from "../assets/image/phoenix-fire-bird-logo-template-vector-183360811.jpg";
import "./style.css";
import { MdOutlineSearch } from "react-icons/md";
import {
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "reactstrap";
import PropTypes from "prop-types";
class Navbar extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      dropdownOpen: false,
    };
  }

  toggle = () => {
    this.setState((prevState) => ({
      dropdownOpen: !prevState.dropdownOpen,
    }));
  };

  render() {
    const { direction, ...args } = this.props;
    const { dropdownOpen } = this.state;
    return (
      <>
        <div className="header-container">
          <div className="header-logo">
            <img src={Logo} alt="" />
          </div>

          <div className="header-ul">
            <ul>
              <li>
                <a href="/">Home</a>
              </li>
              <li>Contact</li>
              <li>About</li>
              <div className="d-flex p-5">
                <Dropdown
                  isOpen={dropdownOpen}
                  toggle={this.toggle}
                  direction={direction}
                >
                  <DropdownToggle caret>Danh Mục</DropdownToggle>
                  <DropdownMenu {...args}>
                    <DropdownItem>
                      <a href="/company/aaa">Hãng 1</a>
                    </DropdownItem>
                    <DropdownItem>
                      <a href="/company/bbb">Hãng 2</a>
                    </DropdownItem>
                    <DropdownItem>
                      <a href="/company/ccc">Hãng 3</a>
                    </DropdownItem>
                  </DropdownMenu>
                </Dropdown>
              </div>
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

Navbar.propTypes = {
  direction: PropTypes.string,
};

export default Navbar;
