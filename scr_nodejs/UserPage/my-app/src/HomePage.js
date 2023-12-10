import React from "react";
import Navbar from "./Navbar";
import Carousel1 from "./Carousel";
import Itemver2 from "./itemv2.js/Itemver2";
import Footer from "./FooterReact";
import Blank from "./Blank";
import ItemHomepage from "./itemHomepage.js/ItemHomepage";
import Blanker2 from "./Blanker2";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
class HomePage extends React.Component {
  componentDidMount() {}

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
          <Itemver2 />
        </div>
        <div className="Container-Blanker">
          {" "}
          <Blanker2 />
        </div>
        <div className="container-item">
          {" "}
          <ItemHomepage />
        </div>
        <div className="Container-FooterSlide">
          {" "}
          <Footer />
        </div>
      </>
    );
  }
}

export default HomePage;
