import "./App.css";
import Explore from "./Components/Home/Explore/Explore";
import Footer from "./Components/Home/Footer";
import Hero from "./Components/Home/Hero";

import Nav from "./Components/Home/Nav";

function App() {
  return (
    <div className="App">
      <Nav></Nav>
      <Hero></Hero>
      <Explore></Explore>
      <Footer></Footer>
    </div>
  );
}

export default App;
