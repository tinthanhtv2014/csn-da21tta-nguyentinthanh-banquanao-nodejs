import "./App.css";
import Navbar from "./Navbar/Navbar";
import GetAPI from "./API/GetAPI";
import Carousel1 from "./Carousel/Carousel";
import Item from "./Item";
import Footer from "./footer/FooterReact";
import Blank from "./blank/Blank";
import ProductDetail from "./thongtinchitietsp";
import React from "react";
import HomePage from "./HomePage";
import Companyname from "./SearchCompanyName";
import Companyname2 from "./SearchCompanyName2";
import Companyname3 from "./SearchCompanyName3";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/" exact component={HomePage} />

          <Route path="/thongtinchitietsp/:id">
            <>
              <Navbar />
              <ProductDetail />
              <Footer />
            </>
          </Route>
          <Route path="/company/aaa">
            <>
              <Navbar />
              <Companyname />
              <Footer />
            </>
          </Route>
          <Route path="/company/bbb">
            <>
              <Navbar />
              <Companyname2 />
              <Footer />
            </>
          </Route>
          <Route path="/company/ccc">
            <>
              <Navbar />
              <Companyname3 />
              <Footer />
            </>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
