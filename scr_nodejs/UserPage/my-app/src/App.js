import "./App.css";
import Navbar from "./Navbar/Navbar";
import GetAPI from "./API/GetAPI";
import Carousel1 from "./Carousel/Carousel";
import Item from "./Itemproduct/Item";
import Footer from "./footer/FooterReact";
import Blank from "./blank/Blank";
function App() {
  return (
    <div className="App">
      <Navbar />
      <Carousel1 />
      <Blank />
      <GetAPI />
      <Item />
      <Footer />
    </div>
  );
}

export default App;
