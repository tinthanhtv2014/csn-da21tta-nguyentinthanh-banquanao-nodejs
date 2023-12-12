import Navbar from "./Navbar";

import Carousel1 from "./Carousel";

import Footer from "./FooterReact";
import Blank from "./Blank";
import "./homepage.css";
import React from "react";

import Companyname from "./SearchCompanyName";
class HomeSearchPage extends React.Component {
  render() {
    return (
      <>
        <Navbar />

        <Carousel1 />

        <Companyname />

        <Footer />
      </>
    );
  }
}
export default HomeSearchPage;
