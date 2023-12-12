import React from "react";
import Navbar from "./Navbar";
import Carousel1 from "./Carousel";

import Footer from "./FooterReact";

import FullItem from "./FullItem";
import "react-toastify/dist/ReactToastify.css";
import "./Homepagefull.css";
class HomePageFullitem extends React.Component {
  componentDidMount() {}

  render() {
    return (
      <>
        <Navbar />

        <Carousel1 />

        <FullItem />

        <Footer />
      </>
    );
  }
}

export default HomePageFullitem;
