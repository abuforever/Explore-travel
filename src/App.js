

import React from "react";
import Section from "./Components/Section";
import Navbar from "./Components/Navbar";
import Trending from "./Components/Trending";
import Footer from "./Components/Footer";

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Section />
      <Trending/>
      <Footer/>
    </div>
  );
}

export default App;
