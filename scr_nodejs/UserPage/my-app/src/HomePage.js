import Navbar from "./Navbar/Navbar";
import GetAPI from "./API/GetAPI";
import Carousel1 from "./Carousel/Carousel";
import Item from "./Item";
import Footer from "./footer/FooterReact";
import Blank from "./blank/Blank";

import React from "react";
class HomePage extends React.Component {
  render() {
    return (
      <>
        <Navbar />
        <Carousel1 />
        <Blank />
        <GetAPI />
        <Item />
        <Footer />
      </>
    );
  }
}
export default HomePage;
