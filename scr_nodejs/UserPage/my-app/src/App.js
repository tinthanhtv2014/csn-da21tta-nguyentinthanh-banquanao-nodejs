import "./App.css";
import Navbar from "./Navbar";

import Footer from "./FooterReact";

import ProductDetail from "./thongtinchitietsp";
import React from "react";
import HomePage from "./HomePage";
import Companyname from "./SearchCompanyName";
import Companyname2 from "./SearchCompanyName2";
import Companyname3 from "./SearchCompanyName3";
import Thongtindathang from "./thongtindathang";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import HomeSearchPage from "./HomeSearchPage";
import HomeSearchPage2 from "./HomeSearchPage2";
import HomeSearchPage3 from "./HomeSearchPage3";
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
              <HomeSearchPage />
            </>
          </Route>
          <Route path="/company/bbb">
            <>
              <HomeSearchPage2 />
            </>
          </Route>
          <Route path="/company/ccc">
            <>
              <HomeSearchPage3 />
            </>
          </Route>
          <Route path="/thongtindathangsp/:id">
            <>
              <Navbar />
              <Thongtindathang />
              <Footer />
            </>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
