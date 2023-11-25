import "./App.css";
import Navbar from "./Navbar/Navbar";
import GetAPI from "./API/GetAPI";
import Carousel1 from "./Carousel/Carousel";
import Item from "./Itemproduct/Item";
function App() {
  return (
    <div className="App">
      <Navbar />
      <Carousel1 />
      <GetAPI />
      <Item />
    </div>
  );
}

export default App;
