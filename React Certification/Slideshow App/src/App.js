import React, { useState } from "react";
import "./App.css";
import "h8k-components";

import Slides from "./components/Slides";
const title = "Slideshow App";

function App({ slides }) {
  //create an index state use React hooks
  const [index, setIndex] = useState(0);

  //create functions for navigating slides
  const prevSlide = () => {
    setIndex((index - 1) % slides.length);
  };
  const nextSlide = () => {
    setIndex((index + 1) % slides.length);
  };
  const resetSlide = () => {
    setIndex(0);
  };
  return (
    <div>
      <h8k-navbar header={title}></h8k-navbar>
      <div className="App">
        <Slides
          slides={slides}
          //pass index state and functions as props to Slides component
          index={index}
          prevSlide={prevSlide}
          nextSlide={nextSlide}
          resetSlide={resetSlide}
        />
      </div>
    </div>
  );
}

export default App;
