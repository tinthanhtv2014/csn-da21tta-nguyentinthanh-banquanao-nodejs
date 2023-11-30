import Navbar from "./Navbar/Navbar";

import Carousel1 from "./Carousel/Carousel";
import Item from "./Item";
import Footer from "./footer/FooterReact";
import Blank from "./blank/Blank";
import "./homepage.css";
import React from "react";
class HomePage extends React.Component {
  render() {
    return (
      <>
        <div className="Container">
          <Navbar />
          <Carousel1 />
          <Blank />
          <Item />
          <Footer />
        </div>
      </>
    );
  }
}
export default HomePage;
