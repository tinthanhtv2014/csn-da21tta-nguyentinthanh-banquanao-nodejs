import React from "react";
import Navbar from "./Navbar";
import Carousel1 from "./Carousel";
import Itemver2 from "./itemv2.js/Itemver2";
import Footer from "./FooterReact";
import Blank from "./Blank";
import ItemHomepage from "./itemHomepage.js/ItemHomepage";
import Blanker2 from "./Blanker2";
import { ToastContainer, toast } from "react-toastify";
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
