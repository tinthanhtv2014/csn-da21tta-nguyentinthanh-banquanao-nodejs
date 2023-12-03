import Navbar from "./Navbar";

import Carousel1 from "./Carousel";

import Footer from "./FooterReact";
import Blank from "./Blank";
import "./homepage.css";
import React from "react";

import Companyname3 from "./SearchCompanyName3";
class HomeSearchPage extends React.Component {
  render() {
    return (
      <>
        <div className="Container-navbar">
          <Navbar />
        </div>
        <div className="Container-Carou">
          {" "}
          <Carousel1 />
        </div>
        <div className="Container-Blank">
          {" "}
          <Blank />
        </div>
        <div className="container-item">
          {" "}
          <Companyname3 />
        </div>
        <div className="Container-Footer">
          {" "}
          <Footer />
        </div>
      </>
    );
  }
}
export default HomeSearchPage;
