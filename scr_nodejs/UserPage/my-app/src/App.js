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
        </Switch>
      </Router>
    </div>
  );
}

export default App;
